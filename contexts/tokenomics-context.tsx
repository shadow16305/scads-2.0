"use client";

import React, { createContext, useState, ReactNode } from "react";

interface TokenomicsContextObject {
  activeItem: string;
  setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

export const TokenomicsContext = createContext<TokenomicsContextObject>({
  activeItem: "",
  setActiveItem: () => {},
});

const TokenomicsContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeText, setActiveText] = useState<string>("SCADS");

  const contextValue: TokenomicsContextObject = {
    activeItem: activeText,
    setActiveItem: setActiveText,
  };

  return (
    <TokenomicsContext.Provider value={contextValue}>
      {children}
    </TokenomicsContext.Provider>
  );
};

export default TokenomicsContextProvider;
