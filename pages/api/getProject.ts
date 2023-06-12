import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`
  *[_type == "project" ] {
    ...,
    technologies[]->
  }
`;

type Data = {
  projects: Project[];
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const projects: Project[] = await sanityClient.fetch(query);
    res.status(200).json({
      projects,
      error: "",
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({
      error: "An error occurred fetching projects",
      projects: [],
    });
  }
}
