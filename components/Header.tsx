import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [navbar, setNavbar] = useState(false);
  const handleOnClick = () => {
    setNavbar(!navbar);
  };
  return (
    <header>
      <nav className="flex-center fixed inset-x-0 z-50 flex flex-wrap justify-between p-5 shadow-lg backdrop-blur">
        <Link href="#hero">
          <div className="mr-6 flex flex-shrink-0 items-center space-x-2 rounded-2xl px-2 text-black transition-colors hover:bg-neutral-200 dark:bg-gray-100">
            <Image src={Logo} width={30} alt="My logo" className="" />
            <span className="text-xl font-bold tracking-tight md:text-3xl">
              Oke Amuwha
            </span>
          </div>
        </Link>
        <div className="block md:hidden">
          <button
            onClick={handleOnClick}
            className="flex items-center rounded border border-orange-500 px-3 py-2 text-orange-500 transition-colors hover:border-orange-200 hover:text-orange-200"
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
              className="mr-4 mt-4 block transition-colors hover:text-orange-400 md:mt-0 md:inline-block"
            >
              About
            </Link>
            <Link
              onClick={handleOnClick}
              href="#experience"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition hover:text-orange-400 md:mt-0 md:inline-block"
            >
              Experience
            </Link>
            <Link
              onClick={handleOnClick}
              href="#skills"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition-colors hover:text-orange-400 md:mt-0 md:inline-block"
            >
              Skills
            </Link>
            <Link
              onClick={handleOnClick}
              href="#projects"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition-colors hover:text-orange-400 md:mt-0 md:inline-block"
            >
              Projects
            </Link>
            <Link
              onClick={handleOnClick}
              href="#contact"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition-colors hover:text-orange-400 md:mt-0 md:inline-block"
            >
              Contact
            </Link>
            <Link
              onClick={handleOnClick}
              href="files/Oke-Oghene_Amuwha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded border border-orange-500 px-4 py-2 text-sm leading-none text-orange-500 transition-colors hover:border-transparent hover:bg-orange-500 hover:text-black md:mt-0"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
