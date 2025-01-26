"use client"

import Image from "next/image"
import { siteConfig } from "@/config/site"
import { Link } from "@/i18n/routing"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"

export const SiteFooter = () => {
  return (
    <footer className="relative w-full bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent pointer-events-none" />
      <Container className="relative py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Logo and Description Section */}
          <div className="flex flex-col text-center items-start">
            <div className="flex flex-col items-start">
              <Image
                src="/logo.png"
                alt="logo"
                width={160}
                height={160}
                className="mx-auto sm:mx-0"
              />
              <span
                className={cn(
                  "text-2xl text-primary font-bold mt-4",
                )}
              >
                LAMRON STUDIO
              </span>
            </div>
          </div>

          {/* Helpful Links Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-start">
              Helpful Links
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Company
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  href="/news"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Latest News
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  href="/plans"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing Plans
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li className="flex items-start">
                <Link
                  href="/blogs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts Info Section */}
          <div className="space-y-6 items-start">
            <h3 className="text-lg font-semibold text-start">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a
                      href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex items-start gap-3">
              {[
                { icon: Facebook, href: siteConfig.socials.facebook },
                { icon: Twitter, href: siteConfig.socials.twitter },
                { icon: Instagram, href: siteConfig.socials.instagram },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <Button
                    key={index}
                    size="icon"
                    variant="outline"
                    asChild
                    className="h-10 w-10"
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Download API Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-start">
              Download Our App
            </h3>
            <p className="text-muted-foreground text-start">
              Download our mobile app for the best experience
            </p>
            <div className="space-y-3 sm:max-w-[240px]">
              <Button className="w-full" variant="default" size="lg">
                App Store
              </Button>
              <Button className="w-full" variant="default" size="lg">
                Play Market
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-muted-foreground text-sm">
              {new Date().getFullYear()} Lamron Studio. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/about/terms-of-use"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/about/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
