"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "@/store/slice/megaMenu.slice";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { DropDown } from "@/types/dropDown";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";
import { ActiveMenuItemRootState } from "@/types/activeMenuItem";
import { category } from "@/types/categories";
import { productsSlug } from "@/utils/contsants";

interface Props {
  onClick?: (
    submenu: DropDown[] | undefined,
    activeItemName: string,
    index: number
  ) => void;
  onMouseOver?: (
    submenu: DropDown[] | undefined,
    index: number,
    activeItemName: string
  ) => void;
  menuItems: Array<category>;
}

const MenuItems: React.FC<Props> = (props) => {
  const { menuItems } = props;
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const ArrowDirection = HiChevronRight;

  function onMenuItemClickHandler(
    productsGroup: DropDown[] | undefined,
    category: string,
    index: number
  ) {
    props.onClick && props.onClick(productsGroup, category, index);
    width >= 768 && dispatch(megaMenuActions.closeMegaMenu());
  }

  const activeMenuItemIndex = useSelector(
    (state: ActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemIndex
  );

  return (
    <ul className="rounded-lg">
      {menuItems.map((item, index) => {
        return (
          <li
            className="py-3 md:py-3 transition-color duration-300 hover:text-palette-primary font-bold"
            key={item._id}
          >
            {width <= 768 ? (
              <div
                className={`flex items-center mt-3 px-5  cursor-pointer text-sm ${
                  index === activeMenuItemIndex ? "md:text-palette-primary" : ""
                }`}
                onClick={() =>
                  onMenuItemClickHandler(item.productsGroup, item.slug, index)
                }
                onMouseOver={() =>
                  props.onMouseOver?.(item.productsGroup, index, item.slug)
                }
              >
                {/* <item.icon className="w-6 h-6 " /> */}
                <div
                  className={`mx-4 grow ${
                    !item.productsGroup.length
                      ? "text-gray-400 font-normal capitalize"
                      : ""
                  }`}
                >
                  {item.name}
                </div>
                {item.productsGroup ? (
                  <ArrowDirection style={{ fontSize: "1rem" }} />
                ) : null}
              </div>
            ) : (
              <Link href={`/${productsSlug}/${item.slug.trim()}`}>
                <div
                  className={`flex items-center mt-3 px-5  cursor-pointer text-sm ${
                    index === activeMenuItemIndex
                      ? "md:text-palette-primary"
                      : ""
                  }`}
                  onClick={() =>
                    onMenuItemClickHandler(item.productsGroup, item.slug, index)
                  }
                  onMouseOver={() =>
                    props.onMouseOver?.(item.productsGroup, index, item.slug)
                  }
                >
                  {/* <item.icon className="w-6 h-6 " /> */}
                  <div
                    className={`mx-4 grow ${
                      !item.productsGroup.length
                        ? "text-gray-400 font-normal capitalize"
                        : ""
                    }`}
                  >
                    {item.name}
                  </div>
                  {!!item.productsGroup.length ? (
                    <ArrowDirection style={{ fontSize: "1rem" }} />
                  ) : null}
                </div>
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItems;
