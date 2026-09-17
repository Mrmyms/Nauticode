import { NextResponse } from "next/server";
import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { getIsAdmin } from "@/lib/admin";

export const dynamic = 'force-dynamic';

export async function GET() {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized.", { status: 401 });
  }

  try {
    const { userId } = await auth();
    const courses = await db.query.courses.findMany();
    let up = null;
    if (userId) {
      up = await db.query.userProgress.findFirst({
        where: (up, { eq }) => eq(up.userId, userId)
      });
    }
    return NextResponse.json({ success: true, count: courses.length, userId, hasUp: !!up });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stack: error.stack }, { status: 500 });
  }
}
