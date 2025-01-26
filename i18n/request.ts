import React from "react"
import { headers } from "next/headers"
import { routing } from "@/i18n/routing"
import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as "en" | "tr")) {
    locale = routing.defaultLocale
  }

  const now = (await headers()).get("x-now")
  const timeZone = (await headers()).get("x-time-zone") ?? "Asia/Damascus"

  return {
    locale,
    now: now ? new Date(now) : undefined,
    timeZone,
    messages: (await import(`@/i18n/locales/${locale}.json`)).default,
    defaultTranslationValues: {
      globalString: "Global string",
      highlight: (chunks) => React.createElement("strong", null, chunks),
    },
    formats: {
      dateTime: {
        medium: {
          dateStyle: "medium",
          timeStyle: "short",
          hour12: false,
        },
      },
    },
    onError(error) {
      if (
        error.message ===
        (process.env.NODE_ENV === "production"
          ? "MISSING_MESSAGE"
          : "MISSING_MESSAGE: Could not resolve `missing` in `Index`.")
      ) {
        // Do nothing, this error is triggered on purpose
      } else {
        console.error(JSON.stringify(error.message))
      }
    },
    getMessageFallback({ key, namespace }) {
      return (
        "`getMessageFallback` called for " +
        [namespace, key].filter((part) => part != null).join(".")
      )
    },
  }
})
