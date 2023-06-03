"use client";
import en from "@/locales/en";

const ExpiredNotice = () => {
  return (
    <div>
      <p className="text-md text-palette-mute">{en.expireDiscount}</p>
    </div>
  );
};

export default ExpiredNotice;
