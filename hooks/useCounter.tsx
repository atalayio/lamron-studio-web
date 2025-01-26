"use client"

import { useState, useEffect } from "react"

export function useCounter(end: number, duration = 15000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      if (Number.isInteger(end)) {
        setCount(Math.floor(progress * end))
      } else {
        setCount(Number((progress * end).toFixed(1)))
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}

