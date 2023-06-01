"use client";
import { useTheme } from "next-themes";
import React from "react";
import { IconType } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { settingBoxActions } from "@/store/slice/settingBox.slice";
import { SettingBoxRootState } from "@/types/settingBox";
import en from "@/locales/en";

interface Props {
  theme: string;
  currentTheme?: string;
  Icon: IconType;
}
const ThemeItem: React.FC<Props> = ({ theme, Icon, currentTheme }) => {
  const { setTheme } = useTheme();
  const dispatch = useDispatch();
  const isSettingBoxOpen = useSelector(
    (state: SettingBoxRootState) => state.settingBox.isOpen
  );

  function onThemeClickHandler() {
    setTheme(theme);
    isSettingBoxOpen && dispatch(settingBoxActions.closeSettingBox());
  }

  return (
    <div
      className={`flex items-center justify-start py-1 ${
        currentTheme && currentTheme === theme ? "font-bold" : ""
      }`}
      onClick={onThemeClickHandler}
    >
      <button className="border-none" aria-label="theme-toggle" role="button">
        <Icon
          style={{
            fontSize: "1.3rem",
            filter: "drop-shadow(0px 0px 5px rgb(0 0 0 / 0.3))",
          }}
        />
      </button>
      <h4 className="md:hidden mr-3">{en[`${theme}`]}</h4>
    </div>
  );
};

export default ThemeItem;
