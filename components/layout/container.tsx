"use client"

import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  )
}
