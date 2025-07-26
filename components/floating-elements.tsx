"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Star, Flower } from "lucide-react"

export default function FloatingElements() {
  const elements = [
    { Icon: Heart, color: "text-blue-400", size: "w-6 h-6", delay: 0 },
    { Icon: Sparkles, color: "text-blue-300", size: "w-5 h-5", delay: 1 },
    { Icon: Star, color: "text-blue-500", size: "w-4 h-4", delay: 2 },
    { Icon: Flower, color: "text-blue-400", size: "w-6 h-6", delay: 3 },
    { Icon: Heart, color: "text-blue-300", size: "w-5 h-5", delay: 4 },
    { Icon: Sparkles, color: "text-blue-200", size: "w-4 h-4", delay: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => {
        const { Icon, color, size, delay } = element
        return (
          <motion.div
            key={index}
            className={`absolute ${color} ${size} opacity-60`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              y: -100,
              rotate: 360,
              scale: [0, 1, 0.8, 1, 0],
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: delay * 2,
              ease: "linear",
            }}
          >
            <Icon className="w-full h-full fill-current" />
          </motion.div>
        )
      })}
    </div>
  )
}
