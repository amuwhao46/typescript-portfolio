import React from "react";
import { motion } from "framer-motion";
import ExperienceContainer from "./ExperienceContainer";
import { Experience } from "@/typings";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      id="experience"
      className="relative mx-auto flex h-full max-w-full flex-col items-center justify-evenly overflow-hidden px-5 text-left md:flex-row"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      <div className="mt-32 flex w-full snap-x snap-mandatory space-x-5 overflow-y-hidden overflow-x-scroll p-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/80">
        {experiences?.map((experience) => (
          <ExperienceContainer key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
