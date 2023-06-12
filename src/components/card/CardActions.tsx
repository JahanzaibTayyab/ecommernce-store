"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { cartActions } from "@/store/slice/cart.slice";
import { favoriteActions } from "@/store/slice/favorite.slice";
import {
  RiHeartFill,
  RiHeartAddLine,
  RiShareLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { Product } from "@/types/products";
import { FavoriteRootState } from "@/types/favorite";
import en from "@/locales/en";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "next-share";
import { API_ROOT } from "@/config";

interface Props {
  product: Product;
  productsSlug: string;
}

const CardActions: React.FC<Props> = ({ product, productsSlug }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const { theme } = useTheme();

  const favoriteItems = useSelector(
    (state: FavoriteRootState) => state.favorite.items
  );
  const isInFavorite = favoriteItems.some(
    (item) => item.slug.current === product.slug.current
  );
  const FavoriteIcon = isInFavorite ? RiHeartFill : RiHeartAddLine;

  function addToCartHandler() {
    dispatch(cartActions.addItemToCart({ product: product, quantity: 1 }));
    toast.success(en.productAddedToCartMsg);
  }

  function toggleFavoriteHandler() {
    !isInFavorite
      ? dispatch(favoriteActions.addToFavorite(product))
      : dispatch(favoriteActions.removeFromFavorite(product.slug.current));
  }

  return (
    <>
      <div className="w-1/2 md:w-auto md:h-[130px] mt-2 p-2 flex md:flex-col justify-around self-center absolute bottom-2 md:-top-2 md:bottom-auto left-0  md:-left-1 rounded-lg md:rounded-full shadow-lg backdrop-filter backdrop-blur-[8px] bg-palette-card/20  ">
        <div
          className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
          onClick={toggleFavoriteHandler}
        >
          <FavoriteIcon
            style={{
              fontSize: "1.2rem",
              fill: `${isInFavorite ? "#ee384e" : ""}`,
            }}
          />
        </div>
        <div
          className="hover:text-rose-600 transition-colors sm:px-3 md:px-0"
          onClick={() => setShowModal(!showModal)}
        >
          <RiShareLine style={{ fontSize: "1.2rem" }} />
        </div>
        <div
          className="hover:text-rose-600 active:scale-125 transition-all sm:px-3 md:px-0"
          onClick={addToCartHandler}
        >
          <RiShoppingCart2Line
            style={{
              fontSize: "1.2rem",
            }}
          />
        </div>
      </div>
      {showModal && (
        <AlertDialog open={showModal}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Share with Others</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="flex gap-4">
                  <FacebookShareButton
                    url={`${API_ROOT}/${productsSlug}/${product.category[0]}/${product.category[1]}/${product.brand}/${product.slug.current}`}
                  >
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url={`${API_ROOT}/${productsSlug}/${product.category[0]}/${product.category[1]}/${product.brand}/${product.slug.current}`}
                  >
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                  <TelegramShareButton
                    url={`${API_ROOT}/${productsSlug}/${product.category[0]}/${product.category[1]}/${product.brand}/${product.slug.current}`}
                  >
                    <TelegramIcon size={40} round />
                  </TelegramShareButton>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setShowModal(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => setShowModal(false)}>
                <Link href="/">Continue Shopping</Link>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default CardActions;
