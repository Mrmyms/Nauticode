import { NextResponse } from "next/server";
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
    return NextResponse.json({ success: true, userId });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message, stack: error.stack }, { status: 500 });
  }
}
