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
      className="relative mx-auto flex h-screen min-h-[850px] max-w-[2000px] items-center justify-center xl:flex-row xl:space-y-0 xl:px-10"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-8 xl:gap-10">
        {skills?.map((skill) => (
          <ItemSkill key={skill._id} skill={skill} />
        ))}
        {/* <ItemSkill /> */}
      </div>
    </motion.div>
  );
}
