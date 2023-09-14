import { createI18nClient } from "next-international/client";

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } =
  createI18nClient({
    en: () => import("./locales/en.json"),
    fr: () => import("./locales/fr.json"),
  });
