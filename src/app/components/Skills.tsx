"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const skills = [
    "TypeScript",
    "JavaScript",
    "Git",
    "Node.js",
    "Next.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Express.js",
    "Postman",
    "MongoDB",
    "React Native",
  ]

  const marqueeRef = useRef<HTMLDivElement>(null)

  return (
    <section id="skills" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <div
            ref={marqueeRef}
            className="flex space-x-6 marquee-container"
            onMouseEnter={() => {
              if (marqueeRef.current) {
                marqueeRef.current.style.animationPlayState = "paused"
              }
            }}
            onMouseLeave={() => {
              if (marqueeRef.current) {
                marqueeRef.current.style.animationPlayState = "running"
              }
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 bg-card border border-border rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 min-w-max"
              >
                <span className="text-lg font-medium text-foreground whitespace-nowrap">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8"
        >
          Hover to pause the animation
        </motion.p>
      </div>
    </section>
  )
}

export default Skills
