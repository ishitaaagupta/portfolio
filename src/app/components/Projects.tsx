"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "Melodify",
      description:
        "A modern music streaming application built with Next.js and TypeScript. Features include user authentication, playlist management, and seamless music streaming experience with MongoDB integration.",
      techStack: {
        Frontend: ["Next.js", "React", "TypeScript", "CSS3"],
        Backend: ["Node.js"],
        Database: ["MongoDB"],
      },
      github: "https://github.com/ishitaaagupta/melodify",
      live: null,
      image: "https://www.alphansotech.com/Frontend/img/melodify_mobile_one.png",
    },
    {
      title: "Binkey",
      description:
        "A comprehensive e-commerce web application with modern UI/UX design and robust functionality. Built with full-stack capabilities including payment integration and cloud storage.",
      techStack: {
        Frontend: ["React", "Tailwind CSS"],
        Backend: ["Express", "Axios"],
        Database: ["MongoDB", "Mongoose"],
        Services: ["Cloudinary", "Stripe"],
      },
      github: null,
      live: "https://binkey-it.netlify.app/",
      image: "https://raw.githubusercontent.com/ishitaaagupta/binkey-it-frontend/master/Thumnails.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          {/* <div className="w-20 h-1 bg-primary mx-auto"></div> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative h-56">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                {/* Categorized Tech Stack */}
                <div className="mb-4 space-y-3">
                  {Object.entries(project.techStack).map(([category, techs]) => (
                    <div key={category} className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-primary min-w-fit">{category}:</span>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech: any, techIndex: any) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-accent rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}

                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
