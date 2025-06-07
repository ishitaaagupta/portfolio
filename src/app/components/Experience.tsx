"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Experience = () => {
  const experiences = [
    {
      title: "Junior ASE",
      company: "TechAhead",
      period: "Current",
      logo: "https://cdn-ilajckf.nitrocdn.com/utLabjbGVjpaYDQkazoKnooguTzYeQRR/assets/images/optimized/rev-6d33770/tamediacdn.techaheadcorp.com/wp-content/uploads/2020/10/17061151/logo-black.svg",
      description:
        "Working as a Junior Associate Software Engineer at TechAhead, a leading mobile app development company. Contributing to full-stack development projects and collaborating with cross-functional teams to deliver high-quality software solutions.",
      current: true,
    },
    {
      title: "Software Engineer Intern",
      company: "Trackier",
      period: "September 2024- January 2025",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHV9T0kIyoYSQ/company-logo_200_200/B4DZX1ZIN2HIAM-/0/1743578762028/trackier_logo?e=1754524800&v=beta&t=khsQ6QBgJgEH1_gkxXITegGD8-_AVKRgEdDi6QhmZL0",
      description:
        "Gained valuable experience as a Software Engineer Intern at Trackier, working on performance marketing and affiliate tracking solutions. Developed skills in backend development and API integration.",
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                rotateY: 5,
              }}
              className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                  <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center border border-border">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    {exp.current && (
                      <motion.span
                        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-xs font-medium"
                      >
                        Current
                      </motion.span>
                    )}
                  </div>

                  <h4 className="text-lg font-medium text-primary mb-2">{exp.company}</h4>

                  <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
