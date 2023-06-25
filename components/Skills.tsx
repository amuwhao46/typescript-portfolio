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
      className="relative mx-auto mt-32 flex min-h-[850px] max-w-7xl snap-start items-center justify-center rounded-2xl bg-white dark:bg-neutral-800 xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        The <span className="text-orange-500">Skills</span> I&apos;ve Learned
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
