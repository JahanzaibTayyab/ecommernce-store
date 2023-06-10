"use client";
import StarRatingComponent from "react-star-rating-component";
import { Product } from "@/types/products";
import CallToAction from "./CallToAction";
import en from "@/locales/en";

interface Props {
  product: Product;
}
const DetailsSection: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-palette-card md:bg-transparent w-[100vw] md:w-auto px-5 flex-grow self-center lg:self-start mt-8 md:mt-0 !-mx-[1rem] lg:ltr:ml-4 lg:rtl:mr-4 py-5 md:py-0 rounded-tl-[4rem] rounded-tr-[3rem] flex flex-col z-10">
      <h2 className="text-palette-mute whitespace-normal text-center md:text-left">
        {product.name}
      </h2>
      <hr className="mt-1 hidden md:block" />
      <div className="flex items-start flex-wrap relative">
        <div className="flex-grow mt-6">
          <div className="flex items-center self-center">
            <StarRatingComponent
              name="product_rate"
              starCount={5}
              value={product.starRating}
            />
            <p className="text-sm text-palette-mute rtl:mr-2 ltr:ml-2">
              {product.starRating} {en.stars}
            </p>
          </div>
          <h3 className="text-lg mt-2">{en.details}</h3>
          <div className="mt-4">
            {product.details?.[0].children.map((item: any) => (
              <div
                className="flex flex-wrap items-center max-w-sm"
                key={item._key}
              >
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <CallToAction product={product} />
      </div>
    </div>
  );
};

export default DetailsSection;
