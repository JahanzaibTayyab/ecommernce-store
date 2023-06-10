"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cart.slice";
import { Product } from "@/types/products";
import ProductPrice from "../ProductPrice";
import toast from "react-hot-toast";
import en from "@/locales/en";

interface Props {
  product: Product;
}
const CallToAction: React.FC<Props> = ({ product }) => {
  const { price, discount } = product;
  const [counter, setCounter] = useState(1);
  const { theme } = useTheme();

  useEffect(() => {
    return () => {
      setCounter(1);
    };
  }, [product]);

  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        product: product,
        quantity: counter,
      })
    );
    toast.success(en.productAddedToCartMsg);
  }

  function increment() {
    if (counter < 10) {
      setCounter((prev) => prev + 1);
    }
  }
  function decrement() {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  }

  function onInputNumberChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= 10) {
      setCounter(+e.currentTarget.value);
    }
  }

  return (
    <div className="flex flex-col items-center flex-grow sticky top-10 md:top-36 max-w-[350px] mt-8 ml-auto px-6 py-4 sm:p-4 xl:p-6 border-2 shadow-lg">
      <div className="flex flex-col w-full ">
        <p className="text-lg">{en.price}</p>
        <ProductPrice price={price} discount={discount} isLargeSize={true} />
      </div>
      <div className="flex items-center justify-between mt-6 cursor-pointer">
        <div className="p-2" onClick={increment}>
          <HiOutlinePlusSm style={{ fontSize: "1.5rem" }} />
        </div>
        <input
          className="inline-block w-[70px] pl-7 py-2 mx-1 sm:mx-4 border-[1px] border-gray-400"
          type="number"
          min={1}
          max={10}
          value={counter}
          onChange={onInputNumberChangeHandler}
        />
        <div onClick={decrement} className="p-2">
          <HiMinusSm style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
      <br />
      <button
        className="border-none bg-palette-primary/90 hover:bg-palette-primary/100 transition-colors duration-200 shadow-lg px-3 lg:px-8 py-4 text-palette-side flex items-center rounded-lg cursor-pointer  text-[12px] sm:text-base"
        onClick={addToCartHandler}
      >
        <BsCartPlus style={{ fontSize: "1.2rem", margin: "0 0.4rem" }} />
        {en.addToCart}
      </button>
    </div>
  );
};

export default CallToAction;
