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
        className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto item-center"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>
        <div
          className="w-full flex space-x-5 overflow-x-scroll -p-10 snap-x snap-mandatory"
        >
          <ExperienceContainer />
          <ExperienceContainer />
          <ExperienceContainer />
          <ExperienceContainer />
        </div>
      </motion.div>
    );
  }
}
