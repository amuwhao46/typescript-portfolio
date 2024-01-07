import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { getFileUrl } from "@/sanity/lib/resume";

type Props = {
  pageInfo: PageInfo;
};

export default function Header({ pageInfo }: Props) {
  const [navbar, setNavbar] = useState(false);
  const handleOnClick = () => {
    setNavbar(!navbar);
  };
  const resumeUrl = getFileUrl(pageInfo?.resume?.asset?._ref);
  return (
    <header>
      <nav className="flex-center fixed inset-x-0 z-50 flex flex-wrap justify-between p-5 shadow-lg backdrop-blur">
        <Link href="#hero">
          <div className="flex flex-shrink-0 items-center space-x-2">
            <Image src={Logo} width={30} alt="My logo" className="dark:invert" />
            <span className="text-3xl font-semibold md:font-bold tracking-tight md:text-3xl">
              Oke Amuwha
            </span>
          </div>
        </Link>
        <div className="block md:hidden">
          <button
            onClick={handleOnClick}
            className="flex items-center rounded border border-blue-500 px-3 py-2 text-blue-500 transition-colors hover:border-blue-200 hover:text-blue-200"
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
              className="mr-4 mt-4 block transition-colors hover:text-blue-400 md:mt-0 md:inline-block"
            >
              About
            </Link>
            <Link
              onClick={handleOnClick}
              href="#experience"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition hover:text-blue-400 md:mt-0 md:inline-block"
            >
              Experience
            </Link>
            <Link
              onClick={handleOnClick}
              href="#skills"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition-colors hover:text-blue-400 md:mt-0 md:inline-block"
            >
              Skills
            </Link>
            <Link
              onClick={handleOnClick}
              href="#projects"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition-colors hover:text-blue-400 md:mt-0 md:inline-block"
            >
              Projects
            </Link>
            <Link
              onClick={handleOnClick}
              href="#contact"
              rel="noopener noreferrer"
              className="mr-4 mt-4 block transition-colors hover:text-blue-400 md:mt-0 md:inline-block"
            >
              Contact
            </Link>
            <Link
              onClick={handleOnClick}
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded border border-blue-500 px-4 py-2 text-sm leading-none text-blue-500 transition-colors hover:border-transparent hover:bg-blue-500 hover:text-black md:mt-0"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
