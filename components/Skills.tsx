import React from "react";
import { motion } from "framer-motion";
import ItemSkill from "./ItemSkill";
import { Skill } from "@/typings";

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      id="skills"
      className="relative mx-2 z-0 md:mx-auto mt-32 flex h-[850px] md:h-fit md:p-32 max-w-7xl items-center justify-center rounded-2xl bg-white dark:bg-neutral-800 md:flex-row"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        The{" "}
        <span className="bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent">
          Skills
        </span>{" "}
        I&apos;ve Learned
      </h1>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-8 xl:gap-10">
        {skills?.map((skill) => (
          <ItemSkill key={skill._id} skill={skill} />
        ))}
        {/* <ItemSkill /> */}
      </div>
    </motion.div>
  );
}
