import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") || "en";
  const preferredLocale = acceptLanguage.split(",")[0].split("-")[0];

  const supportedLocales = ["en", "ru", "tm"];
  const locale = supportedLocales.includes(preferredLocale) ? preferredLocale : "en";

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${locale}/home`, request.url));
  }

  return NextResponse.next();
}
