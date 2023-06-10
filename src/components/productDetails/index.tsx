"use client";
import { Product } from "@/types/products";
import Breadcrumb from "../Breadcrumb";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import Benefits from "@/views/Benefits";
import SimilarProducts from "./SimilarProducts";

interface Props {
  product: Product;
  products: Product[];
}
const ProductDetails: React.FC<Props> = ({ product, products }) => {
  const similarProductsList = products
    .filter(
      (similarProduct) => similarProduct.slug.current !== product.slug.current
    )
    .slice(0, 10);

  return (
    <div className="flex flex-col">
      <Breadcrumb />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap items-center md:items-start mt-8 relative">
          <ImageSection imgArray={product.image} product={product} />
          <DetailsSection product={product} />
        </div>
        <div className="border-2 my-8">
          <Benefits />
        </div>
        <SimilarProducts products={similarProductsList} />
      </div>
    </div>
  );
};

export default ProductDetails;
