import { LanguageProvider } from "@/contexts/localization";
import ToasterProvider from "@/providers/toast-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <ToasterProvider />
      {children}
    </LanguageProvider>
  );
};

export default Providers;
