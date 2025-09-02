import { NextResponse } from 'next/server';
import { firestore } from '@/firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const problemData = await req.json();

    const { id, title, difficulty, category, order, starterCode, handlerFunction, videoId } = problemData;

    // Basic validation
    if (!id || !title || !difficulty || !category || order === undefined || !starterCode || !handlerFunction) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Check if problem with this ID already exists (optional, but good practice)
    // In a real application, you might want to fetch and check if doc.exists

    const problemRef = doc(firestore, 'problems', id);
    await setDoc(problemRef, {
      id,
      title,
      difficulty,
      category,
      order,
      starterCode,
      handlerFunction,
      videoId: videoId || null, // Allow videoId to be optional
    });

    return NextResponse.json({ message: 'Problem added successfully!', problemId: id }, { status: 201 });
  } catch (error: any) {
    console.error('Error adding problem:', error);
    return NextResponse.json({ error: error.message || 'Failed to add problem.' }, { status: 500 });
  }
}
