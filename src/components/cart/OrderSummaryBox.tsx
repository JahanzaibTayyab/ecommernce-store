"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import getStripePromise from "@/lib/stripe";
import { useSelector } from "react-redux";
import { CartRootState } from "@/types/cart";
import { useSession } from "next-auth/react";
import ProductPrice from "../ProductPrice";
import en from "@/locales/en";

const OrderSummaryBox = () => {
  const { data } = useSession();
  const totalAmount = useSelector(
    (state: CartRootState) => state.cart.totalAmount
  );
  const totalQuantity = useSelector(
    (state: CartRootState) => state.cart.totalQuantity
  );

  const cartItems = useSelector((state: CartRootState) => state.cart.items);

  const handleCheckout = async () => {
    const toastId = toast.loading("trying checkout");
    const stripe = await getStripePromise();

    fetch(`api/stripe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(cartItems),
    })
      .then((response) => response.json())
      .then((response) => {
        toast.dismiss(toastId);
        if (response.success === false || !stripe) {
          toast.error("checkout failed");
        } else {
          toast.loading("Redirecting...");
          stripe.redirectToCheckout({ sessionId: response.id });
        }
      })
      .catch((err) => {
        toast.dismiss(toastId);
        toast.error("checkout failed");
      });
  };

  return (
    <>
      {totalQuantity > 0 ? (
        <div className="flex-grow sticky bottom-0 left-0 right-0 md:top-36 shadow-lg bg-palette-card border-2 rounded-lg py-4 xl:py-12 px-4 xl:px-8 -mx-[1rem] md:mx-4 xl:mx-8 mt-2 w-[100vw] md:w-auto  md:min-w-[300px] md:max-w-[400px]">
          <h3 className="text-md sm:text-lg md:text-xl">{en.orderSummary}</h3>
          <div className="flex flex-col my-1 sm:my-2">
            <div className="flex items-center justify-between md:my-4">
              <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                {en.totalQuantity}
              </p>
              <p className="rtl:ml-1 ltr:mr-1 font-bold">{totalQuantity}</p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between flex-grow md:my-4">
              <p className="text-sm sm:text-base text-palette-mute md:text-palette-base">
                {en.totalAmount}
              </p>
              <ProductPrice price={totalAmount} />
            </div>
          </div>
          {data?.user ? (
            <button
              className="bg-palette-primary md:mt-8 py-3 rounded-lg text-palette-side text-center shadow-lg w-full"
              onClick={handleCheckout}
            >
              {en.order}
            </button>
          ) : (
            <Link
              href="/login"
              className="block bg-palette-primary md:mt-8 py-3 rounded-lg text-palette-side text-center shadow-lg"
            >
              {en.order}
            </Link>
          )}
        </div>
      ) : (
        <p className="text-palette-mute text-lg mx-auto mt-12">
          {en.cartIsEmpty}
        </p>
      )}
    </>
  );
};

export default OrderSummaryBox;
