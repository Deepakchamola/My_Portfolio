import React, { useState } from "react";
import { IoLogoGithub, IoMdClose } from "react-icons/io";
import { BiMenu } from "react-icons/bi";

const Nav = () => {
  const [ChangeMenu, setChangeMenu] = useState(false);

  const MenuOpen = () => {
    setChangeMenu(!ChangeMenu);
  };

  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-between border-b-[1px] border-zinc-500 bg-black/70 px-8 md:px-22 py-5 text-white backdrop-blur-md md:justify-between">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text  text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        Deepak
      </a>

      <ul className="hidden md:flex gap-10 text-lg">
        <a
          to="#home"
          className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100"
        >
          Home
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100"
        >
          Technology
        </a>

        <a
          href="#project"
          className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100"
        >
          Contacts
        </a>
      </ul>

      <ul className="hidden md:flex gap-5 text-lg">
        <a
          to="https://github.com/Deepakchamola"
          target="blank"
          className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-purple-500"
        >
          <IoLogoGithub />
        </a>
      </ul>

      {ChangeMenu ? (
        <IoMdClose className="block md:hidden text-3xl" onClick={MenuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-3xl" onClick={MenuOpen} />
      )}

      {ChangeMenu && (
        <div
          className={`fixed right-0 top-[78px] md:hidden h-screen w-1/2 flex flex-col items-start justify-start gap-5 borer-l border-zinc-500 bg-black/90 p-5 ${
            ChangeMenu ? "block" : "hidden"
          }`}
        >
          <ul className="flex text-xl flex-col gap-5">
            <a
              href="#home"
              className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 px-2 hover:bg-blue-400 rounded-md"
            >
              Home
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 px-2 hover:bg-blue-400 rounded-md"
            >
              Technology
            </a>

            <a
              href="#project"
              className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 px-2 hover:bg-blue-400 rounded-md"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 px-2 hover:bg-blue-400 rounded-md"
            >
              Contacts
            </a>
          </ul>

          <ul className="text-xl flex flex-wrap gap-5 px-2">
            <a
              href="https://github.com/Deepakchamola"
              target="blank"
              className="cursor-pointer opacity-80 transition-all duration-300 hover:opacity-100 hover:text-purple-500"
            >
              <IoLogoGithub />
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
