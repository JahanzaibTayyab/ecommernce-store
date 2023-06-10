"use client";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "@/store/slice/cartUI.slice";
import { CartRootState } from "@/types/cart";
import { gbpCurrencyFormat } from "@/utils/helper";
import CartItem from "./CartItem";
import { IUserInfoRootState } from "@/types/user";
import en from "@/locales/en";

const CartBox = () => {
  const dispatch = useDispatch();

  const cartItemQuantity = useSelector(
    (state: CartRootState) => state.cart.totalQuantity
  );

  const cartTotalAmount = useSelector(
    (state: CartRootState) => state.cart.totalAmount
  );

  const cartItems = useSelector((state: CartRootState) => state.cart.items);

  const userInfo = useSelector(
    (state: IUserInfoRootState) => state.userInfo.userInformation
  );

  function onCloseCartBoxHandler() {
    dispatch(cartUiActions.toggleCartBox(false));
  }

  return (
    <div className="hidden lg:flex flex-col absolute top-full right-0 min-h-[15rem] max-h-[25rem] w-[20rem] bg-palette-card z-[110] shadow-md rounded-lg overflow-auto">
      <div className="relative">
        <header className="flex items-center justify-between sticky top-0 left-0 right-0 text-sm font-normal z-10 bg-palette-card p-2">
          <span>
            {cartItemQuantity} {en.product}
          </span>
          <span onClick={onCloseCartBoxHandler}>
            <Link href="/cart" className="text-cyan-500">
              {en.seeCart}
            </Link>
          </span>
        </header>
        <hr className="mt-2" />
        <div>
          <>
            {cartItems.length ? (
              cartItems.map((item) => {
                return <CartItem key={item.slug.current} product={item} />;
              })
            ) : (
              <p className="mt-20 text-center text-palette-mute font-normal">
                {en.cartIsEmpty}
              </p>
            )}
          </>
        </div>
        {cartItems.length ? (
          <div className="flex items-center sticky bottom-0 left-0 right-0 bg-palette-card font-normal py-3 px-4">
            <div className="flex flex-col flex-grow mr-2">
              <p className="text-sm">{en.payableAmount}</p>
              <p className="self-end text-sm font-bold">
                {`Rs ${gbpCurrencyFormat(cartTotalAmount)}`}
              </p>
            </div>
            {!userInfo ? (
              <div onClick={onCloseCartBoxHandler}>
                <Link
                  href={"/login"}
                  className="py-2 px-3 bg-palette-primary text-[12px] text-palette-side rounded-lg"
                >
                  {en.loginAndOrder}
                </Link>
              </div>
            ) : (
              <div onClick={onCloseCartBoxHandler}>
                <Link
                  href={"/cart"}
                  className="py-2 px-10 bg-palette-primary text-[12px] text-palette-side rounded-lg"
                >
                  {en.order}
                </Link>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartBox;
