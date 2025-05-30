"use client";

import { motion } from "framer-motion";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className="fixed">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[24rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <ul className=" w-full h-full flex flex-row items-center justify-center gap-x-6 text-sm text-gray-950">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </div>
  );
}
