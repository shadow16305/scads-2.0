import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/main-navigation";
import Footer from "@/components/footer/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Scads",
  description: "ScadsSwap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="overflow-x-hidden bg-[#F4F3F2] font-['Quicksand',sans-serif] dark:bg-[#000212]">
        <Providers>
          <MainNavigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
