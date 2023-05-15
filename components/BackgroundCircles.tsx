import { motion } from "framer-motion";
import React from "react";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-64 h-[250px] w-[250px] animate-pulse rounded-lg rotate-45 border border-yellow-400" />
      <div className="absolute mt-64 h-[375px] w-[375px] animate-pulse rounded-lg rotate-45 border border-green-400" />
      <div className="absolute mt-64 h-[500px] w-[500px] animate-pulse rounded-lg rotate-45 border border-yellow-400" />

    </motion.div>
  );
}

export default BackgroundCircles;
