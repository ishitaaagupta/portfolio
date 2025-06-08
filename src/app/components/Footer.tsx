"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

const Footer = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/Ishita_Gupta_Resume.pdf" // Updated to use the correct file name
    link.download = "IshitaGupta-Resume.pdf"
    link.click()
  }

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

  return (
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
        {/* Animated Quote */}
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

          {/* Quote indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {quotes.slice(0, 5).map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentQuoteIndex % 5 ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-0.5 bg-primary mx-auto"
          ></motion.div>
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
            whileHover={{ scale: 1.2, y: -5, rotateY: 180 }}
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
            whileHover={{ scale: 1.2, y: -5, rotateY: 180 }}
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
            whileHover={{ scale: 1.2, y: -5, rotateY: 180 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ishitagupta9901@gmail.com"
            className="p-3 bg-secondary hover:bg-accent rounded-full transition-colors duration-200 relative group"
          >
            <Mail className="w-6 h-6 text-foreground" />
            <motion.div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Resume Download - Icon Only with Simple Pop Effect */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative group mb-4 md:mb-0">
            <motion.button
              onClick={downloadResume}
              className="p-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors duration-200"
            >
              <Download className="w-6 h-6" />
            </motion.button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              whileHover={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none"
            >
              Download Resume
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
            </motion.div>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-accent rounded-full transition-colors duration-200 relative group"
          >
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
              <ArrowUp className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium">Back to Top</span>
            <motion.div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
