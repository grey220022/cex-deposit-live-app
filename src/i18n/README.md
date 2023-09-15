# Internationalization

> In order to use internationalization we are using the [`next-international`](https://github.com/QuiiBz/next-international) library.

## Get started

### Locales

The folder `locales` at the root of this directory holds all the translation dictionnaries for each supported locales (e.g "en", "fr").

### Config

The `config` file holds the necessary information regarding the supported locales at the code level, it also provides some typings and export the necessary config object for `next-international`.

### Client

The `client` file expose 2 elements made for client components. In first place it exports a `withI18n` wrapper that is to be used at the top level of your clients component. Last but not least it also exports a hook that handle the logic behind `i18n`. Once wrapped, you can call `useI18n` in your client components.

> Note: One wrapper at the top level of your client components only.

### Server

The `server` file expose a single `useI18n` hook made for server components. You can call it straight away from any server components.

### Middleware

The `middleware` file export a `I18nMiddleware` object that feeds NextJs middleware system.
