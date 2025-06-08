"use client"

import { motion } from "framer-motion"

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-primary/20"
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "linear",
            }}
            style={{
              left: `${(i * 5) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Simple Tech Loader */}
      <div className="relative z-10">
        <div className="relative w-24 h-24">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 border-4 border-primary/30 border-t-primary rounded-full"
          />

          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-2 border-2 border-secondary/30 border-r-secondary rounded-full"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-4 border-2 border-accent/30 border-b-accent rounded-full"
          />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-2xl font-bold text-primary font-mono"
            >
              {"</>"}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Loader
        