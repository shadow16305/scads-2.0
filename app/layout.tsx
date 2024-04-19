import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import Footer from "@/components/footer/footer";
import Providers from "./providers";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "overflow-x-hidden bg-[#F4F3F2] dark:bg-dark-blue",
          inter.className,
        )}
      >
        <Providers>
          <MainNavigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
