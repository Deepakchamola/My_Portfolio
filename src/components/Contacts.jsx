import { motion } from "framer-motion";

const Contacts = () => {

  return (
    <div
      id="contact"
      className="min-h-[100vh] min-w-full flex flex-col items-center justify-center px-5 md:px-14"
    >
      <motion.h1
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-4xl md:text-7xl"
      >
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </span>
      </motion.h1>

      <motion.div
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="relative flex flex-col md:flex-row items-center justify-between gap-3 space-y-6 px-5 pt-5 pb-10 borer-1 border-black shadow-lg shadow-indigo-500 rounded-md mt-5 bg-gradient-to-r from-blue-500 to-red-500"
      >
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="md:w-1/2 text-center text-sm md:text-lg font-semibold text-zinc-900"
        >
          I’d love to hear from you! Whether you have a question, want to
          collaborate on a project, or simply want to connect, feel free to
          email me through this button. I'm always open to new opportunities and
          exciting challenges. Let’s create something amazing together!
        </motion.p>

        <motion.form
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          action=""
          className=" w-full md:w-[40%] px-4 py-5 text-black flex flex-col items-center justify-between gap-5 bg-black shadow-xl shadow-indigo-500 rounded-md "
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="contact-inputs p-2 text-sm md:text-lg bg-zinc-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="contact-inputs p-2 bg-zinc-100 text-sm md:text-lg"
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            className="contact-inputs p-2 text-sm md:text-lg bg-zinc-100"
          />

          <button
            type="submit"
            className="text-nowrap text-sm md:text-lg rounded-md border-indigo-600 bg-blue-500 text-white py-3 px-4 duration-200 hover:scale-105"
          >
            Contact Me
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contacts;
