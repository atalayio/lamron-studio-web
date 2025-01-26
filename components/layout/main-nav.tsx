"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  // Get current language from pathname
  const currentLang = pathname.startsWith("/tr") ? "tr" : "en";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Games", href: "/games" },
    { name: "Studio", href: "/studio" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
  ];

  const handleLanguageChange = (lang: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${lang}`);
    router.push(newPath);
  };

  const ThemeSwitcher = () => {
    if (!mounted) return null;

    const isDark = theme === "dark";
    

    return (
        <Button
        variant="ghost"
        size="icon"
        className="relative w-9 h-9 group"
        onClick={() => {
          const newTheme = isDark ? "light" : "dark"
          // Önce animasyonu başlat
          window.dispatchEvent(new CustomEvent('themeChangeStart', { detail: newTheme }))
          // 50ms sonra temayı değiştir
          setTimeout(() => setTheme(newTheme), 50)
        }}
      >
        <div className="relative w-5 h-5">
          <Sun
            className={`absolute w-full h-full text-[#27E6EC] theme-switch-icon transition-all duration-300 ${
              isDark ? "out" : "in"
            }`}
          />
          <Moon
            className={`absolute w-full h-full text-[#27E6EC] theme-switch-icon transition-all duration-300 ${
              isDark ? "in" : "out"
            }`}
          />
        </div>
      </Button>
    );
  };

  const LanguageSwitcher = ({ mobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`relative hover:bg-[#1E536E]/30 transition-colors ${
            mobile ? "w-auto px-4 h-10" : "w-9 h-9"
          }`}
        >
          <div className="flex items-center gap-2">
            <Image
              src={`/flags/${currentLang}.svg`}
              width={20}
              height={20}
              alt={currentLang === "tr" ? "Türkçe" : "English"}
              className="rounded-sm"
            />
            {mobile && (
              <span className="text-[#5AA5CD]">
                {currentLang === "tr" ? "Türkçe" : "English"}
              </span>
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={mobile ? "center" : "end"}
        className="bg-[#1A334A]/95 backdrop-blur-md border-[#27E6EC]/20"
      >
        <DropdownMenuItem
          onClick={() => {
            handleLanguageChange("en");
            if (mobile) setIsMobileMenuOpen(false);
          }}
          className={`flex items-center gap-2 ${
            currentLang === "en"
              ? "bg-[#1E536E] text-[#27E6EC]"
              : "text-[#5AA5CD] hover:text-[#27E6EC] hover:bg-[#1E536E]/30"
          }`}
        >
          <Image
            src="/flags/en.svg"
            width={20}
            height={20}
            alt="English"
            className="rounded-sm"
          />
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            handleLanguageChange("tr");
            if (mobile) setIsMobileMenuOpen(false);
          }}
          className={`flex items-center gap-2 ${
            currentLang === "tr"
              ? "bg-[#1E536E] text-[#27E6EC]"
              : "text-[#5AA5CD] hover:text-[#27E6EC] hover:bg-[#1E536E]/30"
          }`}
        >
          <Image
            src="/flags/tr.svg"
            width={20}
            height={20}
            alt="Türkçe"
            className="rounded-sm"
          />
          Türkçe
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#1A334A]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between relative">
          <div className="w-[200px] relative z-50">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="relative overflow-hidden">
                  <Image
                    src="/logo.png"
                    width={45}
                    height={45}
                    alt="Lamron Studio"
                    className="transform transition-all duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-[#27E6EC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </div>
                <span className="text-xl font-bold text-[#27E6EC] font-chakra-petch tracking-wider group-hover:text-[#18A387] transition-all duration-300 relative">
                  LAMRON STUDIO
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#18A387] transition-all duration-300 group-hover:w-full" />
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[#5AA5CD] hover:text-[#27E6EC] transition-all duration-300 text-sm uppercase font-space-grotesk tracking-wider font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#27E6EC] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div className="flex items-center space-x-4 ml-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="lg:hidden relative z-50 text-[#27E6EC] hover:text-[#18A387] hover:bg-[#1E536E]/30 p-2 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 top-[11px] w-6 h-[2px] bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-0" : "rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 bottom-[11px] w-6 h-[2px] bg-current transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 translate-y-0" : "rotate-0"
                }`}
              />
            </div>
          </Button>

          {/* Mobile navigation overlay */}
          <div
            className={`fixed inset-0 w-full min-h-screen bg-[#1A334A]/95 backdrop-blur-md z-40 transition-all duration-500 lg:hidden ${
              isMobileMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-full pointer-events-none"
            }`}
          >
            <div className="relative h-screen flex items-center justify-center pt-20">
              <nav className="flex flex-col items-center justify-center space-y-8 p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-[#5AA5CD] hover:text-[#27E6EC] transition-all duration-300 text-3xl uppercase font-space-grotesk tracking-wider font-medium group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#27E6EC] transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}

                {/* Mobile theme and language switchers */}
                <div className="flex flex-col items-center space-y-4 mt-8">
                  <ThemeSwitcher />
                  <LanguageSwitcher mobile={true} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
