import { NextResponse } from "next/server";
import db from "@/db/drizzle";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const courses = await db.query.courses.findMany();
    return NextResponse.json({ success: true, count: courses.length, courses });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stack: error.stack }, { status: 500 });
  }
}
