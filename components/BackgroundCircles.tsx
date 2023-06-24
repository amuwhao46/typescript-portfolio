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
      className="relative flex items-center justify-center"
    >
      <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-orange-400 opacity-80 mix-blend-multiply blur-2xl filter ease-in-out" />
      <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-red-400 opacity-80 mix-blend-multiply blur-2xl filter ease-in-out" />
      <div className="animation-delay-4000 absolute -top-12 h-72 w-72 animate-blob rounded-full bg-yellow-400 opacity-80 mix-blend-multiply blur-2xl filter ease-in-out" />
    </motion.div>
  );
}

export default BackgroundCircles;
