import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  // pageInfo: PageInfo;
};

function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-full md:h-screen max-w-7xl flex-col items-center justify-evenly px-5 text-center md:flex-row md:space-y-1 md:px-20 md:text-left"
    >
      <h3 className="absolute top-24 text-lg uppercase tracking-[20px] text-gray-500 md:text-2xl">
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
        className="mt-40 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[400px] xl:w-[300px]"
      />
      <div className="space-y-6 px-0 md:space-y-10 md:px-10">
        <h4 className="mt-5 text-2xl font-semibold md:text-4xl">
          Some background info
        </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa. Turpis cursus in hac habitasse platea dictumst
          quisque. Facilisi nullam vehicula ipsum a arcu cursus. Adipiscing enim
          eu turpis egestas pretium. Tellus pellentesque eu tincidunt tortor
          aliquam.</p>
      </div>
    </motion.div>
  );
}

export default About;
