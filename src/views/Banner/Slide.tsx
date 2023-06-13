"use client";
import Link from "next/link";
import { Banner } from "@/types/banner";
import { urlForImage } from "@/lib/sanityClient";
import { productsSlug } from "@/utils/contsants";

const Slide: React.FC<Banner> = ({
  title,
  description,
  bannerBackgroundColor,
  image,
  ctaLink = "#",
  buttonText = "Show Now",
}) => {
  return (
    <>
      <div
        className={`relative w-[100%] h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${urlForImage(image).url()})`,
          backgroundColor: `${bannerBackgroundColor}`,
        }}
      >
        <div>
          <div
            className={`backdrop-filter backdrop-blur-[12px] bg-palette-card/60 p-3 md:p-8 lg:p-10 shadow-lg md:overflow-hidden ltr:text-left rtl:text-right rounded-md md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto`}
          >
            <h3 className="text-lg md:text-2xl lg:text-3xl font-medium capitalize">
              {`${title}`}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6 capitalize mt-2 md:mt-4 lg:mt-8">
              {`${description}`}
            </p>
            <Link
              href={`${productsSlug}/${ctaLink}`}
              className="py-2 px-3 sm:py-3 lg:py-2 xl:py-3 sm:px-6 rounded-lg bg-palette-primary/90 hover:bg-palette-primary/100 transition-all duration-300 shadow-lg 2xl:mt-4 mr-auto sm:ml-14 sm:mr-0  inline-block  text-palette-side text-[12px] mt-4"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
