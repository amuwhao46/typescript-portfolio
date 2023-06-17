import React from "react";
import { motion } from "framer-motion";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  // skill: Skill;
};

export default function ItemSkill({ }: Props) {
  return (
    <div className="group relative flex">
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
        }}
        src="https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg"
        alt="test"
        className="h-24 w-24 rounded-full border-gray-500 object-cover xl:h-32 xl:w-32"
      />
    </div>
  );
}
