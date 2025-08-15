// sanity.js
import { createClient, type ClientConfig } from "@sanity/client";


const config: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  // Set default headers to be included with all requests
  headers: {
    // 'X-Custom-Header': 'custom-value'
  },
  apiVersion: "2025-05-26", // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  token: process.env.NEXT_PUBLIC_SANITY_PROJECT_TOKEN, // Needed for certain operations like updating content, accessing drafts or using draft perspectives
};

export const client = createClient(config);


