"use client";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { megaMenuActions } from "@/store/slice/megaMenu.slice";
import { Transition } from "react-transition-group";
import { GoGrabber } from "react-icons/go";
import MenusContainer from "./MenusContainer";
import { MegaMenuRootState } from "@/types/megaMenu";

const MegaMenu = () => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const showMegaMenuHandler = () => {
    dispatch(megaMenuActions.openMegaMenu());
  };
  const closeMegaMenuHandler = () => {
    dispatch(megaMenuActions.closeMegaMenu());
  };

  const isMegaMenuOpen = useSelector(
    (state: MegaMenuRootState) => state.megaMenu.isMegaMenuOpen
  );

  return (
    <div
      className="flex items-center"
      onMouseOver={showMegaMenuHandler}
      onMouseOut={closeMegaMenuHandler}
    >
      <div className="flex items-center font-bold cursor-pointer">
        <GoGrabber style={{ fontSize: "2rem" }} />
        <h3 className="ltr:ml-1 rtl:mr-1">Category of Goods</h3>
      </div>

      <Transition
        nodeRef={nodeRef}
        in={isMegaMenuOpen!}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => {
          return (
            <div ref={nodeRef} className="z-[100]">
              <div
                className={`fixed top-[8.2rem] inset-0 bg-gray-600/60
                ${
                  state === "entering"
                    ? "animate-fadeEntering"
                    : state === "entered"
                    ? "opacity-100"
                    : "animate-fadeExit"
                }
                `}
                onClick={closeMegaMenuHandler}
              />
              <div className="absolute top-full left-0 right-0 bg-palette-card z-[110] shadow-md rounded-br-lg rounded-bl-lg">
                <MenusContainer />
              </div>
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default MegaMenu;
