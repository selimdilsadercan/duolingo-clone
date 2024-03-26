import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import ClerkProvider from "@/providers/clerk-provider";
const font = Nunito({ subsets: ["latin"] });

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
