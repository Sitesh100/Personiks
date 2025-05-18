import { NextResponse } from 'next/server';

// Google Apps Script Web App URL
const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwGwg5xToRTuT_66wJt_AEsNRtJL4g-x46UsosALi62mappGH0i7-SHHOnjTkMK4A6XOw/exec';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, mainService, subService } = body;

    // Validate input
    if (!name || !phone || !address || !mainService || !subService) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Forward to Google Apps Script
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        mainService,
        subService,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Sheets');
    }

    const result = await response.json();
    return NextResponse.json(
      { message: 'Booking submitted successfully', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in booking API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
