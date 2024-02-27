import { ThemeContextProvider } from "@/contexts/theme-context";
import TokenomicsContextProvider from "@/contexts/tokenomics-context";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContextProvider>
      <TokenomicsContextProvider>{children}</TokenomicsContextProvider>
    </ThemeContextProvider>
  );
};

export default Providers;
