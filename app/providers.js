import { NextUIProvider } from "@nextui-org/react";
import { MembershipContextProvider } from "@/components/MembershipContext";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";

export default async function Providers({ children }) {
  const session = await getServerSession();
  return (
    <SessionProvider session={session}>
      <NextUIProvider disableBaseline="true">
        <MembershipContextProvider>{children}</MembershipContextProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
