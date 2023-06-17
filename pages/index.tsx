import About from "@/components/About";
import Contacts from "@/components/Contacts";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Link from "next/link";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-proximity overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/80 bg-neutral-900 text-white scroll-smooth">
      <Head>
        <title>Okes Portfolio</title>
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
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contacts />
      </section>

      <Link href="#hero">
        <div className="sticky bottom-5 mb-5 w-full animate-bounce cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowSmallUpIcon className="h-10 w-10 rounded-full bg-neutral-800/60 p-2 backdrop-blur" />
          </div>
        </div>
      </Link>

      <section className="snap-end">
        <Footer />
      </section>
    </div>
  );
}