"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Experience = () => {
const experiences = [
  {
    title: "Associate Software Engineer ",
    company: "TechAhead",
    period: "February 2025 - Present",
    logo: "https://tamediacdn.techaheadcorp.com/wp-content/uploads/2025/08/04084639/logo-black.svg",
    description: [
      "Developed responsive UI components using React.js, Tailwind CSS, and integrated RESTful APIs via Redux Toolkit.",
      "Converted Figma designs into functional interfaces and enhanced UX with features like lazy loading and pagination.",
      "Collaborated in SDLC processes and created dashboards using Chart.js and Recharts."
    ],
    current: true,
  },
  {
    title: "Software Engineer Intern",
    company: "Trackier",
    period: "September 2024 - January 2025",
    logo: "https://trackier.com/wp-content/uploads/2025/11/trackier-logo.avif",
    description: [
      "Built full-stack features using React, Node.js, and MongoDB with focus on modular, reusable components.",
      "Developed APIs, integrated Cloudinary-based file uploads, and improved front-end performance with Redux Toolkit.",
      "Wrote unit tests, debugged code, and contributed to user engagement through key module integrations."
    ],
    current: false,
  }
];


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
          {/* <div className="w-20 h-1 bg-primary mx-auto"></div> */}
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
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-border">
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
