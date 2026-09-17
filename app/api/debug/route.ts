import { NextResponse } from "next/server";
import { getIsAdmin } from "@/lib/admin";

export const dynamic = 'force-dynamic';

export async function GET() {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized.", { status: 401 });
  }

  return NextResponse.json({
    hasDb: !!process.env.DATABASE_URL,
    dbStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : null,
  });
}
