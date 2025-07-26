"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Sparkles, Star } from "lucide-react"
import ImageCarousel from "@/components/image-carousel"
import WishesSection from "@/components/wishes-section"
import FloatingElements from "@/components/floating-elements"

export default function WeddingAnniversaryPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 border-2 border-gray-300 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 border-2 border-gray-300 rounded-full"></div>
      </div>

      <FloatingElements />

      <div className="relative z-10">
        {/* Header Section */}
        <motion.header
          className="text-center py-12 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          >
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            <Sparkles className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 px-6 py-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Happy Wedding Anniversary
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Celebrating Your Beautiful Journey Together
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  repeatDelay: 3,
                }}
              >
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              </motion.div>
            ))}
          </motion.div>
        </motion.header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-12">
          {/* Image Carousel Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">Precious Memories</h2>
              <p className="text-lg text-yellow-300">Celebrating your beautiful journey together</p>
            </div>
            <ImageCarousel />
          </motion.section>

          {/* Wishes Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <WishesSection />
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          className="text-center py-8 px-4 border-t border-gray-200 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-700 font-medium">Made with love</span>
            <Heart className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          <p className="text-gray-600">May your love story continue to inspire and flourish</p>
        </motion.footer>
      </div>
    </div>
  )
}
