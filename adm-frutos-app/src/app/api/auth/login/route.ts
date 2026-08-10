import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { PrismaClient } from "@/generated/prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {

    const body = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Usuário não encontrado" },
        { status: 401 }
      );
    }

    const validPassword = await bcrypt.compare(
      body.password,
      user.passwordHash
    );

    if (!validPassword) {
      return NextResponse.json(
        { message: "Senha inválida" },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set(
      "auth-token",
      user.id,
      {
        httpOnly: true,
        path: "/",
      }
    );

    return response;

  } catch (error) {

    return NextResponse.json(
      { message: "Erro interno" },
      { status: 500 }
    );

  }
}