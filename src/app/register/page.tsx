"use client";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { registerSchema } from "@/schema/userSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  general?: string;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    try {
      registerSchema.parse(formData);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: FormErrors = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormErrors;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
        return false;
      }
      setErrors({ general: "Validation failed" });
      return false;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    // Validate form data
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrors({ general: data.error || "Registration failed" });
        if (data.details) {
          // Handle specific validation errors from server
          const serverErrors: FormErrors = {};
          data.details.forEach((err: { path: string[]; message: string }) => {
            const field = err.path[0] as keyof FormErrors;
            serverErrors[field] = err.message;
          });
          setErrors(serverErrors);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrors({ general: "Network error, please try again" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFF8E7] rounded-lg shadow-md">
      <div className="flex mb-6 border-b">
        <div className="pb-2 px-8 font-medium border-b-2 border-[#D6A419] text-black">
          Register
        </div>
        <Link href="/login" className="pb-2 px-8 text-[#D6A419] hover:text-[#B58A14]">
          Login
        </Link>
      </div>
      
      {errors.general && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{errors.general}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="fullName" className="block mb-2 text-gray-700">Full name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your first name here..."
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className="w-full p-4 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#D6A419]"
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-red-500 text-sm mt-1">
              {errors.fullName}
            </p>
          )}
        </div>
        
        <div className="mb-6">
          <Label htmlFor="email" className="block mb-2 text-gray-700">E-mail Id</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your e-mail id here..."
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full p-4 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#D6A419]"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>
        
        <div className="mb-6">
          <Label htmlFor="phone" className="block mb-2 text-gray-700">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your number here..."
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full p-4 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#D6A419]"
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>
        
        <div className="mb-8">
          <Label htmlFor="password" className="block mb-2 text-gray-700">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your new password here..."
            required
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            className="w-full p-4 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#D6A419]"
          />
          {errors.password && (
            <p id="password-error" className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full p-4 bg-[#D6A419] hover:bg-[#B58A14] text-white rounded-md font-medium" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </Button>
      </form>
      
      <p className="mt-6 text-center text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#D6A419] hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}