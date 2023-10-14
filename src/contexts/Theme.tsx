"use client";

import { createContext, useState } from "react";

type Theme = "light" | "dark";

const initialTheme: ThemeContextProps = {
  selectedTheme: "dark",
  setSelectedTheme: () => null,
};

export type ThemeContextProps = {
  selectedTheme: Theme;
  setSelectedTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextProps>(initialTheme);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(
    initialTheme?.selectedTheme
  );

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
