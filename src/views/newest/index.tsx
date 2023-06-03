"use client";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { newestProductsActions } from "@/store/slice/newestProduct.slice";
import Link from "next/link";
import Card from "@/components/card/Card";
import { Product } from "@/types/products";
import SectionTitle from "@/components/SectionTitle";
import en from "@/locales/en";
import { sanityClient } from "@/lib/sanityClient";

const Newest = () => {
  const dispatch = useDispatch();

  const newestProducts: Product[] = useSelector(
    (state: any) => state.newestProductsList.productsList
  );

  const getProductsData = useCallback(async () => {
    const products = await sanityClient.fetch(
      `*[_type == 'product'] | order(_updatedAt asc)`
    );
    dispatch(newestProductsActions.addProducts(products));
  }, []);

  useEffect(() => {
    getProductsData();
  }, [dispatch, getProductsData]);

  const { width } = useWindowDimensions();
  let numProductToShow = width >= 1536 ? 12 : 8;

  return (
    <div className="mx-auto my-4 md:my-8 flex flex-col xl:max-w-[2130px]">
      <SectionTitle title={"Newest"} />
      <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12 ">
        {newestProducts
          ? newestProducts
              .slice(0, numProductToShow)
              .map((product: Product) => {
                return <Card key={product.name} product={product} />;
              })
          : null}
      </div>

      <div className="text-center">
        <Link
          href="/newestProducts"
          className="inline-block py-3 px-8 md:px-12 mt-4 text-sm md:text-base bg-palette-primary text-palette-side rounded-xl shadow-lg"
        >
          {en.seeAllNewProducts}
        </Link>
      </div>
    </div>
  );
};

export default Newest;
