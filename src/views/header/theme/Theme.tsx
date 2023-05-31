"use client";
import { useTheme } from "next-themes";
import { MdOutlineLightMode } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import ThemeItem from "./ThemeItem";

const Theme = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderThemeChanger = () => {
    if (currentTheme === "dark") {
      return <ThemeItem theme="light" Icon={MdOutlineLightMode} />;
    } else {
      return <ThemeItem theme="dark" Icon={BiMoon} />;
    }
  };

  return (
    <div className="md:ml-1 p-1">
      <div className="md:hidden">
        <h3>Theme: </h3>
        <div className="mt-2 ml-1 z-10">
          <ThemeItem
            theme="light"
            Icon={MdOutlineLightMode}
            currentTheme={currentTheme}
          />
          <ThemeItem theme="dark" Icon={BiMoon} currentTheme={currentTheme} />
        </div>
      </div>
      <div className="hidden md:block">{renderThemeChanger()}</div>
    </div>
  );
};

export default Theme;
