import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
const font = Nunito({ subsets: ["latin"] });

import ClerkProvider from "@/providers/clerk-provider";

export const metadata: Metadata = {
  title: "Duolingo Clone"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}

export default Layout;
