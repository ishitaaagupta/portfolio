"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const Skills = () => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      bgClass: mounted && resolvedTheme === "dark" ? "bg-white rounded-full p-1" : "",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
      bgClass: "bg-white rounded-full p-1",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },
    {
      name: "Redux Toolkit",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "React Native",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Postman",
      logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-full max-w-fit mx-auto h-1 bg-primary mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              className="bg-card border border-border rounded-xl px-4 py-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center mb-3"
              >
                <div className={`w-12 h-12 flex items-center justify-center ${skill.bgClass || ""}`}>
                  <Image
                    src={skill.logo || "/placeholder.svg"}
                    alt={`${skill.name} logo`}
                    width={48}
                    height={48}
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>

              <motion.span
                className="text-sm md:text-base font-medium text-foreground group-hover:text-primary transition-colors duration-300 block"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
        >
   
        </motion.p>
      </div>
    </section>
  )
}

export default Skills
