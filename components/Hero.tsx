import React from "react";
import Image from "next/image";
import Portrait from "../public/Portrait.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Fullstack Web Developer",
      "UI/UX Designer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-10 overflow-hidden text-center">
      <BackgroundCircles />
      {/* <Image
        src={Portrait}
        alt="Portrait image"
        className="relative mx-auto h-48 w-48 rounded-full object-cover"
      /> */}
      <div className="z-10">
        <h2 className="text-lg text-gray-300 tracking-widest">
          Oke-Oghene Amuwha
        </h2>
        <h1 className="text-xl md:text-3xl font-bold text-white tracking-widest md:tracking-[10px]">
          <span>{text}</span>
          <Cursor />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
