import React from "react";
import Image from "next/image";
import Portrait from "../public/Portrait.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
      <div>
        <h2 className="tracking-widest">Full Stack Web Developer</h2>
        <h1>
          <span>{text}</span>
          <Cursor />
        </h1>
      </div>
      <div>
        <button className="heroButton">About</button>
        <button className="heroButton">Experience</button>
        <button className="heroButton">Skills</button>
        <button className="heroButton">Projects</button>
      </div>
    </div>
  );
}

export default Hero;
