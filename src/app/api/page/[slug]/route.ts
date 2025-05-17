import { NextResponse, NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import PageData from '@/models/PageData';

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  const { params } = context;
  await dbConnect();

  try {
    const page = await PageData.findOne({ slug: params.slug }).lean();
    if (!page) {
      return NextResponse.json({ message: 'Page not found' }, { status: 404 });
    }

    return NextResponse.json(page);
  } catch (error) {
    console.error('Error fetching page data:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
