import React from "react";
import { motion } from "framer-motion";

function Cards({ data }) {
  return (
    <div className="w-full flex flex-col gap-8 md:flex-row md:gap-15 justify-between  md:w-full cursor-pointer p-2 rounded-md">
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        src={data.image}
        className="w-full rounded-md transition-all duration-300 hover:scale-105 md:w-[40%] md:h-[40vh]"
        alt=""
      />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="flex md:w-[60%] flex-col items-center gap-3"
      >
        <div className="text-white flex flex-col items-center gap-3">
          <h1 className="text-2xl font-semibold">{data.title}</h1>
          <p className="text-sm text-zinc-400 font-light">{data.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {data.technologies.map((d, i) => (
            <span key={i} className="p-2 text-sm rounded-md bg-black">
              {d}
            </span>
          ))}
        </div>

        <a
          href={data.link}
          target="blank"
          className="p-2 text-xs bg-blue-500 text-white rounded-md"
        >
          View Live
        </a>
      </motion.div>
    </div>
  );
}

export default Cards;
