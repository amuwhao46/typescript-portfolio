import { Skill } from "@/typings";

export const fetchSkills = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  // Check if it works
  console.log("Attempting fetch skills from Sanity", skills);

  return skills; 
}