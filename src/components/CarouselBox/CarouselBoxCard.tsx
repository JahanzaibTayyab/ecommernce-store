import React from "react";
import Image from "next/image";
import { urlForImage } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import Link from "next/link";
import ProductPrice from "../ProductPrice";
import { productsSlug } from "@/utils/contsants";

interface Props {
  product: Product;
}

const CarouselBoxCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-full h-full px-2 my-2">
      <Link
        className="flex flex-col w-full p-3 shadow-lg backdrop-filter backdrop-blur-[10px] bg-palette-card/80 rounded-md"
        href={`/${productsSlug}/${product.category[0]}/${product.category[1]}/${product.brand}/${product.slug.current}`}
      >
        <div className="text-center flex-grow">
          {product?.image[0] && (
            <Image
              src={urlForImage(product?.image[0]).url()}
              alt="laptop image"
              width={200}
              height={185}
              className="object-fill hover:scale-105 transition-transform !p-2 overflow-hidden"
            />
          )}
          {product.isOffer ? (
            <span className="block absolute -top-2 -right-2">
              <Image
                src="/images/discount-icon/discount.webp"
                width={40}
                height={40}
                alt="discount-icon"
              />
            </span>
          ) : null}
        </div>
        <p className="truncate">{product?.name}</p>
        <ProductPrice
          price={product.price}
          discount={product.discount}
          isInSlider={true}
        />
      </Link>
    </div>
  );
};

export default CarouselBoxCard;
