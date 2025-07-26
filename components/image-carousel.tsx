"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/assets/1.jpg",
    alt: "Wedding Ceremony",
    caption: "The Sacred Union",
  },
  {
    src: "/assets/2.jpg",
    alt: "Traditional Attire",
    caption: "Dressed in Tradition",
  },
  {
    src: "/assets/3.jpg",
    alt: "Wedding Mandap",
    caption: "Sacred Mandap",
  },
  {
    src: "/assets/4.jpg",
    alt: "Garland Exchange",
    caption: "Jaimala Ceremony",
  },
  {
    src: "/assets/5.jpg",
    alt: "Sacred Fire",
    caption: "Saptapadi - Seven Vows",
  },
  {
    src: "/assets/6.jpg",
    alt: "Celebration",
    caption: "Joyous Celebration",
  },
  {
    src: "/assets/7.jpg",
    alt: "Celebration",
    caption: "Joyous Celebration",
  },
  {
    src: "/assets/8.jpg",
    alt: "Celebration",
    caption: "Joyous Celebration",
  },
  {
    src: "/assets/9.jpg",
    alt: "Celebration",
    caption: "Joyous Celebration",
  },
]

export default function ImageCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi],
  )

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_60%] lg:flex-[0_0_40%] min-w-0 pl-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative group">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <h3 className="text-xl font-bold mb-1">{image.caption}</h3>
                  <p className="text-sm opacity-90">A moment to cherish forever</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-50 border-gray-300 shadow-lg"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-50 border-gray-300 shadow-lg"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-blue-400"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}
