import { Skill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkill`);

  // check if the response was successful
  if (!res.ok) {
    throw new Error(`Server responded with status: ${res.status}`);
  }

  const data = await res.json();
  const skills: Skill[] = data.skills;

  // console.log("LOG: Fetching from Sanity", skills);

  return skills;
};
