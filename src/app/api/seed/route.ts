import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import PageData from '@/models/PageData';
import pageData from '@/utils/data'; // Adjust path to your data.ts

export async function POST(request: Request) {
  try {
    // Validate API key for security
    const apiKey = request.headers.get('x-api-key');
    if (apiKey !== process.env.SEED_API_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to database
    await dbConnect();

    // Clear existing data
    await PageData.deleteMany({});

    // Transform pageData into array with slug
    const dataArray = Object.keys(pageData).map((slug) => ({
      ...pageData[slug],
      slug,
    }));

    // Insert data in batches for large datasets
    const batchSize = 100;
    for (let i = 0; i < dataArray.length; i += batchSize) {
      await PageData.insertMany(dataArray.slice(i, i + batchSize));
    }

    // Return success response
    return NextResponse.json(
      { message: 'Data successfully inserted', count: dataArray.length },
      { status: 201 }
    );
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
