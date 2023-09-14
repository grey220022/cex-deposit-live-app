"use client";

import { withI18n, useI18n } from "@/i18n/client";

const LocaleSelector = () => {
  const { locale, changeLocale, t } = useI18n();

  return (
    <>
      <button onClick={() => (locale === "en" ? changeLocale("fr") : changeLocale("en"))}>
        Click me to change the current locale to: {locale === "en" ? "fr" : "en"}
        <div>{t("welcome")}</div>
      </button>
    </>
  );
};

export default withI18n(LocaleSelector);
