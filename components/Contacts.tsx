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
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">Get in touch</h4>
        <div className="flex items-center justify-center space-x-5">
          <EnvelopeIcon className="inline-block h-7 w-7 text-white" />
          {/* TODO: Make email open mail client */}
          <p className="text-2xl">{pageInfo?.email}</p>
        </div>
        <div className="mx-auto flex flex-row items-center justify-between">
          {socials?.map((social) => (
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
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
