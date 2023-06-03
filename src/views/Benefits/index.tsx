import Image from "next/image";
import { benefitContent } from "@/utils/mock/benefits";
import en from "@/locales/en";

const Benefits = () => {
  return (
    <div className="grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto">
      {benefitContent.map((benefitItem) => {
        return (
          <div
            className="col-span-6 lg:col-span-3 flex flex-col items-center "
            key={benefitItem.title}
          >
            <Image
              height={48}
              width={48}
              src={benefitItem.imgSrc}
              alt={benefitItem.title}
            />
            <p className="py-2 text-sm md:text-base text-palette-base/90 text-center capitalize">
              {en[`${benefitItem.title}`]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Benefits;
