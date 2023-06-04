import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [navbar, setNavbar] = useState(false);
  const handleOnClick = () => {
    setNavbar(!navbar);
  };
  return (
    <header className="sticky top-0 z-50 items-start">
      <nav className="flex-center inset-x-0 flex flex-wrap justify-between bg-neutral-800/50 p-5 shadow-xl backdrop-blur">
        <Link onClick={handleOnClick} href="#hero">
          <div className="mr-6 flex flex-shrink-0 items-center text-white">
            <Image src={Logo} width={30} alt="My logo" className="mx-2" />
            <span className="text-2xl font-bold tracking-tight md:text-3xl">
              Oke Amuwha
            </span>
          </div>
        </Link>
        <div className="block md:hidden">
          <button
            onClick={handleOnClick}
            className="flex items-center rounded border border-white px-3 py-2 text-white transition-colors hover:border-gray-300 hover:text-gray-200"
          >
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:flex md:w-auto md:items-center">
          <div
            className={`text-md md:block md:flex-grow ${
              navbar ? "block" : "hidden"
            }`}
          >
            <Link
              onClick={handleOnClick}
              href="#about"
              rel="noopener noreferrer"
              className="mt-4 mr-4 block transition-colors hover:text-gray-300 md:mt-0 md:inline-block"
            >
              About
            </Link>
            <Link
              onClick={handleOnClick}
              href="#experience"
              rel="noopener noreferrer"
              className="mt-4 mr-4 block transition hover:text-gray-300 md:mt-0 md:inline-block"
            >
              Experience
            </Link>
            <Link
              onClick={handleOnClick}
              href="#skills"
              rel="noopener noreferrer"
              className="mt-4 mr-4 block transition-colors hover:text-gray-300 md:mt-0 md:inline-block"
            >
              Skills
            </Link>
            <Link
              onClick={handleOnClick}
              href="#projects"
              rel="noopener noreferrer"
              className="mt-4 mr-4 block transition-colors hover:text-gray-300 md:mt-0 md:inline-block"
            >
              Projects
            </Link>
            <Link
              onClick={handleOnClick}
              href="#contact"
              rel="noopener noreferrer"
              className="mt-4 mr-4 block transition-colors hover:text-gray-300 md:mt-0 md:inline-block"
            >
              Contact
            </Link>
            <Link
              onClick={handleOnClick}
              href="files/Oke-Oghene_Amuwha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white transition-colors hover:border-transparent hover:bg-white hover:text-black md:mt-0"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
