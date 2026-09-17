import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { getIsAdmin } from "@/lib/admin";
import { App } from "./app";

const AdminPage = async () => {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");

  const isAdmin = await getIsAdmin();

  if (!isAdmin) redirect("/");

  return <App />;
};

export default AdminPage;
