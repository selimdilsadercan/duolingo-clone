import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
const font = Nunito({ subsets: ["latin"] });

import ClerkProvider from "@/providers/clerk-provider";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/providers/modal-provider";

export const metadata: Metadata = {
  title: "Duolingo Clone"
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClerkProvider>
          {children}
          <ToastProvider />
          <ModalProvider />
        </ClerkProvider>
      </body>
    </html>
  );
}

export default Layout;
