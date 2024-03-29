import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="relative z-0 flex items-center justify-center"
    >
      <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-blue-400 opacity-60 mix-blend-multiply blur-2xl filter ease-in-out dark:bg-blue-600" />
      <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-indigo-400 opacity-60 mix-blend-multiply blur-2xl filter ease-in-out dark:bg-indigo-600" />
      <div className="animation-delay-4000 absolute -top-12 h-72 w-72 animate-blob rounded-full bg-green-400 opacity-60 mix-blend-multiply blur-2xl filter ease-in-out dark:bg-green-600" />
    </motion.div>
  );
}

export default BackgroundCircles;
