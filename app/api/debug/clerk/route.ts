import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = clerkClient();
    const users = await client.users.getUserList({ limit: 5 });
    const userList = users.data.map(u => ({ id: u.id, emails: u.emailAddresses.map(e => e.emailAddress) }));
    return NextResponse.json({ success: true, count: users.data.length, users: userList });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
