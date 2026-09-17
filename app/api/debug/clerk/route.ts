import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import { getIsAdmin } from "@/lib/admin";

export const dynamic = 'force-dynamic';

export async function GET() {
  const isAdmin = await getIsAdmin();
  if (!isAdmin) {
    return new NextResponse("Unauthorized.", { status: 401 });
  }

  try {
    const client = await clerkClient();
    const users = await client.users.getUserList({ limit: 5 });
    const userList = users.data.map(u => ({ id: u.id, emails: u.emailAddresses.map(e => e.emailAddress) }));
    return NextResponse.json({ success: true, count: users.data.length, users: userList });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
