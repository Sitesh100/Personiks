// components/blogs/ProfessionalBlogPage.tsx
import React from 'react';
import Header from '@/components/Header';
import {
  Quote,
  GraduationCap,
  Clock,
  Calendar,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Footer from '../Footer';
import type { BlogData } from '@/types/blog';
import Link from 'next/link';

interface ProfessionalBlogPageProps {
  blogData: BlogData;
}

const ProfessionalBlogPage: React.FC<ProfessionalBlogPageProps> = ({
  blogData,
}) => {
  const defaultCTA = {
    title: 'Ready to Learn More?',
    description: 'Get in touch with us for more information about this topic.',
    buttonText: 'Contact Us',
  };

  const ctaData = blogData.cta || defaultCTA;

  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <nav>
        <Header />
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-8 shadow-xl">
            <Image
              src={blogData.image}
              alt={blogData.title}
              fill
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex flex-wrap gap-3 mb-4">
                {blogData.keywords.slice(0, 4).map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black/70 text-[#D9AC47] rounded-full text-sm backdrop-blur-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
                {blogData.title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-[#D9AC47] mb-4 font-medium">
                {blogData.subtitle}
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center text-gray-300">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  {blogData.publishedDate}
                </span>
                <span className="flex items-center text-gray-300">
                  <Clock className="mr-1.5 h-4 w-4" />
                  {blogData.readTime}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#1e1e1e] p-8 rounded-2xl shadow-lg max-w-7xl mx-auto border border-[#2d2d2d]">
            {blogData.heroDescription.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-300 mb-4 text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* What is This Section */}
        {blogData.whatIsThis && (
          <section className="mb-16 bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-[#2d2d2d]">
            <h2 className="text-3xl font-bold mb-6 text-[#D9AC47] flex items-center">
              <GraduationCap className="mr-3" /> {blogData.whatIsThis.title}
            </h2>
            <div className="space-y-4">
              {blogData.whatIsThis.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {blogData.benefits && blogData.benefits.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#D9AC47]">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e1e] p-6 rounded-xl border border-[#2d2d2d] hover:border-[#D9AC47] transition-all group"
                >
                  <div className="flex items-center mb-3">
                    {benefit.icon || <Zap className="text-[#D9AC47] mr-2" />}
                    <h3 className="text-xl font-semibold text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        {blogData.whyChooseUs && (
          <section className="mb-16 bg-[#1e1e1e] p-8 rounded-2xl shadow-lg border border-[#2d2d2d]">
            <h2 className="text-3xl font-bold mb-6 text-[#D9AC47]">
              Why This Matters
            </h2>
            <div className="space-y-6">
              {blogData.whyChooseUs.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Procedure Section */}
        {blogData.procedure &&
          blogData.procedure.steps &&
          blogData.procedure.steps.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-[#D9AC47]">
                Key Details
              </h2>
              <div className="space-y-8">
                {blogData.procedure.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-6 group"
                  >
                    <div className="bg-[#D9AC47] text-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xl group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <div className="bg-[#1e1e1e] p-6 rounded-xl border border-[#2d2d2d] flex-1 group-hover:border-[#D9AC47] transition-colors">
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {step.title}
                      </h3>
                      {step.description.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-300 mb-3">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        {/* Testimonials Section */}
        {blogData.testimonials && blogData.testimonials.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#D9AC47]">
              What People Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogData.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#1e1e1e] p-6 rounded-xl border border-[#2d2d2d] hover:border-[#D9AC47] transition-colors"
                >
                  <Quote className="text-[#D9AC47] text-2xl mb-4 rotate-180" />
                  <p className="text-gray-300 italic mb-4">
                    {testimonial.content}
                  </p>
                  <div>
                    <p className="text-white font-medium">
                      — {testimonial.name}
                    </p>
                    {testimonial.role && (
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#D9AC47] to-[#f0d078] p-8 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            {ctaData.title}
          </h2>
          <p className="text-black/90 mb-6 text-lg max-w-2xl mx-auto">
            {ctaData.description}
          </p>
          <Link href="/register">
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1a1a1a] transition-all flex items-center mx-auto">
              {ctaData.buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </section>
      </div>
      <div className="px-20">
        <Footer />
      </div>
    </div>
  );
};

export default ProfessionalBlogPage;
