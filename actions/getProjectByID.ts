"use server";
import { client } from "@/lib/client";
// import { cache } from "react";

export const getProjectByID = async (projectId: string) => {
  const query = `*[_type == "project" && _id == '${projectId}']{
       _id,
        title,
        description,
        moreDescription,
        startDate,
        endDate,
        "bannerImage": bannerImage.asset->url,
        "images": images[].asset->url,
        client,
        location,
        status,
        budget,
        currency
    }`;
  const result = await client.fetch(query);
  return result;
};
