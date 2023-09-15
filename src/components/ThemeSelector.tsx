"use client";

import { Flex, Logos, Switch, Text } from "@ledgerhq/react-ui";
import { useContext } from "react";
import { ThemeContext } from "@/styles/provider";

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <Flex flexDirection="column" alignItems="center" rowGap={12} p={12}>
      <Text color="neutral.c100">
        <Logos.LedgerLiveRegular />
      </Text>
      <Text variant="h1">Hello, world!</Text>
      <Switch
        name="select-theme"
        checked={isLight}
        onChange={() => setTheme(isLight ? "dark" : "light")}
      />
    </Flex>
  );
}
