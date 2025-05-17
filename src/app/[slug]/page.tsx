import React from 'react';
import DropDownPage from '@/components/DropDownPages/DropDownPages'; // Fixed the import path to match your error message
import pageData from '@/utils/data'; // Adjusted the import path to match your project structure
import { notFound } from 'next/navigation';

// Define the type for params
interface Props {
  params: Promise<{ slug: keyof typeof pageData }>;
}

const DynamicPage = async ({ params }: Props) => {
  // Await the params object to resolve the Promise
  const { slug } = await params;
  const data = pageData[slug];

  if (!data) {
    notFound(); // Show 404 if the slug doesn't exist in pageData
  }

  return (
    <div>
      <DropDownPage
        title={data.title}
        subtitle={data.subtitle}
        features={data.features}
        procedureInfo={data.procedureInfo}
        faqs={data.faqs}
        beforeAfterImage={data.beforeAfterImage}
      />
    </div>
  );
};

export default DynamicPage;

// Generate static paths for all slugs (optional, for static generation)
export async function generateStaticParams() {
  const slugs = Object.keys(pageData);
  return slugs.map((slug) => ({
    slug,
  }));
}
