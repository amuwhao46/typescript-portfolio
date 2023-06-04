import { Social } from "@/typings";

export const fetchSocials = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  // Check if it works
  // console.log("Attempting fetch socials from Sanity", socials);

  return socials; 
}