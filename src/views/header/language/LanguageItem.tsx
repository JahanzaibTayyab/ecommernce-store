"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  language: string;
  onCloseBox: (isLangOpen: boolean) => void;
}
const LanguageItem: React.FC<Props> = ({ language, onCloseBox }) => {
  const [lang, setLang] = useState("");

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLang(e.currentTarget.id);
  }

  return (
    <Link
      href={`#`}
      locale={language}
      className="whitespace-nowrap flex justify-between items-center py-1 md:py-2"
    >
      <div className="flex items-center" onClick={() => onCloseBox(false)}>
        <input
          type="radio"
          id={language}
          name="language"
          value={lang}
          className="block accent-rose-600"
          checked={true}
          onChange={onChangeHandler}
        />
        <label
          htmlFor={language}
          className={`font-farsi mx-3 grow ${"font-bold"}`}
        >
          English-En
        </label>
      </div>
    </Link>
  );
};

export default LanguageItem;
