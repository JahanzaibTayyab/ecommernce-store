"use client";
import React from "react";
import { useSelector } from "react-redux";
import { CartRootState, CartProduct } from "@/types/cart";
import CartItem from "./CartItem";

const CartList = () => {
  const cartItems = useSelector((state: CartRootState) => state.cart.items);
  return (
    <div>
      <div className="w-full xl:max-w-[2100px] mx-auto">
        {cartItems.length
          ? cartItems.map((cartItem: CartProduct) => {
              return (
                <CartItem key={cartItem.slug.current} product={cartItem} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default CartList;
