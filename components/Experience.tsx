import React, { PureComponent } from "react";
import { motion } from "framer-motion";
import ExperienceContainer from "./ExperienceContainer";

type Props = {};

export default class Experience extends PureComponent<Props> {
  render() {
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
        className="item-center relative mx-auto flex h-screen max-w-full flex-col justify-evenly overflow-hidden px-10 text-left md:flex-row"
      >
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
          Experience
        </h3>
        <div className="-p-10 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/80">
          <ExperienceContainer />
          <ExperienceContainer />
          <ExperienceContainer />
          <ExperienceContainer />
        </div>
      </motion.div>
    );
  }
}
