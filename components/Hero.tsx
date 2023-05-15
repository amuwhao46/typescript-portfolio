import React from "react";
import Image from "next/image";
import Portrait from "../public/Portrait.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Take a breath, breath in",
      "Long live javascript",
      "Built Different",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src={Portrait}
        alt="Portrait image"
        className="relative mx-auto h-48 w-48 rounded-full object-cover"
      />
      <div className="z-10">
        <h2 className="tracking-widest font-semibold text-lg">Full Stack Web Developer</h2>
        <h1 className="text-2xl font-bold text-gray-200">
          <span>{text}</span>
          <Cursor />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
