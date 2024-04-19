import ToasterProvider from "@/providers/toast-provider";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ToasterProvider />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
