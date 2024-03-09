import { locales, localePrefix, pathnames } from "./navigation";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,
  pathnames,

  // Used when no locale matches
  defaultLocale: "pt-BR",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-BR|en)/:path*"],
};
