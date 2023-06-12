import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typings";

const query = groq`
  *[_type == "skill" ]
`;

type Data = {
  skills: Skill[];
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {

    const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({
      skills,
      error: ""
    });
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({
      error: "An error occurred fetching skills",
      skills: [],
    });
  }
}
