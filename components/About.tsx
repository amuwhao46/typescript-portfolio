import React from "react";
import Image from "next/image";
import Portrait from "../public/Portrait.jpg";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-5 md:px-20 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/D5603AQGYXjbTeqETOw/profile-displayphoto-shrink_400_400/0/1683862875181?e=1690416000&v=beta&t=0nJCKi_5u6qqW95QqRJ4fXcN668ZRmEwJe6noGhRVDw"
        className="mt-40 h-40 w-40 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-96 md:w-64 md:rounded-lg xl:h-[400px] xl:w-[300px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="mt-5 text-4xl font-semibold">A little background</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in
          vitae turpis massa. Turpis cursus in hac habitasse platea dictumst
          quisque. Facilisi nullam vehicula ipsum a arcu cursus. Adipiscing enim
          eu turpis egestas pretium. Tellus pellentesque eu tincidunt tortor
          aliquam. Lacus sed viverra tellus in. Dolor morbi non arcu risus quis
          varius quam quisque. Ut sem viverra aliquet eget sit. Risus commodo
          viverra maecenas accumsan lacus vel. Tortor vitae purus faucibus
          ornare. Egestas congue quisque egestas diam in arcu cursus euismod
          quis.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
