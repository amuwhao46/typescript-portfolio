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
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-evenly overflow-hidden px-2 text-left md:flex-row lg:px-0"
    >
      <h4 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        My Work <span className="text-orange-500">Experience</span>
      </h4>
      <div className="mt-40 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll rounded-2xl pb-5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-500/80">
        {experiences?.map((experience) => (
          <ExperienceContainer key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
