export const locales = ["en", "tr"] as const
export const defaultLocale = "en" as const

export const siteConfig = {
  name: "Lamron Studio",
  description: "Quality, not a chance.",
  socials: {
    twitter: "https://twitter.com/lamronstudio",
    facebook: "https://www.facebook.com/lamronstudio",
    instagram: "https://instagram.com/lamron_studio",
  },
  contact: {
    address: "Istanbul, Turkey",
    phone: "+90 538 555 78 28",
    email: "info@lamronstudio.com",
  },
//   credits: {
//     author: "Singular Singularity",
//     link: "https://aghyad-alghazawi.github.io",
//   },
} as const

export type SiteConfig = typeof siteConfig
