"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeMenuItemActions } from "@/store/slice/activeMenuItem.slice";
import MenuItems from "@/components/MenuItems/MenuItems";
import { DropDown } from "@/types/dropDown";
import SubMenu from "./SubMenu";
import { productsSlug } from "@/utils/contsants";

const MenusContainer = () => {
  const [subMenuItems, setSubMenuItems] = useState<DropDown[]>();
  const dispatch = useDispatch();

  const menuItems = useSelector((state: any) => state.categories.data);

  const activeItem = (
    submenuList: DropDown[] | undefined,
    activeItemIndex: number,
    activeItemName: string
  ) => {
    setSubMenuItems(submenuList);
    dispatch(activeMenuItemActions.setActiveMenuItemIndex(activeItemIndex));
    dispatch(
      activeMenuItemActions.setActiveMenuItemText(
        `${productsSlug}/${activeItemName}`
      )
    );
  };

  useEffect(() => {
    setSubMenuItems(menuItems[0]?.productsGroup);
    return () => {
      dispatch(activeMenuItemActions.setActiveMenuItemIndex(0));
      dispatch(
        activeMenuItemActions.setActiveMenuItemText(
          `${productsSlug}/stationery`
        )
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" flex">
      <nav className="md:w-80 md:py-4 border-r-2  border-slate-300">
        <MenuItems onMouseOver={activeItem} menuItems={menuItems} />
      </nav>
      <SubMenu subMenuItems={subMenuItems} />
    </div>
  );
};

export default MenusContainer;
