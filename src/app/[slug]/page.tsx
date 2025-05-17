import { notFound } from 'next/navigation';
import DropDownPage from '@/components/DropDownPages/DropDownPages';
import dbConnect from '@/lib/db';
import PageData from '@/models/PageData';

interface PageParams {
  slug: string;
}

interface PageDataResponse {
  _id?: string;
  slug: string;
  title: string;
  subtitle: string;
  features: { img: string; title: string }[];
  procedureInfo: {
    coloredTitle: string;
    title: string;
    bulletPoints: string[];
  };
  faqs: { question: string; answer: string }[];
  beforeAfterImage: string;
}

async function fetchPageData(slug: string): Promise<PageDataResponse | null> {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/page/${slug}`,
      {
        cache: 'no-store', // ensures fresh content
      }
    );

    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
}

const DynamicPage = async ({ params }: { params: PageParams }) => {
  const { slug } = params;
  const data = await fetchPageData(slug);

  if (!data) return notFound();

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

// Optional SEO metadata
export async function generateMetadata({ params }: { params: PageParams }) {
  const data = await fetchPageData(params.slug);
  if (!data) return { title: 'Page Not Found' };

  return {
    title: data.title,
    description: data.subtitle,
  };
}

// Generate static paths for build
export async function generateStaticParams(): Promise<PageParams[]> {
  await dbConnect();
  const pages = await PageData.find({}, 'slug').lean();

  return pages.map((page) => ({
    slug: page.slug as string,
  }));
}
