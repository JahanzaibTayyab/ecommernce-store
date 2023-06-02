import { NextResponse, NextRequest } from "next/server";
import { sanityClient } from "@/lib/sanityClient";

export async function GET(req: NextRequest) {
  try {
    const response =
      await sanityClient.fetch(`*[_type == 'category' && isParent == true] | order(name asc) {
        _id,
        name,
        slug,
        description,
        thumbnail,
        subtitles,
        mainImage,
        "productsGroup": *[_type == 'category' && references(^._id)] | order(name asc) {
          _id,
          name,
          slug,
          description,
          thumbnail,
          subtitles,
          mainImage
        }
      }`);
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      message: JSON.stringify(error),
    });
  }
}
