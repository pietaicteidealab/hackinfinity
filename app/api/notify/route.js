import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Save to Firestore
    await db.collection('notifications').add({
      email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to notifications' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error saving notification:', error);
    return NextResponse.json(
      { error: 'Failed to save notification' },
      { status: 500 }
    );
  }
} 