'use client';

import { useState, ChangeEvent } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { z } from 'zod';
import { loginSchema } from '@/schema/userSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

type FormErrors = {
  email?: string;
  password?: string;
  general?: string;
};

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const validateForm = () => {
    try {
      loginSchema.parse(formData);
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
      setErrors({ general: 'Validation failed' });
      return false;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setErrors({ general: 'Invalid email or password' });
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ general: 'Network error, please try again' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#FFF8E7] rounded-lg shadow-md">
      <div className="flex mb-6 border-b">
        <Link
          href="/register"
          className="pb-2 px-8 text-[#D6A419] hover:text-[#B58A14]"
        >
          Register
        </Link>
        <div className="pb-2 px-8 font-medium border-b-2 border-[#D6A419] text-black">
          Login
        </div>
      </div>

      {errors.general && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{errors.general}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="email" className="block mb-2 text-gray-700">
            E-mail Id
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your e-mail id here..."
            required
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full p-4 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#D6A419]"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div className="mb-8">
          <Label htmlFor="password" className="block mb-2 text-gray-700">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password here..."
            required
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? 'password-error' : undefined}
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
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Don’t have an account?{' '}
        <Link href="/register" className="text-[#D6A419] hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
