import { useState } from "react";
import img1 from "/src/assets/img1.png";
import img2 from "/src/assets/img2.png";
import img3 from "/src/assets/img3.png";
import { motion } from "framer-motion";
import Cards from "./Cards";

const ProjectData = [
  {
    image: img1,
    title: "MoviesMx",
    description:
      "A responsive movie and TV show website built with ReactJS, Redux, Tailwind CSS, and TMDB API for fetching data. This project is designed to showcase movie and TV show details, trending content, and actor information.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "ReactJS",
      "Redux",
    ],
    link: "https://movies-mx-gamma.vercel.app/",
  },
  {
    image: img2,
    title: "Refokus - Clone",
    description:
      "Refokus website clone project! This project aims to replicate the design and functionality of the Refokus website using HTML, CSS, and JavaScript. Additionally, it utilizes Locomotive, Framer motion for smooth scrolling effects and animations.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "ReactJS",
      "Framer Motion",
    ],
    link: "https://refokus-clone-topaz.vercel.app/",
  },
  {
    image: img3,
    title: "Obys Agency - Clone",
    description:
      "Obys Agency clone website, created for learning purposes. The project demonstrates the use of various web technologies including HTML, CSS, JavaScript, and libraries such as Locomotive.js, ScrollTrigger, and Sherry.js to create a smooth, interactive, and modern user experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "ReactJS",
      "Locomotive",
      "ScrollTrigger",
    ],
    link: "https://deepakchamola.github.io/Obys_Agency/",
  },
  {
    image: img4,
    title: "ExoApe - Clone",
    description:
      "A clone of the ExoApe website built for frontend practice. This project utilizes modern web technologies to replicate the design of the ExoApe website. It also includes animations for an enhanced user experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "ReactJS",
      "Framer motion",
      "GSAP",
      "ScrollTrigger",
    ],
    link: "https://exo-ape-clone-three.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

function Projects() {
  return (
    <ScrollReveal>
      <div
        id="project"
        className="min-h-screen w-full flex flex-col items-center justify-center gap-10 p-4 pt-14 md:pt-20 md:px-20 md:py-24 md:gap-24"
      >
        <h1 className="text-4xl text-white font-light md:text-6xl">
          My Projects
        </h1>

        <div className="w-full max-w-[1200px] flex flex-col gap-20 text-white md:flex-col md:flex-wrap">
          {ProjectData.map((d, i) => (
            <Cards key={i} data={d} ScrollReveal={ScrollReveal} />
          ))}
        </div>

      </div>
    </ScrollReveal>
  );
}

export default Projects;
