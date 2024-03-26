"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="relative text-white mt-10 mb-10 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="mb-3">
        Graduated from{" "}
        <span className="font-medium">
        Netaji Subhas University of Technology, East Campus 
        </span>{" "}
        with a Bachelor of Technology degree in{" "}
        <span className="font-medium">Computer Science</span>. I started
        exploring website development during my 2nd year. My journey kicked off
        with an internship at Jawaharlal Nehru University, where I built a
        simple website using HTML, CSS, and Vanilla JS for their placement cell.
        This experience sparked my interest in web development.
        <p>
          As I progressed, I learned React.js and Node.js. In my 3rd year, I had
          another internship at StepUp Analytics, working on a website with
          React.js and Node.js. This opportunity helped me become more
          proficient in these technologies, especially React.js.
        </p>
        <p>
          In my 4th year, I interned at BITCS, which turned into a full-time
          role. BITCS exposed me to various technologies like React.js, Node.js,
          Postgres, Docker, and more. I have been with BITCS for over three years,
          learning and growing.
        </p>
        <p>
          While I continue my journey with BITCS, I am also open to new
          opportunities because I believe in ongoing personal and professional
          growth.
        </p>
      </div>
    </motion.section>
  );
}
