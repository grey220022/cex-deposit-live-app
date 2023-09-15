import { LocalesI18nConfig } from "@/i18n/config";
import { createI18nServer } from "next-international/server";

/**
 * Create i18n server.
 */
const I18nServer = createI18nServer(LocalesI18nConfig);

/**
 * i18n server hook.
 *
 * @returns the necessary functions and variables to use i18n on server components.
 */
export const useI18n = async () => {
  const t = await I18nServer.getI18n();
  const getStaticParams = I18nServer.getStaticParams;

  const locale = I18nServer.getCurrentLocale();

  return { t, getStaticParams, locale };
};
