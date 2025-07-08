import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Main() {
  const headersList = await headers();

  const acceptLanguage = headersList.get("accept-language") || "en";

  const preferredLocale = acceptLanguage.split(",")[0].split("-")[0];

  const supportedLocales = ["en", "ru", "tm"]; 

  const locale = supportedLocales.includes(preferredLocale) ? preferredLocale : "en";

  redirect(`/${locale}/home`);
}
