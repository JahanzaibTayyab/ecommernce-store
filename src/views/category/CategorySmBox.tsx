import React from "react";
import Image from "next/image";
import Link from "next/link";
import en from "@/locales/en";

interface Props {
  imgSrc: string;
  bgc: string;
  categoryTitle: string;
  href: string;
}
const CategorySmBox: React.FC<Props> = ({
  imgSrc,
  bgc,
  categoryTitle,
  href,
}) => {
  return (
    <Link href={`${href}`}>
      <div
        className={`flex flex-col items-center text-center ${"w-[10rem] sm:w-[13rem]"} my-2`}
      >
        <div
          className={`flex items-center justify-center w-[60px] h-[60px] rounded-full bg-palette-${bgc}`}
        >
          <Image
            src={`/images/category-icon/${imgSrc}`}
            alt={categoryTitle}
            width={45}
            height={45}
            className="drop-shadow-lg"
          />
        </div>
        <h3 className="text-sm md:text-base font-bold mt-2">
          {en[`${categoryTitle}`]}
        </h3>
      </div>
    </Link>
  );
};

export default CategorySmBox;
