import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";

export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
