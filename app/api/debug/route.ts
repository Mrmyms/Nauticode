import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasDb: !!process.env.DATABASE_URL,
    dbStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : null,
  });
}
