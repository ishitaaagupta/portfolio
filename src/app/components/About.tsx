"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
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
              Passionate Full-Stack Developer with hands-on experience in
              building scalable web applications using React, Redux Toolkit,
              Node.js, Express.js, MongoDB, and MySQL. Skilled in developing
              intuitive UI components, optimizing user experiences, and
              enhancing application performance. Strong problem-solving
              abilities with expertise in debugging, API development, and
              improving system efficiency. Dedicated to delivering high-quality,
              maintainable, and responsive web solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a foundation in JavaScript and hands-on experience in the
              MERN stack, I thrive in dynamic environments where I can
              continuously learn and contribute to impactful projects.
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
                src="https://media.licdn.com/dms/image/v2/D4E03AQGwBCiUAvzzUg/profile-displayphoto-shrink_400_400/B4EZdaVDv_GcAk-/0/1749567160869?e=1755129600&v=beta&t=sgB0zmcJZXh1hNVeHQZSB2VlZQaftR5QyAz_IpNkpuU"
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
  );
};

export default About;
