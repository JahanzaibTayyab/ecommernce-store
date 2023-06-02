"use client";
import dynamic from "next/dynamic";
import { useCallback, useEffect } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useDispatch } from "react-redux";
import { categoryActions } from "@/store/slice/categories.slice";

import Menu from "./menu";
import Logo from "./Logo";
import Settings from "./Settings";
import SearchBar from "./SearchBar";
import CartIcon from "../cart/CartIcon";
import Language from "./language/Language";

const UserBox = dynamic(() => import("./user"), {
  ssr: false,
});
const Theme = dynamic(() => import("./theme/Theme"), {
  ssr: false,
});
import { hideLayoutRoutes } from "@/utils/contsants";

const Header = () => {
  const dispatch = useDispatch();
  let segment = useSelectedLayoutSegment();
  const isLayoutNeeded = !hideLayoutRoutes.includes(segment as string);

  const getCategories = useCallback(async () => {
    const categoryResponse: any = await fetch("api/getCategories");
    const categories = await categoryResponse.json();
    dispatch(categoryActions.setCategories(categories));
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <header
      className={`${
        isLayoutNeeded ? "block" : "hidden"
      } md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]`}
    >
      <div className="flex flex-col md:px-4 mb-2">
        <div className="flex items-center justify-between md:order-2 md:mt-2  relative">
          <Menu />
          <div className="md:hidden">
            <Logo />
          </div>
          <Settings />
          <div className="hidden md:flex md:items-center md:justify-between">
            <Language />
            <Theme />
          </div>
        </div>
        <hr className="md:hidden" />
        <div className="mb-2 mt-4 md:mt-0 flex items-center md:order-1">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="flex-grow">
            <SearchBar />
          </div>
          <div className="ml-2 sm:ml-4 flex items-center justify-between ">
            <UserBox />
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
