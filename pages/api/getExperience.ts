import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Experience } from "../../typings";

const query = groq`
  *[_type == "experience" ]
`;

type Data = {
  experiences: Experience[];
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const experiences: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({
      experiences,
      error: ""
    });
  } catch (error) {
    console.error("Error fetching experiences:", error);
    res.status(500).json({
      error: "An error occurred fetching experiences",
      experiences: []
    });
  }
}
