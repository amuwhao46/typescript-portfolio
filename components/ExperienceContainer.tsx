import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceContainer({}: Props) {
  return (
    <article className="flex w-[500px] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-gray-900 p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src="https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg"
        alt="test"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Company Name</h4>
        <p className="mt-1 text-2xl font-bold">Position</p>
        <div className="my-2 flex space-x-2">{/* Tech Stack */}</div>
        <p className="py-5 uppercase text-gray-300">Started work/ ended work</p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Technology</li>
          <li>Technology</li>
          <li>Technology</li>
          <li>Technology</li>
          <li>Technology</li>
        </ul>
      </div>
    </article>
  );
}
