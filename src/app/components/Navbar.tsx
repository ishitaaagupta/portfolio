"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Sun, Moon, Menu, X } from "lucide-react"
import Logo from "./Logo"
import Loader from "./Loader"

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = ["Home", "About Me", "Experience", "Skills", "Projects"]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(" ", "-"))
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleTheme = () => {
    setIsLoading(true)
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Add a delay to show the loader, then reload
    setTimeout(() => {
      window.location.reload()
    }, 3000) // 3 seconds to show the loader animation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  if (!mounted) {
    return (
      <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-fit bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center justify-center space-x-8">
          <Logo />
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="p-2 rounded-full bg-secondary">
            <div className="w-4 h-4" />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Loader */}
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto w-fit bg-background/80 backdrop-blur-md border border-border rounded-full px-6 py-3 shadow-lg"
      >
        <div className="flex items-center justify-center space-x-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4 text-foreground" />
            ) : (
              <Menu className="w-4 h-4 text-foreground" />
            )}
          </motion.button>

          {/* Theme Switcher */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            disabled={isLoading}
            className="p-2 rounded-full bg-secondary hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4 text-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-foreground" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-50 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-6 shadow-xl md:hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item)}
                    className="text-left py-3 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200 text-lg font-medium"
                  >
                    {item}
                  </motion.button>
                ))}

                {/* Mobile Theme Toggle */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: navItems.length * 0.1 }}
                  // className="pt-4 border-t border-border"
                >
                  {/* <motion.button
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleTheme}
                    disabled={isLoading}
                    className="flex items-center space-x-3 py-3 px-4 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-200 text-lg font-medium w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  > */}
                      {/* {resolvedTheme === "dark" ? (
                        <>
                          <Sun className="w-5 h-5" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-5 h-5" />
                          <span>Dark Mode</span>
                        </>
                      )} */}
                  {/* </motion.button> */}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
