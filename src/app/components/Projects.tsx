"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const projects = [
    {
      title: "Binkey It",
      description:
        "A comprehensive e-commerce web application with modern UI/UX design and robust functionality. Built with full-stack capabilities including payment integration and cloud storage.",
      techStack: {
        Frontend: ["React", "Tailwind CSS"],
        Backend: ["NodeJS","Express", "Axios"],
        Database: ["MongoDB", "Mongoose"],
        Services: ["Cloudinary", "Stripe"],
      },
      github: null,
      live: "https://binkey-it.netlify.app/",
      image: "https://raw.githubusercontent.com/ishitaaagupta/binkey-it-frontend/master/Thumnails.png",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "purple",
    },
    {
      title: "Trackier Academy",
      description:
        "An e-learning platform built for Trackier which includes course management, user authentication, file uploads and a modern responsive interface with state management.",
      techStack: {
        Frontend: ["React", "React Redux Toolkit", "TailwindCSS"],
        Backend: ["NodeJS", "ExpressJS", "Multer", "Axios"],
        Database: ["MongoDB"],
          Services: ["Cloudinary"],
      },
      github: null,
      live: "https://academyv2.trackier.com/",
      image: "/trackier.png",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div> */}
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and thoughtful design
          </p> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:border-primary/20">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Image section */}
                <div className="relative overflow-hidden">
                  <motion.div
                    className="relative h-64 lg:h-72"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </motion.div>
                </div>

                {/* Content section */}
                <div className="relative p-8 lg:p-10">
                  <div className="mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-base lg:text-lg">
                    {project.description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="space-y-4 mb-8">
                    {Object.entries(project.techStack).map(([category, techs]) => (
                      <motion.div
                        key={category}
                        className="group/tech"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                            {category}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {techs.map((tech: any, techIndex: any) => (
                              <motion.span
                                key={techIndex}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1.5 bg-secondary/80 hover:bg-accent text-foreground rounded-lg text-sm font-medium transition-all duration-200 cursor-default border border-border/50 hover:border-primary/30"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-4">
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl group/btn"
                      >
                        <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-accent rounded-xl transition-all duration-300 font-medium border border-border/50 hover:border-primary/30 group/btn"
                      >
                        <Github className="w-4 h-4 transition-transform duration-200 group-hover/btn:rotate-12" />
                        <span>View Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative text */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground/60 text-sm">More projects coming soon...</p>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Projects
