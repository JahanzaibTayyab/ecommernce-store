"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { settingBoxActions } from "@/store/slice/settingBox.slice";
import { MdLanguage } from "react-icons/md";
import LanguageItem from "./LanguageItem";

const Language = () => {
  const dispatch = useDispatch();
  const [openLang, setOpenLang] = useState(false);

  const onCloseLangBox = (isOpen: boolean) => {
    setOpenLang(isOpen);
  };

  return (
    <div className="relative  mr-2 pr-2">
      <div className="md:hidden">
        <h3>Language:</h3>
        <div className={`ml-2  mt-2 z-10`}>
          <LanguageItem
            language="en"
            onCloseBox={() => dispatch(settingBoxActions.closeSettingBox())}
          />
        </div>
      </div>

      <div
        className="hidden md:flex items-center cursor-pointer"
        onClick={() => setOpenLang((prevState) => !prevState)}
      >
        <p className="mx-[0.3rem] text-sm font-bold font-english">En</p>
        <MdLanguage style={{ fontSize: "1.3rem" }} />
      </div>
      {openLang ? (
        <>
          <div
            className="fixed inset-0 -z-1"
            onClick={() => setOpenLang(false)}
          ></div>
          <div
            className={`absolute top-6 right-0  bg-palette-card py-3 px-6 shadow-md rounded-md z-10`}
          >
            <LanguageItem language="en" onCloseBox={onCloseLangBox} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Language;
