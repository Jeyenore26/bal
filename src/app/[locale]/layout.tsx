import "@/styles/globals.css";

import { type Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Cairo } from "next/font/google";

export const metadata: Metadata = {
  title: "Nexus Egypt",
  description: "By B.A.L",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const cairo = Cairo({
  subsets: ["latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700"],
});
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      dir={locale == "ar" ? "rtl" : "ltr"}
      className={`${cairo.className}`}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
