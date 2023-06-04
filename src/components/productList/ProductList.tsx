"use client";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/products";
import SubmenuCategory from "./SubmenuCategory";
import Card from "../card/Card";
import Breadcrumb from "../Breadcrumb";
import Sort from "./Sort";
import { useDispatch, useSelector } from "react-redux";
import { SortedProductsListActions } from "@/store/slice/sortedProductList.slice";
import { usePathname } from "next/navigation";
import { ProductListRootState } from "@/types/productList";
import en from "@/locales/en";

interface Props {
  productList: Product[];
}
const ProductList: React.FC<Props> = ({ productList }) => {
  const pathname = usePathname();

  let isInNewestProductsPage = pathname === "/newestProducts" ? true : false;

  const [selectedRadioBtn, setSelectedRadioBtn] = useState<string>("all");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      SortedProductsListActions.sortProductsList({
        productsList: productList,
        sortBasedOn: selectedRadioBtn,
      })
    );
  }, [dispatch, productList, selectedRadioBtn]);

  const sortedProductList = useSelector(
    (state: ProductListRootState) => state.sortedProductsList.productsList
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadioBtn(e.currentTarget.id);
  };

  return (
    <div>
      <Breadcrumb />
      <SubmenuCategory />
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {isInNewestProductsPage && productList.length ? (
          <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
            {productList
              ? productList.map((product: Product) => {
                  return <Card key={product.slug.current} product={product} />;
                })
              : null}
          </div>
        ) : sortedProductList && sortedProductList.length ? (
          <div>
            <Sort
              selectedBtn={selectedRadioBtn}
              onChangeSelectedBtn={onChangeHandler}
            />
            <div className="grid gap-4 md:gap-2 grid-cols-6 md:grid-cols-12">
              {sortedProductList.map((product: Product) => {
                return <Card key={product.slug.current} product={product} />;
              })}
            </div>
          </div>
        ) : (
          <p className="text-palette-mute text-center mt-8">{en.noProduct}</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
