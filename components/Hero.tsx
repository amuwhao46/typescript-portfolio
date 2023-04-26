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
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
      />
      <div className="z-10">
        <h2 className="tracking-widest">Full Stack Web Developer</h2>
        <h1>
          <span>{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
