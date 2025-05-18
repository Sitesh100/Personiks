'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - can be connected to an API endpoint
    console.log('Form submitted:', formData);
    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: '',
      });
    }, 3000);
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  // Form field animation variants
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

  // Success message animation variants
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
      className="bg-amber-50 rounded-3xl p-8 max-w-3xl mx-auto overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            className="absolute inset-0 flex flex-col items-center justify-center bg-amber-50 z-10"
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
              <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
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
              className="text-gray-700 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Thank you for registering for the workshop. We&apos;ll be in touch
              soon.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  animate={
                    focusedField === 'firstName'
                      ? {
                          boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.6)',
                        }
                      : {}
                  }
                >
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name here..."
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    required
                    className="bg-transparent border-black rounded-xl transition-all duration-200"
                  />
                </motion.div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-900"
                >
                  Last name
                </label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  animate={
                    focusedField === 'lastName'
                      ? {
                          boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.6)',
                        }
                      : {}
                  }
                >
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name here..."
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    required
                    className="bg-transparent border-black rounded-xl transition-all duration-200"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                animate={
                  focusedField === 'phoneNumber'
                    ? {
                        boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.6)',
                      }
                    : {}
                }
              >
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number here..."
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phoneNumber')}
                  onBlur={handleBlur}
                  required
                  className="bg-transparent border-black rounded-xl transition-all duration-200"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                E-mail address
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                animate={
                  focusedField === 'email'
                    ? {
                        boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.6)',
                      }
                    : {}
                }
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email here..."
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                  className="bg-transparent border-black rounded-xl transition-all duration-200"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <motion.div
                whileFocus={{ scale: 1.02 }}
                animate={
                  focusedField === 'message'
                    ? {
                        boxShadow: '0 0 0 2px rgba(251, 191, 36, 0.6)',
                      }
                    : {}
                }
              >
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="w-full bg-transparent border border-black rounded-xl h-24 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200"
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-2 text-gray-900"
              variants={itemVariants}
            >
              <ul className="list-disc pl-5 space-y-1">
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
                  Please note that payments made are non-refundable.
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="flex justify-center pt-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  type="submit"
                  className="w-full md:w-64 bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 rounded-xl transition-colors"
                >
                  REGISTER
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
