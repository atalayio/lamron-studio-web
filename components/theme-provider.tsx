"use client"
import { useState, useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [overlayColor, setOverlayColor] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handler = (event: CustomEvent<{ color: string }>) => {
      setOverlayColor(event.detail.color)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1000)
    }
    
    window.addEventListener('themeChangeStart', handler as EventListener)
    return () => window.removeEventListener('themeChangeStart', handler as EventListener)
  }, [])

  return (
    <NextThemesProvider {...props}>
      {children}
      <div 
        className={`theme-transition-overlay ${isAnimating ? 'clipPathReveal' : ''}`}
        style={{ backgroundColor: overlayColor }}
      />
    </NextThemesProvider>
  )
}