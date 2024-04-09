import TokenomicsContextProvider from "@/contexts/tokenomics-context";
import ToasterProvider from "@/providers/toast-provider";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <ToasterProvider />
      <TokenomicsContextProvider>{children}</TokenomicsContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
