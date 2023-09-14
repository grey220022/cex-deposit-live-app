import { LocalesI18nConfig } from "@/i18n";
import { createI18nClient } from "next-international/client";

/**
 * Create i18n client.
 */
const I18nClient = createI18nClient(LocalesI18nConfig);

/**
 * Component wrapper for client components that needs i18n.
 */
export const { I18nProviderClient } = I18nClient;

/**
 * i18n client hook.
 *
 * @returns the necessary functions and variables to use i18n on client components.
 */
export const useI18n = () => {
  const t = I18nClient.useI18n();
  const changeLocale = I18nClient.useChangeLocale();

  const locale = I18nClient.useCurrentLocale();

  return { t, changeLocale, locale };
};
