import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

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
          <PhoneIcon className="mr-2 inline-block h-7 w-7 animate-pulse text-gray-600" />
          <p className="text-2xl">+1 (248) 495-7743</p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <EnvelopeIcon className="mr-2 inline-block h-7 w-7 animate-pulse text-gray-600" />
          <p className="text-2xl">amuwhao46@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
