"use client"

import { NextUIProvider } from "@nextui-org/system";
import { MembershipContextProvider } from "./MembershipContext";
import { useRouter } from "next/navigation";

export default function ClientProviders({ children }) {
  const router = useRouter();

  return (
    <NextUIProvider disablebaseline="true" navigate={router.push}>
      <MembershipContextProvider>
        {children}
      </MembershipContextProvider>
    </NextUIProvider>
  );
}