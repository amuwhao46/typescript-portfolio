import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";
import { PageInfo, Social } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  socials: Social[];
  pageInfo: PageInfo;
};

export default function Contacts({ socials, pageInfo }: Props) {
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
      id="contact"
      className="relative mx-auto mt-32 flex h-screen max-w-7xl flex-col items-center justify-evenly rounded-2xl bg-white px-10 text-center dark:bg-neutral-800 md:flex-row md:text-left"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        Ways to <span className="text-orange-500">Contact</span> Me
      </h1>
      <div className="flex flex-col space-y-10">
        <div className="flex cursor-pointer items-center justify-center space-x-3 rounded-2xl p-5 transition-all hover:bg-gray-100/80 hover:text-orange-400 dark:hover:bg-neutral-700/80 md:space-x-5">
          <EnvelopeIcon className="inline-block h-7 w-7 text-black dark:text-gray-100" />
          <a href="mailto: amuwhao46@gmail.com" rel="noreferrer">
            <p className="transition-color text-2xl">{pageInfo?.email}</p>
          </a>
        </div>
        <div className="mx-auto flex flex-row items-center justify-between space-x-5">
          {socials?.map((social) => (
            <SocialIcon
              bgColor="white"
              fgColor="black"
              key={social._id}
              url={social?.url}
              style={{ height: 70, width: 70 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
