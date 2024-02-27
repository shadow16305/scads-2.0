"use client";

import { ReactNode, createContext, useState } from "react";

type ThemeContextObject = {
  toggleTheme: () => void;
  isLight: boolean;
};

export const ThemeContext = createContext<ThemeContextObject>({
  toggleTheme: () => {},
  isLight: false,
});

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLight, setIsLight] = useState<boolean>(false);

  const toggleThemeHandler = () => {
    setIsLight((prevIsLight) => !prevIsLight);
  };

  const contextValue: ThemeContextObject = {
    toggleTheme: toggleThemeHandler,
    isLight: isLight,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
