"use client";

import { StyleProvider as LedgerStyleProvider } from "@ledgerhq/react-ui";
import { StyledComponentsRegistry } from "./registry";
import React from "react";

type Theme = "dark" | "light";

const defaultTheme: Theme = "dark";

export const ThemeContext = React.createContext({
  theme: defaultTheme as Theme,
  setTheme: (() => {}) as React.Dispatch<Theme>,
});

export function StyleProvider(props: React.ComponentProps<typeof LedgerStyleProvider>) {
  const [theme, setTheme] = React.useState(defaultTheme);
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <StyledComponentsRegistry>
        <LedgerStyleProvider {...props} selectedPalette={theme} />;
      </StyledComponentsRegistry>
    </ThemeContext.Provider>
  );
}
