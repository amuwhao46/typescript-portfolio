import React from "react";
import Image from "next/image";
import Portrait from "../public/Portrait.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Some Black Dude", "Testing... Help!", "I'm so bored :("],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={Portrait}
        alt="Portrait image"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-10">
        <h2 className="tracking-widest">Full Stack Web Developer</h2>
        <h1>
          <span>{text}</span>
          <Cursor />
        </h1>
        <div className="pt-5">
          <Link href='#about'>
            <button className="heroButton">About</button>
          </Link>
          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
