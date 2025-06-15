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

  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
        },
        {
          name: "Redux Toolkit",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
        },
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
      ],
    },
    {
      category: "Tools & APIs",
      skills: [
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
        {
          name: "Swagger",
          logo: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg",
        },
        {
          name: "Stripe",
          logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
        },
      ],
    },
    {
      category: "Cloud & Deployment",
      skills: [
        {
          name: "Vercel",
          logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
        },
        {
          name: "Netlify",
          logo: "https://cdn.worldvectorlogo.com/logos/netlify.svg",
        },
        {
          name: "Cloudinary",
          logo: "https://cdn.worldvectorlogo.com/logos/cloudinary-1.svg",
        },
      ],
    },
    {
      category: "Project Management Tools",
      skills: [
        {
          name: "Asana",
          logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg",
        },
        {
          name: "Zoho Projects",
          logo: "https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.svg",
        },
        {
          name: "Notion",
          logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
        },
      ],
    },
    {
      category: "Version Control",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "GitLab",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Skillset</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((categoryData, categoryIndex) => (
            <motion.div
              key={categoryData.category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row lg:items-center gap-6"
            >
              {/* Category Label */}
              <div className="lg:w-64 flex-shrink-0">
                <h3 className="text-xl md:text-2xl font-semibold text-primary">{categoryData.category}</h3>
              </div>

              {/* Skills Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-4">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                      }}
                      className="bg-card border-2 border-border rounded-xl p-4 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex justify-center mb-3"
                      >
                        <div className="w-12 h-12 flex items-center justify-center">
                          <Image
                            src={skill.logo || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                            style={{
                              backgroundColor:
                                mounted &&
                                resolvedTheme === "dark" &&
                                ["Notion", "Zoho Projects","GitHub", "Next.js", "Express.js", "Swagger"].includes(skill.name)
                                  ? "#fff"
                                  : "transparent",
                              borderRadius:
                                mounted &&
                                resolvedTheme === "dark" &&
                                skill.name === "Notion"
                                  ? "6px"
                                  : "0",
                              filter:
                                mounted &&
                                resolvedTheme === "dark" &&
                                ["Next.js", "GitHub", "Express.js"].includes(skill.name)
                                  ? "invert(1)"
                                  : "none",
                            }}
                          />
                        </div>
                      </motion.div>

                      <motion.span
                        className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300 block leading-tight"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {/* Optional footer note */}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
