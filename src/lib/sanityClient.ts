import { createClient } from "next-sanity";
import type { Image } from "sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { apiVersion, dataset, projectId, useCdn } from "../../sanity/env";

export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto("format").fit("max");
};
