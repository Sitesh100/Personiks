// types/blog.d.ts
import type { ResolvingMetadata } from 'next';
import { ReactNode } from 'react';

export interface BlogAuthor {
  name: string;
  title: string;
  avatar?: string;
}

export interface BlogStep {
  title: string;
  description: string[];
}

export interface BlogTestimonial {
  content: string;
  name: string;
  role?: string;
}

export interface BlogBenefit {
  title: string;
  description: string;
  icon?: ReactNode;
}

export interface BlogData {
  title: string;
  subtitle: string;
  image: string;
  publishedDate: string;
  readTime: string;
  keywords: string[];
  heroDescription: string[];
  whatIsThis: {
    title: string;
    description: string[];
  };
  benefits: BlogBenefit[];
  whyChooseUs: {
    description: string[];
    author: BlogAuthor;
    quote?: string;
  };
  procedure: {
    steps: BlogStep[];
  };
  suitableFor?: {
    title: string;
    description: string[];
  };
  testimonials: BlogTestimonial[];
  cta?: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export interface BlogDataMap {
  [key: string]: BlogData;
}

export interface GenerateMetadataProps {
  params: { blogId: string };
  parent?: ResolvingMetadata;
}

export interface BlogPageProps {
  params: { blogId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
