import { Experience } from "@/typings";

export const fetchExperiences = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // Check if it works
  // console.log("Attempting fetch experience from Sanity", experiences);

  return experiences; 
}