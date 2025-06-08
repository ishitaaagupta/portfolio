

"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Download } from "lucide-react"

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [textColor, setTextColor] = useState("#000000")
  const { theme, resolvedTheme } = useTheme()

  const roles = ["Software Engineer", "Tech Enthusiast"]

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

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/IshitaGupta-Resume.pdf"
    link.download = "IshitaGupta-Resume.pdf"
    link.click()
  }

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
    <>
      {/* Sticky Resume Download Button - Left Bottom */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-6 left-4 z-40 group"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadResume}
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-200"
        >
          <Download className="w-5 h-5" />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          whileHover={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none"
        >
          Download Resume
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
        </motion.div>
      </motion.div>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative py-16 md:py-0">
        {/* Mobile Blur Backdrop */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 backdrop-blur-[1px]"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-full blur-xl"></div>
        </div>

        <div className="text-center relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">Hi, I am</h2>

            <motion.h1
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              whileHover="visible"
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 cursor-pointer"
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

            <div className="text-lg md:text-xl lg:text-2xl text-primary font-semibold h-8 mb-8">
              {displayText}
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
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 md:px-8 md:py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 text-sm md:text-base"
            >
              Get to know me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 md:px-8 md:py-3 border border-border rounded-full font-medium hover:bg-secondary transition-colors duration-200 text-foreground text-sm md:text-base"
            >
              View my work
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <span className="text-muted-foreground text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
