import { motion } from "framer-motion";
import React from "react";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
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
      id="projects"
      className="relative z-0 mx-auto flex max-w-7xl flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        Neet <span className="text-orange-500">Projects</span> I've made
      </h1>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-500/80">
        {/* Projects */}
        {projects?.map((project) => (
          <div
            key={project._id}
            className="mt-32 flex w-screen flex-shrink-0 snap-center flex-col items-center justify-start space-y-5 rounded-lg p-10 md:w-[1000px] md:p-16"
          >
            <img
              className="h-72 w-72 object-contain object-center md:h-96 md:w-96"
              key={project._id}
              src={urlFor(project?.image).url()}
              alt="Image of project"
            />
            <div className="max-w-6xl space-y-6 rounded-2xl bg-white/60 p-5 dark:bg-neutral-800/60 md:space-y-10 md:px-10">
              <Link
                href={project.linkToBuild}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="text-center text-4xl font-semibold transition-colors ease-in-out hover:text-orange-400">
                  {project.title}
                </h4>
              </Link>
              <div className="flex items-center justify-center space-x-4">
                {project.technologies?.map((technology) => (
                  <img
                    className="h-10 w-10 rounded-full"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt="Technologies"
                  />
                ))}
              </div>
              <p className="text-center text-lg md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-neutral-900/10" /> */}
    </motion.div>
  );
}
