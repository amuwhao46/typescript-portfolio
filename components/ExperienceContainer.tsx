import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceContainer({ experience }: Props) {
  return (
    <article className="h-100 flex w-screen flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden overflow-y-auto rounded-lg bg-gray-700 p-10 opacity-40 transition-opacity duration-200 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/80 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src={urlFor(experience?.companyImage).url()}
        alt="Company image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience.companyPosition}</p>
        <p className="py-5 uppercase text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "PRESENT"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
