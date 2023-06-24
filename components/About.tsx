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
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-evenly rounded-2xl bg-white px-5 text-center dark:bg-neutral-900 md:h-screen md:flex-row md:space-y-1 md:px-20 md:text-left"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        Some <span className="text-orange-400">Background</span> Info
      </h1>
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
        className="mt-40 mb-5 h-32 w-32 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[400px] xl:w-[300px]"
      />
      <div className="space-y-6 px-0 pb-10 md:space-y-10 md:px-10">
        <p>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
