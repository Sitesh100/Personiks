// app/blogs/[blogId]/page.tsx
import { notFound } from 'next/navigation';
import { blogData } from '@/utils/blog.data';
import ProfessionalBlogPage from '@/components/blogs/ProfessionalBlogPage';

export async function generateStaticParams() {
  return Object.keys(blogData).map((blogId) => ({
    blogId,
  }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params; // Await params to resolve the Promise
  const data = blogData[blogId];

  if (!data) {
    notFound();
  }

  return <ProfessionalBlogPage blogData={data} />;
}
