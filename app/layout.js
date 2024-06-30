import { Inter } from "next/font/google";
import "./globals.css";
import MembershipHeader from "@/components/MembershipHeader";
import { MembershipContextProvider } from "@/components/MembershipContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Passhub",
  description: "Next-generation membership management software",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MembershipContextProvider>
          <MembershipHeader />
          {children}
        </MembershipContextProvider>
      </body>
    </html>
  );
}
