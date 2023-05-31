"use client";
import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import {
  HiOutlineArrowSmRight,
  HiOutlineArrowSmLeft,
  HiChevronRight,
  HiChevronLeft,
} from "react-icons/hi";
import DropDown from "@/UI/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "@/store/slice/sideNavBar.slice";
import { SideNavBarRootState } from "@/types/sidebar";
import en from "@/locales/en";

import Link from "next/link";
import { ActiveMenuItemRootState } from "@/types/activeMenuItem";

const SideNavSide = () => {
  const dispatch = useDispatch();
  const locale = "en";

  const dropDownList = useSelector(
    (state: SideNavBarRootState) => state.sideNavBar.dropDownList
  );

  const isSidebarOpen = useSelector(
    (state: SideNavBarRootState) => state.sideNavBar.isSidebarOpen
  );

  const activeMenuItemText = useSelector(
    (state: ActiveMenuItemRootState) => state.activeMenuItem.activeMenuItemText
  );

  const closeSidebar = () => {
    dispatch(sideNavBarActions.closeSidebar());
  };

  const closeNavbar = () => {
    dispatch(sideNavBarActions.closeNavbar());
  };

  const nodeRef = useRef<HTMLDivElement>(null);

  const BackArrow =
    locale === "en" ? HiOutlineArrowSmLeft : HiOutlineArrowSmRight;

  return (
    <>
      {dropDownList.length ? (
        <Transition
          nodeRef={nodeRef}
          in={isSidebarOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => {
            return (
              <div
                ref={nodeRef}
                className={`max-w-[380px] w-[90%] h-screen pb-4 fixed top-0 shadow-md z-[1010]   bg-palette-card origin-left overflow-auto md:hidden
                ${locale == "en" ? "left-0" : "right-0"} 
                
                ${
                  state === "entering"
                    ? "animate-sidenavLTREntering"
                    : state === "entered"
                    ? "translate-x-0"
                    : "animate-sidenavLTRExit"
                }
                `}
              >
                <div
                  className="flex items-center pt-4 pb-3 px-6 font-bold text-lg cursor-pointer"
                  onClick={closeSidebar}
                >
                  <BackArrow style={{ fontSize: "1.5rem" }} />
                  <h3 className="ml-2  py-1">{en.mainMenu}</h3>
                </div>

                <hr className="mb-6" />

                <div className="pr-6  pb-6 mb-3 border-b-2 border-slate-400-600">
                  <Link href={`/${activeMenuItemText}`}>
                    <a className="flex items-center justify-between">
                      <div className="font-bold ml-6" onClick={closeNavbar}>
                        {en.seeAllProduct}
                      </div>
                      {locale === "en" ? (
                        <HiChevronRight style={{ fontSize: "1.5rem" }} />
                      ) : (
                        <HiChevronLeft style={{ fontSize: "1.5rem" }} />
                      )}
                    </a>
                  </Link>
                </div>
                {dropDownList.map((item) => {
                  return (
                    <div key={item.title}>
                      <DropDown dropDown={item} />
                    </div>
                  );
                })}
              </div>
            );
          }}
        </Transition>
      ) : null}
    </>
  );
};

SideNavSide.displayName = "SideNavSide";
export default SideNavSide;
