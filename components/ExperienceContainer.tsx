import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceContainer({ experience }: Props) {
  return (
    <article className="transition-color flex w-screen flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden overflow-y-auto rounded-2xl bg-gradient-to-b from-orange-900 to-orange-600 p-10 opacity-40 grayscale transition-opacity duration-200 hover:opacity-100 hover:filter-none md:w-[600px] xl:w-[900px]">
      <img
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src={urlFor(experience?.companyImage).url()}
        alt="Company image"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-center text-4xl font-light text-white md:text-left">
          {experience?.jobTitle}
        </h4>
        <p className="mt-1 text-center text-2xl font-bold text-white md:text-left">
          {experience?.companyPosition}
        </p>
        <p className="py-5 text-center uppercase text-white md:text-left">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "PRESENT"
            : new Date(experience?.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 list-disc space-y-4 text-lg text-white">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
