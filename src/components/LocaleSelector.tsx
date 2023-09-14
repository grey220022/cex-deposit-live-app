"use client";

import { useChangeLocale, useCurrentLocale } from "@/i18n/client";

const LocaleSelector = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      <button onClick={() => (locale === "en" ? changeLocale("fr") : changeLocale("en"))}>
        Click me to change locale
      </button>
    </>
  );
};

export default LocaleSelector;
