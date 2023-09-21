import { createI18nMiddleware } from "next-international/middleware";
import { DEFAULT_LOCALE, LOCALES } from "./config";

export const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: "rewrite",
});
