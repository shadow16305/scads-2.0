import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import Footer from "@/components/footer/footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import ToasterProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "Scads",
  description: "ScadsSwap",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn("overflow-x-hidden bg-dark-blue", inter.className)}>
        <ToasterProvider />
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
