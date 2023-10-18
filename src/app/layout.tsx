import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "font-awesome/css/font-awesome.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMK NEGERI 1 BANYUASIN III"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div id="modal" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
