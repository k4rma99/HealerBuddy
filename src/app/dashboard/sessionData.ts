"use server";

import { getServerSession } from "next-auth";

export async function fetchSessionData() {
  const session = getServerSession();
  return session?.user;
}
