"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about-me" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          {/* <div className="w-20 h-1 bg-primary mx-auto"></div> */}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Software Engineer at TechAhead with a strong interest in both frontend and backend development.
              Passionate about building seamless user experiences and scalable applications, I enjoy working across the
              full stack—from crafting intuitive UIs to designing robust backend logic.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a foundation in JavaScript and hands-on experience in the MERN stack, I thrive in dynamic
              environments where I can continuously learn and contribute to impactful projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-30"></div>
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQHAKK4AYy3wSw/profile-displayphoto-shrink_400_400/B56ZZbxha8GkAo-/0/1745296432048?e=1754524800&v=beta&t=E-CeL-vDp1uYLz8wVNU318aYbkIbOuw-rw5AJ8U98bQ"
                alt="Ishita Gupta"
                width={400}
                height={400}
                className="relative rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
