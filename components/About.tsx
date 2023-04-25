import React from "react";
import Image from "next/image";
import Portrait from "../public/Portrait.jpg";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-red-600/50">little</span> background
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa. Turpis cursus in hac habitasse platea dictumst
          quisque. Facilisi nullam vehicula ipsum a arcu cursus. Adipiscing enim
          eu turpis egestas pretium. Tellus pellentesque eu tincidunt tortor
          aliquam. Lacus sed viverra tellus in. Dolor morbi non arcu risus quis
          varius quam quisque. Ut sem viverra aliquet eget sit. Risus commodo
          viverra maecenas accumsan lacus vel. Tortor vitae purus faucibus
          ornare. Egestas congue quisque egestas diam in arcu cursus euismod
          quis.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
