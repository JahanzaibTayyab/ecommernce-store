"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { extraMenu } from "@/utils/mock/menuItems";
import { sideNavBarActions } from "@/store/slice/sideNavBar.slice";
import { activeMenuItemActions } from "@/store/slice/activeMenuItem.slice";
import { DropDown } from "@/types/dropDown";
import MenuItems from "@/components/MenuItems/MenuItems";
import en from "@/locales/en";
import { productsSlug } from "@/utils/contsants";

const SideNavContent = () => {
  const dispatch = useDispatch();
  const menuItems = useSelector((state: any) => state.categories.data);
  const openNav = (
    sidebarSideContent: DropDown[] = [],
    activeItemName: string,
    activeItemIndex: number
  ) => {
    dispatch(sideNavBarActions.setSidebarEntries(sidebarSideContent));
    dispatch(sideNavBarActions.openSidebar());
    dispatch(
      activeMenuItemActions.setActiveMenuItemText(
        `${productsSlug}/${activeItemName}`
      )
    );
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
  };
  return (
    <div className="absolute w-full">
      <div className="flex flex-col mt-3 pt-3 px-5 cursor-pointer">
        {extraMenu.map((menuItem) => {
          return (
            <div
              className="flex items-center py-3 text-palette-mute "
              key={menuItem.title}
            >
              <menuItem.icon />
              <Link href={menuItem.href} className="mx-4">
                {en[`${menuItem.title}`]}
              </Link>
            </div>
          );
        })}
        <hr className="mt-6 mb-4 border-gray-200" />
      </div>
      <h2 className="font-bold text-lg py-3 px-5">{en.CategoryOfGoods}</h2>
      <MenuItems onClick={openNav} menuItems={menuItems} />
    </div>
  );
};

export default SideNavContent;
