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
      className="relative z-0 mx-2 flex max-w-7xl flex-col items-center justify-evenly overflow-hidden text-left md:mx-auto md:flex-row"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        Neat{" "}
        <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
          Projects
        </span>{" "}
        I&apos;ve made
      </h1>
      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-500/80 relative flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {/* Projects */}
        {projects?.map((project) => (
          <div
            key={project._id}
            className="mt-32 flex w-screen flex-shrink-0 snap-center flex-col items-center justify-start space-y-5 rounded-lg p-10 md:w-[1000px] md:p-16"
          >
            <img
              className="h-72 w-72 rounded-2xl object-contain object-center md:h-96 md:w-96"
              key={project._id}
              src={urlFor(project?.image).url()}
              alt="Image of project"
            />
            <div className="flex max-w-6xl flex-col items-center justify-center space-y-6 rounded-2xl bg-white/60 p-5 dark:bg-neutral-800/60 md:mx-auto md:space-y-10 md:px-10">
              <Link
                href={project.linkToBuild}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="rounded-2xl p-3 text-center text-4xl font-semibold transition-all ease-in-out hover:bg-gray-100/80 hover:text-orange-400 dark:hover:bg-neutral-700/80">
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
