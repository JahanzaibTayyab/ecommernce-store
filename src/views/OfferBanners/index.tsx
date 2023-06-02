"use client";
import BannerBox from "./banner-box/BannerBox";
import { bannerContent } from "@/utils/mock/banner";
import SectionTitle from "@/components/SectionTitle";

const Banner = () => {
  return (
    <div className="flex items-center flex-col w-full xl:max-w-[2100px] my-4 md:my-8 mx-auto">
      <SectionTitle title={"SpecialSale"} />
      <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
        {bannerContent.map(
          ({
            title,
            description,
            numberOfDiscountDate,
            href,
            imgHeight,
            imgSrc,
            imgWidth,
            buttonText,
          }) => {
            return (
              <BannerBox
                title={title}
                description={description}
                numberOfDiscountDate={numberOfDiscountDate}
                href={href}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                buttonText={buttonText}
                key={title}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Banner;
