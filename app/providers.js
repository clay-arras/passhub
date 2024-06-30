import { NextUIProvider } from "@nextui-org/react";
import { MembershipContextProvider } from "@/app/components/MembershipContext";
import SessionProvider from "@/app/components/SessionProvider";
import { getServerSession } from "next-auth";
import { useRouter } from "next/navigation";

export default async function Providers({ children }) {
  const session = await getServerSession();
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <NextUIProvider disableBaseline="true" navigate={router.push}>
        <MembershipContextProvider>{children}</MembershipContextProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
