import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LOCALES = ['en', 'ru', 'tk']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    SUPPORTED_LOCALES.some(locale => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next()
  }

  const acceptLanguage = request.headers.get('accept-language') || 'en'
  const preferredLocale = acceptLanguage.split(',')[0].split('-')[0]

  const locale = SUPPORTED_LOCALES.includes(preferredLocale)
    ? preferredLocale
    : 'en'

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|images|fonts|.*\\..*).*)'],
}
