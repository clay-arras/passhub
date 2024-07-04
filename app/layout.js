import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import { getServerSession } from "next-auth";
import SessionProvider from "@/app/components/SessionProvider";
import ClientProviders from "./components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Passhub",
  description: "Next-generation membership management software",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ClientProviders>
            <Header />
            <main>{children}</main>
          </ClientProviders>
        </SessionProvider>
      </body>
    </html>
  );
}
