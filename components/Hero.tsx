import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Logo from "../public/Logo.svg";
import Image from "next/image";
import { PageInfo } from "@/typings";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: ["Full-stack Web Developer", "UI/UX Designer", "Software Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      id="hero"
      className="flex h-screen flex-col items-center justify-center space-y-10 text-center"
    >
      <BackgroundCircles />
      <motion.div
        className="z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={Logo}
          width={34}
          alt="Logo"
          className="relative mx-auto object-cover dark:invert"
        />
        <h2 className="text-lg tracking-widest">{pageInfo.name}</h2>
        <h1 className="text-xl font-bold tracking-widest md:text-4xl">
          <span>{text}</span>
          <Cursor />
        </h1>
      </motion.div>
    </div>
  );
}

export default Hero;
