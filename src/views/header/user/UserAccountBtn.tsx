"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUser } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { Transition } from "react-transition-group";
import UserAccountBox from "./UserAccountBox";

const UserAccountBtn = () => {
  const router = useRouter();
  const [isUserBoxOpen, setIsUserBoxOpen] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);

  function onClose() {
    setIsUserBoxOpen((prev) => prev && false);
  }

  function onIconClickHandler() {
    setIsUserBoxOpen((prev) => !prev);
  }

  return (
    <div className="relative mr-2 z-[100]">
      <div
        className="flex items-center p-2 cursor-pointer"
        onClick={onIconClickHandler}
      >
        <AiOutlineUser style={{ fontSize: "1.5rem" }} />
        <HiChevronDown />
      </div>
      <Transition
        nodeRef={nodeRef}
        in={isUserBoxOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state: any) => {
          return (
            <>
              <div className="fixed inset-0" onClick={onClose}></div>
              <div
                ref={nodeRef}
                className="z-[100] absolute top-full right-0  w-[10rem] p-4 bg-palette-card rounded-lg shadow-lg"
              >
                <UserAccountBox onClose={onClose} />
              </div>
            </>
          );
        }}
      </Transition>
    </div>
  );
};

export default UserAccountBtn;
