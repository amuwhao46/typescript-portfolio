import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "queue",
      title: "Queue",
      type: "string",
    },
    {
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "companyPosition",
      title: "CompanyPosition",
      type: "string",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
