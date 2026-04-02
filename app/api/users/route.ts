import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    // Try to get cleaner message from Prisma error.cause
    if (error.cause instanceof Error) {
      return error.cause.message;
    }
    // Clean up verbose Prisma errors
    const match = error.message.match(/`([^`]+)`/);
    if (match) return match[1];
    return error.message;
  }
  return 'Unknown error';
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    const message = getErrorMessage(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    const user = await prisma.user.create({ data: { name, email } });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    const message = getErrorMessage(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, name, email } = await request.json();
    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    const message = getErrorMessage(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') as string);
    
    if (!id) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }
    
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    const message = getErrorMessage(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}