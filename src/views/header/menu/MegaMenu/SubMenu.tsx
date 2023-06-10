"use client";
import React from "react";
import Link from "next/link";
import { DropDown } from "@/types/dropDown";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "@/store/slice/megaMenu.slice";
import { ActiveMenuItemRootState } from "@/types/activeMenuItem";
import { HiChevronRight } from "react-icons/hi";
import en from "@/locales/en";

interface Props {
  subMenuItems: DropDown[] | undefined;
}
const SubMenu: React.FC<Props> = ({ subMenuItems }) => {
  const ArrowDirection = HiChevronRight;
  const dispatch = useDispatch();

  const activeMenuItemText = useSelector(
    (state: ActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemText
  );

  return (
    <div className="flex flex-col px-6 py-5 w-full">
      <div className="flex items-center hover:text-palette-primary transition-color duration-300">
        {!!subMenuItems?.length ? (
          <>
            <Link
              href={`/${activeMenuItemText}`}
              className="block ml-4 mr-4 text-[16px] "
              onClick={() => dispatch(megaMenuActions.closeMegaMenu())}
            >
              {en.seeAllProduct}
            </Link>
            <ArrowDirection style={{ fontSize: "1rem", color: "inherit" }} />
          </>
        ) : null}
      </div>
      <br />
      <div className="relative grow md:columns-[188px] xl:columns-3 xl:max-w-4xl    ">
        {!!subMenuItems?.length && activeMenuItemText ? (
          <>
            {subMenuItems.map((menuTitle, index) => {
              return (
                <div className="py-3" key={`${menuTitle}-${index}`}>
                  <Link
                    href={`/${activeMenuItemText}/${menuTitle.slug?.trim()}`}
                    className="block text-sm ml-6  font-bold px-2 border-l-4 border-palette-primary rounded-sm hover:text-palette-primary transition-color duration-300 capitalize"
                    onClick={() => dispatch(megaMenuActions.closeMegaMenu())}
                  >
                    {`${menuTitle.name}`}
                  </Link>
                  {menuTitle.subtitles.map((subTitle, index) => {
                    return (
                      <Link
                        href={`/${activeMenuItemText}/${menuTitle.slug?.trim()}/${subTitle.trim()}`}
                        key={`${subTitle}-${index}`}
                        className="block py-2 hover:text-palette-primary transition-color duration-200 capitalize"
                        onClick={() =>
                          dispatch(megaMenuActions.closeMegaMenu())
                        }
                      >
                        {`${subTitle}`}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </>
        ) : (
          <p className="text-sm text-palette-mute absolute top-[45%] ltr:left-[30%] rtl:right-[30%]">
            {en.noProduct}
          </p>
        )}
      </div>
    </div>
  );
};

export default SubMenu;
