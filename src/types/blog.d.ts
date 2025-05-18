// types/blog.ts
import { ReactNode } from 'react';

// Update the BlogPageProps interface to match Next.js expectations
export interface BlogPageProps {
  params: {
    blogId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Update the GenerateMetadataProps for metadata generation
export interface GenerateMetadataProps {
  params: Promise<{
    blogId: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
  parent: Promise<Metadata>;
}

// Define interfaces for blog data structure
export interface BlogAuthor {
  name: string;
  title: string;
  avatar: string;
}

export interface BlogBenefit {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BlogProcedureStep {
  title: string;
  description: string[];
}

export interface BlogTestimonial {
  name: string;
  content: string;
  role: string;
}

export interface BlogCallToAction {
  title: string;
  description: string;
  buttonText: string;
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
    quote: string;
  };
  procedure: {
    steps: {
      title: string;
      description: string[];
    }[];
  };
  suitableFor: {
    title: string;
    description: string[];
  };
  testimonials: BlogTestimonial[];
  cta: BlogCallToAction;
}

export interface BlogDataMap {
  [key: string]: BlogData;
}
