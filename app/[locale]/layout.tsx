import type { Metadata } from "next";
import "@/styles/globals.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { SiteFooter } from "@/components/layout/site-footer";
import { Space_Grotesk, Chakra_Petch, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import Loading from "@/components/ui/loading";
import { MainNav } from "@/components/layout/main-nav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const chakraPetch = Chakra_Petch({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra-petch",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Lamron Studio",
  description: "Quality, not a chance.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function localeLayout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "tr")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${chakraPetch.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          // attribute="class"
          // defaultTheme="dark"
          // enableSystem
          // disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="relative flex min-h-screen flex-col">
              <MainNav />
              <div className="flex-1">{children}</div>
              <SiteFooter />
              <Loading />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
