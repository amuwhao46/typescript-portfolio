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
      className="relative z-0 mx-auto flex max-w-7xl flex-col items-center justify-evenly overflow-hidden px-2 text-left md:flex-row lg:px-0"
    >
      <h4 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        My Work{" "}
        <span className=" bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
          Experience
        </span>
      </h4>
      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-500/80 mt-40 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll rounded-2xl pb-5">
        {experiences
          ?.sort((a, b) => (a.queue < b.queue ? -1 : 1))
          .map((experience) => (
            <ExperienceContainer key={experience._id} experience={experience} />
          ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
