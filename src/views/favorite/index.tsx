"use client";
import React from "react";
import { useSelector } from "react-redux";
import { FavoriteRootState } from "@/types/favorite";
import FavoriteItem from "./FavoriteItem";
import en from "@/locales/en";
const Favorites = () => {
  const favoriteItems = useSelector(
    (state: FavoriteRootState) => state.favorite.items
  );
  return (
    <div className="w-full xl:max-w-[2100px] mx-auto">
      {favoriteItems.length ? (
        <div className="grid gap-4 grid-cols-6 lg:grid-cols-12">
          {favoriteItems.map((favoriteItem) => (
            <FavoriteItem
              key={favoriteItem.slug.current}
              product={favoriteItem}
            />
          ))}
        </div>
      ) : (
        <p>{en.thereAreNoFavorites}</p>
      )}
    </div>
  );
};

export default Favorites;
