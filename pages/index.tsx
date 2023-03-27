import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-screen text-white snap-y overflow-scroll z-0 snap-proximity">
      <Head>
        <title>Oke's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon_Logo.png" />
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
