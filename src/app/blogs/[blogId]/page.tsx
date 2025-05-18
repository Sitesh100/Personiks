// app/blogs/[blogId]/page.tsx
import { notFound } from 'next/navigation';
import { blogData } from '@/utils/blog.data';
import ProfessionalBlogPage from '@/components/blogs/ProfessionalBlogPage';
import type { BlogPageProps, GenerateMetadataProps } from '@/types/blog';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return Object.keys(blogData).map((blogId) => ({
    blogId,
  }));
}

export async function generateMetadata({
  params,
  parent,
}: GenerateMetadataProps): Promise<Metadata> {
  // Await params to resolve the Promise
  const { blogId } = await params;
  const post = blogData[blogId];

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: post.title,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [...previousImages, post.image || '/default-blog-image.jpg'],
      type: 'article',
      publishedTime: post.publishedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.subtitle,
      images: [post.image || '/default-blog-image.jpg'],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  // Await params to resolve the Promise
  const { blogId } = await params;
  const data = blogData[blogId];

  if (!data) {
    notFound();
  }

  return <ProfessionalBlogPage blogData={data} />;
}
