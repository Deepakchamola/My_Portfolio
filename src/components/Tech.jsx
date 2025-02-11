import { motion } from "framer-motion";
import { FaCss3, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiHtml5Line, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiRedux } from "react-icons/si";

function Tech() {
  const varients = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="tech"
      className="min-h-[90vh] w-full flex flex-col items-center justify-center gap-15 md:gap-24"
    >
      <motion.h1
        variants={varients}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-2">
        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-orange-500 p-1 bg-orange-500 transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-500"
        >
          <RiHtml5Line className="cursor-pointer text-3xl text-white sm:text-4xl md:text-6xl" />
        </motion.div>

        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-white p-2 bg-white transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-500"
        >
          <FaCss3 className="cursor-pointer text-2xl text-blue-600 sm:text-3xl md:text-5xl" />
        </motion.div>

        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-yellow-500 p-2 bg-yellow-500 transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-500"
        >
          <IoLogoJavascript className="cursor-pointer text-2xl text-black sm:text-3xl md:text-5xl" />
        </motion.div>

        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-nuteral-800 p-1 bg-black transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-500"
        >
          <RiTailwindCssFill className="cursor-pointer text-3xl text-sky-500 sm:text-4xl md:text-6xl" />
        </motion.div>

        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-nuteral-800 p-2 bg-black transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-500"
        >
          <FaReact className="cursor-pointer text-2xl text-[#26c5ff] sm:text-3xl md:text-5xl" />
        </motion.div>

        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-nuteral-800 p-2 bg-black transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-500"
        >
          <SiRedux className="cursor-pointer text-2xl text-[#9505fc] sm:text-3xl md:text-5xl" />
        </motion.div>

        <motion.div
          variants={varients}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          className="rounded-2xl border-1 border-nuteral-800 p-2 bg-black transition-all duration-300 hover:-translate-y-5 shadow-lg shadow-indigo-700"
        >
          <SiFramer className="cursor-pointer text-3xl text-yellow-500 bg-black sm:text-4xl md:text-5xl" />
        </motion.div>

      </div>
      
    </div>
  );
}

export default Tech;
