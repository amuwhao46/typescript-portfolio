import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-10 items-start bg-neutral-900/60 md:px-8">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="mx-auto flex flex-row items-center justify-center pt-4 md:flex-grow md:justify-start"
      >
        {/* Logo & Name */}
        <Image src={Logo} width={25} alt="My logo" className="mx-2" />
        <h1 className="text-3xl font-bold text-gray-500">Oke Amuwha</h1>
      </motion.div>
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      />
    </header>
  );
}
