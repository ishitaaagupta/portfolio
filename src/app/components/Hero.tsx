"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [textColor, setTextColor] = useState("#000000")
  const { theme, resolvedTheme } = useTheme()

  const roles = ["Software Engineer", "Software Developer", "Full Stack Developer"]

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update text color whenever theme changes
  const updateTextColor = useCallback(() => {
    const currentTheme = resolvedTheme || theme
    const newColor = currentTheme === "dark" ? "#ffffff" : "#000000"
    setTextColor(newColor)
  }, [resolvedTheme, theme])

  // Initial color setup and theme change listener
  useEffect(() => {
    if (mounted) {
      updateTextColor()

      // Add event listener for theme changes
      window.addEventListener("themeChange", updateTextColor)

      return () => {
        window.removeEventListener("themeChange", updateTextColor)
      }
    }
  }, [mounted, updateTextColor])

  // Force update on theme change
  useEffect(() => {
    if (mounted) {
      updateTextColor()
    }
  }, [theme, resolvedTheme, mounted, updateTextColor])

  useEffect(() => {
    const currentString = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentString.length) {
            setDisplayText(currentString.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">Hi, I am</h2>

          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="visible"
            whileHover="visible"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cursor-pointer"
            style={{
              color: textColor,
              transition: "color 0.3s ease",
            }}
          >
            {"Ishita Gupta".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                whileHover={{
                  scale: 1.2,
                  color: "hsl(var(--primary))",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <div className="text-xl md:text-2xl text-primary font-semibold h-8">
            A {displayText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="inline-block w-0.5 h-6 bg-primary ml-1"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center space-x-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Get to know me
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors duration-200 text-foreground"
          >
            View my work
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
