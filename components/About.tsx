import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="about"
      className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-evenly overflow-hidden px-5 text-center md:h-screen md:flex-row md:space-y-1 md:px-20 md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
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
        src={urlFor(pageInfo?.profilePic).url()}
        className="mt-40 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[400px] xl:w-[300px]"
      />
      <div className="space-y-6 px-0 md:space-y-10 md:px-10">
        <h4 className="mt-5 text-2xl font-semibold md:text-4xl">
          Some background info
        </h4>
        <p>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
