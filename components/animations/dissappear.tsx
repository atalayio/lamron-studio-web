import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface DisappearingLineProps {
  direction: "horizontal" | "vertical"
}

const DisappearingLine: React.FC<DisappearingLineProps> = ({ direction }) => {
  const [particles, setParticles] = useState<{ x: number; delay: number }[]>([])

  useEffect(() => {
    const particleCount = 50
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      x: (i / particleCount) * 100,
      delay: Math.random() * 0.5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className={`absolute inset-0 ${direction === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]"}`}>
      <motion.div
        className="absolute inset-0 bg-gray-400"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      />
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-gray-400"
          style={{
            [direction === "horizontal" ? "left" : "top"]: `${particle.x}%`,
            width: direction === "horizontal" ? "2px" : "1px",
            height: direction === "horizontal" ? "1px" : "2px",
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: 3 + particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default DisappearingLine

