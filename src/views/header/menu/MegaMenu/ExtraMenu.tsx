"use client";
import Link from "next/link";
import { extraMenu } from "@/utils/mock/menuItems";
import en from "@/locales/en";

const ExtraMenu = () => {
  return (
    <div className="flex items-center border-l-2  border-gray-300 grow ml-2">
      {extraMenu.map((menuItem) => {
        return (
          <div
            className="flex items-center text-base/90 mx-2"
            key={menuItem.title}
          >
            <menuItem.icon />
            <Link href={menuItem.href}>{en[`${menuItem.title}`]}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
