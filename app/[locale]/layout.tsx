import Header from "@/_templates/header/header";
import type { Metadata } from "next";
import "./global.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {
  AkzidenzGroteskBoldExtended,
  AkzidenzGroteskMediumExtended,
  RidleyGroteskBold,
  RidleyGroteskMedium,
  RidleyGroteskRegular,
  RubikLight,
  RubikMedium,
  RubikRegular
} from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Erkin hereket",
  description: "Erkin Hereket” Economic Society is a company that provides high-quality technical services in the construction and industrial sectors. With over 20 years of experience in various construction works, our company is a leading and accessible service provider in the field of crane rental.",
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children, params } = props;
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`
        ${AkzidenzGroteskBoldExtended.className} 
        ${AkzidenzGroteskMediumExtended.className} 
        ${RidleyGroteskBold.className} 
        ${RidleyGroteskMedium.className} 
        ${RidleyGroteskRegular.className} 
        ${RubikLight.className} 
        ${RubikMedium.className} 
        ${RubikRegular.className} 
      `}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
