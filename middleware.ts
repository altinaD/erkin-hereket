import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "@/i18n.config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const matchedLocale = i18n.locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (matchedLocale) {
    // Remove locale from path
    const newPath = pathname.replace(`/${matchedLocale}`, "") || "/";
    const url = new URL(newPath, request.url);
    // Set the locale in a cookie
    const response = NextResponse.redirect(url);
    response.cookies.set("NEXT_LOCALE", matchedLocale, { path: "/" });
    return response;
  }

  // If no locale in URL, set locale from cookie or browser
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale = cookieLocale || getLocale(request) || i18n.defaultLocale;
  // Optionally, set the cookie if not present
  if (!cookieLocale) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", locale, { path: "/" });
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|erem-video.webm).*)"],
};