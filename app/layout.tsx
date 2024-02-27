import type { Metadata } from "next";
import "./globals.css";
import MainNavigation from "@/components/main-navigation/MainNavigation";
import Footer from "@/components/footer/Footer";
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
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden bg-[#050A12] font-['Quicksand',sans-serif]">
        <Providers>
          <MainNavigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
