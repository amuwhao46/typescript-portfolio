import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Contacts({}: Props) {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">Get in touch</h4>
        <div className="flex items-center justify-center space-x-5">
          <EnvelopeIcon className="inline-block h-7 w-7 text-white" />
          <p className="text-2xl">amuwhao46@gmail.com</p>
        </div>
        <div className="flex flex-row justify-between items-center mx-auto">
          <SocialIcon
            bgColor="transparent"
            fgColor="white"
            url="https://www.linkedin.com/in/oke-oghene-amuwha-1b1489203/"
            style={{ height: 70, width: 70 }}
          />
                    <SocialIcon
            bgColor="transparent"
            fgColor="white"
            url="https://github.com/amuwhao46"
            style={{ height: 70, width: 70 }}
          />
        </div>
      </div>
    </div>
  );
}
