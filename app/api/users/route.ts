import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    const msg = error.message;
    // Check for TurboPack verbose internal strings
    if (msg.includes('TURBOPACK') || msg.includes('imported__module')) {
      // Check for unique constraint in the full error
      const causeMsg = error.cause instanceof Error ? error.cause.message : '';
      if (causeMsg.includes('Unique constraint failed') || msg.includes('email')) {
        return 'Email already exists';
      }
      return 'Database operation failed';
    }
    // Try error.cause for cleaner message
    if (error.cause instanceof Error) {
      const causeMsg = error.cause.message;
      if (causeMsg.includes('Unique constraint failed')) {
        return 'Email already exists';
      }
      if (causeMsg.includes('Record to update')) {
        return 'User not found';
      }
      return causeMsg;
    }
    return msg;
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