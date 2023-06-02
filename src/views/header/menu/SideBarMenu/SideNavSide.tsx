"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import { HiOutlineArrowSmLeft, HiChevronRight } from "react-icons/hi";
import DropDown from "@/components/DropDown";
import { useDispatch, useSelector } from "react-redux";
import { sideNavBarActions } from "@/store/slice/sideNavBar.slice";
import { SideNavBarRootState } from "@/types/sidebar";
import { ActiveMenuItemRootState } from "@/types/activeMenuItem";
import en from "@/locales/en";

const SideNavSide = () => {
  const dispatch = useDispatch();

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

  const BackArrow = HiOutlineArrowSmLeft;

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
                className={`max-w-[380px] w-[90%] h-screen pb-4 fixed top-0 shadow-md z-[1010] bg-palette-card origin-left overflow-auto md:hidden
                 left-0 
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
                  <h3 className="ml-2 py-1">{en.mainMenu}</h3>
                </div>

                <hr className="mb-6" />

                <div className="pr-6 pb-6 mb-3 border-b-2 border-slate-400-600">
                  <Link
                    href={`/${activeMenuItemText}`}
                    className="flex items-center justify-between"
                  >
                    <div
                      className="font-bold ltr:ml-6 rtl:mr-6"
                      onClick={closeNavbar}
                    >
                      {en.seeAllProduct}
                    </div>
                    <HiChevronRight style={{ fontSize: "1.5rem" }} />
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
