import { LocalesI18nConfig } from "@/i18n/config";
import { createI18nClient } from "next-international/client";

/**
 * Create i18n client.
 */
const I18nClient = createI18nClient(LocalesI18nConfig);

/**
 * Component wrapper for client components that needs i18n.
 */
export function withI18n<T extends { children?: React.ReactNode }>(
  Component: React.ComponentType<T>,
): React.ComponentType<T> {
  return function i18n(props: React.PropsWithChildren<T>) {
    return (
      <I18nClient.I18nProviderClient>
        <Component {...props} />
      </I18nClient.I18nProviderClient>
    );
  };
}

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
