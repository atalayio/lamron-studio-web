"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "@/styles/globals.css"
import DisappearingLine from "@/components/animations/dissappear"


export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Total animation duration is 5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 3.0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Yukarıya Giden Çizgi */}
        <motion.div
          initial={{ top: "50%", right: 0, left: "100%" }}
          animate={{ top: "-10%", left: 0 }}
          transition={{
            top: { duration: 9.5, ease: "easeInOut" },
            left: { duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute h-[1px] z-20"
        >
          <DisappearingLine direction="horizontal" />
        </motion.div>

        {/* Aşağıya Giden Çizgi */}
        <motion.div
          initial={{ top: "50%", left: 0, right: "100%" }}
          animate={{ top: "110%", right: 0 }}
          transition={{
            top: { duration: 9.5, ease: "easeInOut" },
            right: { duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute h-[1px] z-20"
        >
          <DisappearingLine direction="horizontal" />
        </motion.div>

        {/* Title (Metin) */}
        <motion.div
          className="relative z-10"
          animate={{ scale: 1.05 }}
          transition={{
            scale: { duration: 1, delay: 2, ease: "easeInOut" },
          }}
        >
          {/* Dış Hatlar */}
          <h1
            className="text-7xl font-extrabold tracking-widest custom-font text-transparent"
            style={{
              WebkitTextStroke: "1px white",
            }}
          >
            LAMRON STUDIO
          </h1>

          {/* Üst Yarı İç Dolgu */}
          <motion.div
            initial={{
              clipPath: "inset(50% 0 50% 0)",
            }}
            animate={{
              clipPath: "inset(0 0 50% 0)",
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 overflow-hidden"
          >
            <h1 className="text-7xl font-extrabold tracking-widest custom-font text-white absolute top-0 left-0 right-0">
              LAMRON STUDIO
            </h1>
          </motion.div>

          {/* Alt Yarı İç Dolgu */}
          <motion.div
            initial={{
              clipPath: "inset(50% 0 50% 0)",
            }}
            animate={{
              clipPath: "inset(50% 0 0 0)",
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 overflow-hidden"
          >
            <h1 className="text-7xl font-extrabold tracking-widest custom-font text-white absolute bottom-0 left-0 right-0">
              LAMRON STUDIO
            </h1>
          </motion.div>

          {/* Disappearing Effect */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
              className="absolute inset-0"
            >
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-black"
                  style={{
                    top: `${Math.floor(Math.random() * 100)}%`,
                    left: `${Math.floor(Math.random() * 100)}%`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, -10], scale: [1, 0] }}
                  transition={{
                    duration: 1,
                    delay: 3 + Math.random() * 0.5,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

