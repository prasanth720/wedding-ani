"use client"

import { motion } from "framer-motion"
import { Heart, Flower, Star, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const wishes = [
  {
    english: "May your love always be filled with happiness and joy",
    icon: Heart,
  },
  {
    english: "May your partnership always remain strong and united",
    icon: Sparkles,
  },
  {
    english: "May your relationship continue to bloom and flourish",
    icon: Flower,
  },
  {
    english: "May your togetherness shine bright like stars",
    icon: Star,
  },
]

const blessings = [
  "May your marriage be blessed with love, joy, and companionship for all the years of your lives.",
  "Wishing you both a lifetime of love, happiness, and togetherness. Happy Anniversary!",
  "May the love you share today grow stronger as you grow old together. Congratulations!",
  "Here's to another year of love, laughter, and happiness together. Happy Anniversary!",
]

export default function WishesSection() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Wishes</h2>
        <p className="text-lg text-gray-600">Celebrating your milestone together</p>
      </motion.div>

      {/* Hindi-English Wishes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wishes.map((wish, index) => {
          const IconComponent = wish.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <p className="text-gray-700 font-medium text-lg">{wish.english}</p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Professional Anniversary Messages */}
      <motion.div
        className="bg-gradient-to-r from-gray-50 via-gray-100 to-blue-50 rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Anniversary Reflections</h3>
          <p className="text-lg text-gray-600">Professional thoughts on your journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Partnership Excellence</h4>
              <p className="text-gray-700 font-medium leading-relaxed">
                "Your commitment to each other demonstrates the finest qualities of partnership - dedication, mutual
                respect, and shared vision for the future."
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Milestone Achievement</h4>
              <p className="text-gray-700 font-medium leading-relaxed">
                "This anniversary marks not just the passage of time, but the accumulation of shared experiences,
                growth, and unwavering support for one another."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Blessing Messages */}
      <motion.div
        className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Anniversary Blessings</h3>
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  repeatDelay: 2,
                }}
              >
                <Heart className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blessings.map((blessing, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-700 font-medium leading-relaxed text-center">"{blessing}"</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final Message */}
      <motion.div
        className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4 text-white"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        >
          May Your Love Be Eternal! 💕
        </motion.h3>
        <p className="text-xl text-blue-100">Congratulations on Your Anniversary</p>
      </motion.div>
    </div>
  )
}
