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
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-green-400" />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-green-400" />
      <div className="absolute mt-52 h-[400px] w-[400px] rounded-full border border-green-400" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-yellow-400 opacity-20" />
      <div className="absolute mt-52 h-[800px] w-[800px] rounded-full border border-green-400" />
    </motion.div>
  );
}

export default BackgroundCircles;
