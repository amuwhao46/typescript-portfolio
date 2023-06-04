import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  skill: Skill;
};

export default function ItemSkill({skill}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
        }}
        src={urlFor(skill?.image).url()}
        alt="test"
        className="h-24 w-24 rounded-full border-gray-500 object-cover xl:h-32 xl:w-32"
      />
    </div>
  );
}
