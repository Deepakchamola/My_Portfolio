import Me from "/src/assets/Me.jpg";
import { motion } from "framer-motion";

function Hero() {
 
  return (
    <div
      id="home"
      className="px-12 pt-32 pb-5 min-h-screen w-full flex items-center justify-center md:px-15 md:pt-38 md:pb-2"
    >
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:gap-10 text-white">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <img
            src={Me}
            className="w-[250px] h-[250px] cursor-pointer rounded-full shadow-lg shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500 md:w-[350px] md:h-[350px]"
            alt=""
          />
        </motion.div>

        <div className="flex max-w-[700px] flex-col items-center justify-center gap-3 text-center">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text  text-transparent text-4xl font-light cursor-pointer md:text-7xl"
          >
            Deepak Chamola
          </motion.h1>

          <motion.h3
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-white to-blue-500 bg-clip-text  text-transparent text-2xl font-light cursor-pointer md:text-4xl"
          >
            Frontend Developer
          </motion.h3>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-md text-zinc-300 md:text-base text-pretty px-2"
          >
            Hello! I'm a passionate and motivated front-end web developer
            currently honing my skills in the world of web development. As a
            fresher, I'm diving into the exciting realm of HTML, CSS,
            JavaScript, and modern frameworks like ReactJS. I'm also expanding
            my toolkit with technologies such as Tailwind CSS, Redux, and
            powerful animation libraries like Framer Motion and GSAP. My focus
            is on creating user-friendly, visually appealing websites that not
            only look great but also perform seamlessly. I love solving problems
            and learning new techniques to bring my ideas to life on the web.
          </motion.p>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
