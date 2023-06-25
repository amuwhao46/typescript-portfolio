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
      className="relative z-0 mx-2 mt-32 flex h-screen max-w-7xl flex-col items-center justify-evenly rounded-2xl bg-white px-10 text-center dark:bg-neutral-800 md:mx-auto md:flex-row md:text-left"
    >
      <h1 className="absolute top-20 text-2xl font-semibold md:text-4xl">
        Ways to{" "}
        <span className=" bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
          Contact
        </span>{" "}
        Me
      </h1>
      <div className="flex flex-col space-y-10">
        <a href="mailto: amuwhao46@gmail.com" rel="noreferrer">
          <div className="flex cursor-pointer items-center justify-center space-x-3 rounded-2xl p-5 transition-all hover:bg-gray-100/80 hover:text-orange-400 dark:hover:bg-neutral-700/80 md:space-x-5">
            <EnvelopeIcon className="inline-block h-7 w-7 text-black dark:text-gray-100" />
            <p className="transition-color text-2xl">{pageInfo?.email}</p>
          </div>
        </a>
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
