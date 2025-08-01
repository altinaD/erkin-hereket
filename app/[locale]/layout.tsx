import Header from "@/_templates/header/header";
import type { Metadata } from "next";
import "./global.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Erkin hereket",
  description:
    "Erkin Hereket” Economic Society is a company that provides high-quality technical services in the construction and industrial sectors. With over 20 years of experience in various construction works, our company is a leading and accessible service provider in the field of crane rental.",
  keywords: ['Erkin Hereket', 'Erkin', 'Erkin Hereket HJ', 'Erkin Hereket H.J.', 'Erkin Hereket team', 'Erkin Hereket corp', 'Erkin'],
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // ❗️ not a Promise
}) {
  // const { locale } = params;
  const cookieStore = await cookies()
  const locale = cookieStore.get("NEXT_LOCALE")?.value || params.locale || "en";

  const messages = await getMessages({ locale });

  return (
    // <html lang={locale}>
    //   <body className={GeistVariableVF.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
    //   </body>
    // </html>
  );
}
