'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function WorkshopForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Valid email is required';
    if (!formData.phoneNumber.match(/^\+?\d{10,15}$/))
      newErrors.phoneNumber = 'Valid phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
      setErrors({});
    }, 3000);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Registration Successful!
            </motion.h3>
            <motion.p
              className="text-gray-600 text-center max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank you for registering for the workshop. We&apos;ll send you a
              confirmation email soon.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (
                e.key === 'Enter' &&
                e.target instanceof HTMLTextAreaElement
              ) {
                e.preventDefault();
              }
            }}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Workshop Registration
              </h2>
              <p className="text-gray-600 mt-2">
                Join our exclusive workshop on August 7-8, 2025
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              variants={itemVariants}
            >
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  animate={
                    focusedField === 'firstName'
                      ? { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }
                      : {}
                  }
                >
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.firstName}
                    className={`w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </motion.div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  animate={
                    focusedField === 'lastName'
                      ? { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }
                      : {}
                  }
                >
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.lastName}
                    className={`w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                animate={
                  focusedField === 'phoneNumber'
                    ? { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }
                    : {}
                }
              >
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+1234567890"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phoneNumber')}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.phoneNumber}
                  className={`w-full rounded-lg border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phoneNumber}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                animate={
                  focusedField === 'email'
                    ? { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }
                    : {}
                }
              >
                <Input
                  id="email"
                  name="email"
                  type="email "
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  aria-invalid={!!errors.email}
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                animate={
                  focusedField === 'message'
                    ? { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)' }
                    : {}
                }
              >
                <textarea
                  id="message"
                  name="message"
                  placeholder="Any additional information or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border border-gray-300 h-32 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-y"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-3 bg-gray-50 p-4 rounded-lg"
              variants={itemVariants}
            >
              <h4 className="text-sm font-semibold text-gray-900">
                Workshop Details
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Early Bird Registration Fee: ₹1,60,000/- + 18% GST (valid
                  until June 15th). Thereafter ₹2,00,000/- + 18% GST
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  The workshop is on 7th & 8th August 2025
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  Please note that payments made are non-refundable
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="flex justify-center pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  className="w-full sm:w-64 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                  disabled={Object.keys(errors).length > 0}
                >
                  Register Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
