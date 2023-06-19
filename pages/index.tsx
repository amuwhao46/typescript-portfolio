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
import { PageInfo, Experience, Project, Skill, Social } from "@/typings";
import { GetStaticProps } from "next/types";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProject";
import { fetchSkills } from "@/utils/fetchSkill";
import { fetchSocials } from "@/utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  projects,
  skills,
  socials,
}: Props) {
  return (
    <div className="z-0 h-screen overflow-x-hidden scroll-smooth bg-neutral-900 text-white scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/80">
      <Head>
        <title>Oke Amuwha Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favicon_Logo.png" />
      </Head>

      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <About pageInfo={pageInfo} />
      </div>
      <div>
        <WorkExperience experiences={experiences} />
      </div>
      <div>
        <Skills skills={skills} />
      </div>
      <div>
        <Projects projects={projects} />
      </div>
      <div>
        <Contacts socials={socials} pageInfo={pageInfo} />
      </div>

      <Link href="#hero">
        <div className="sticky w-full animate-bounce cursor-pointer bottom-5 mb-5">
          <div className="flex items-center justify-center">
            <ArrowSmallUpIcon className="h-10 w-10 rounded-full bg-neutral-800/60 p-2 backdrop-blur" />
          </div>
        </div>
      </Link>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [pageInfo, experiences, projects, skills, socials] = await Promise.all([
    fetchPageInfo(),
    fetchExperiences(),
    fetchProjects(),
    fetchSkills(),
    fetchSocials(),
  ]);
  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },

    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day
    revalidate: 86400, // In seconds
  };
};
