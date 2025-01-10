import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const hashedPassword = bcrypt.hashSync(password, 10);
 
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });
   
    const token = jwt.sign({ userId: user.id },  process.env.JWT_SECRET!, { expiresIn: '1h' });
    (await cookies()).set('token', token);
   
    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 201 });
  }
 
}