import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { ArrowSmallUpIcon, ArrowUpIcon } from "@heroicons/react/24/solid";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-proximity overflow-x-hidden overflow-y-scroll scroll-smooth bg-neutral-900 text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/80">
      <Head>
        <title>Oke's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon_Logo.png" />
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center"> 
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contacts />
      </section>

      <Link href="#hero">
        <div className="sticky bottom-5 w-full cursor-pointer mb-5 animate-bounce">
          <div className="flex items-center justify-center">
            <ArrowSmallUpIcon className="w-10 h-10 bg-gray-700 rounded-full" />
          </div>
        </div>
      </Link>

      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
}
