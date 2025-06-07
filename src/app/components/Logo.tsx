"use client"

import { motion } from "framer-motion"

const Logo = () => {
  return (
    <motion.svg
      width="100"
      height="30"
      viewBox="0 0 100 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.05 }}
      className="text-primary"
    >
      <text x="0" y="20" fontFamily="monospace" fontSize="18" fontWeight="bold" fill="currentColor">
        {"<ishita>"}
      </text>
    </motion.svg>
  )
}

export default Logo
