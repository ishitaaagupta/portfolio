"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Github, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const quotes = [
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to understand recursion, one must first understand recursion.",
    "The best error message is the one that never shows up.",
    "Code never lies, comments sometimes do.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The most important property of a program is whether it accomplishes the intention of its user.",
    "Simplicity is the ultimate sophistication.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Talk is cheap. Show me the code.",
    "Programs must be written for people to read, and only incidentally for machines to execute.",
    "The function of good software is to make the complex appear to be simple.",
    "Code is poetry written in logic.",
    "Debugging is twice as hard as writing the code in the first place.",
    "Make it work, make it right, make it fast.",
    "The best way to get a project done faster is to start sooner.",
    "Programming is the art of telling another human being what one wants the computer to do.",
    "Clean code always looks like it was written by someone who cares.",
    "Software is a great combination between artistry and engineering.",
  ]

  // Change quote every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [quotes.length])

  // Random quote on component mount
  useEffect(() => {
    setCurrentQuoteIndex(Math.floor(Math.random() * quotes.length))
  }, [quotes.length])

  // Show scroll to top button when near bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight

      // Show button when user has scrolled 80% of the page
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
      setShowScrollTop(scrollPercentage > 80)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Scroll to Top Button - Right Bottom - Only show when near bottom */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          x: showScrollTop ? 0 : 50,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-40 group"
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            y: -2,
            boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        >
          {/* Arrow with bounce animation */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>

          {/* Subtle pulse ring */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 border-2 border-primary rounded-full"
          />

          {/* Tooltip */}
          <div className="absolute bottom-full mb-3 right-0 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-lg">
            Back to Top
            <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
          </div>
        </motion.button>
      </motion.div>

      <footer className="py-20 px-4 bg-card border-t border-border relative overflow-hidden">
        {/* Background animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/10 rounded-full"
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: Math.random() * 100 + "%",
                bottom: 0,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Animated Quote - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.blockquote
              key={currentQuoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl font-light text-foreground italic mb-6 min-h-[80px] flex items-center justify-center"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                "{quotes[currentQuoteIndex]}"
              </motion.span>
            </motion.blockquote>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/ishitaaagupta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-accent rounded-full transition-colors duration-200 relative group"
            >
              <Github className="w-6 h-6 text-foreground" />
              <motion.div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/ishita-gupta-306020193/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary hover:bg-accent rounded-full transition-colors duration-200 relative group"
            >
              <Linkedin className="w-6 h-6 text-foreground" />
              <motion.div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ishitagupta9901@gmail.com"
              className="p-3 bg-secondary hover:bg-accent rounded-full transition-colors duration-200 relative group"
            >
              <Mail className="w-6 h-6 text-foreground" />
              <motion.div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

export default Footer
