"use client"

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session } = useSession();
  // if (session === null) {
  //   redirect("/api/auth/signin");
  // }

  return (
    <div>
      {
        (session === null ? "NULL" : "GOOD")
      }
    </div>
  );
}
