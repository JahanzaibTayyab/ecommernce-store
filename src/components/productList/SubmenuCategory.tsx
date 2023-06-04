"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import en from "@/locales/en";

const SubmenuCategory = () => {
  const router = useRouter();
  const menuItems = useSelector((state: any) => state.categories.data);

  //const category = router.query.category;
  const subCategories: Array<any> = [];

  // const subCategories = selectedCategory[0]?.productsGroup?.map((item) => ({
  //   title: item.title,
  //   icon: item.icon,
  // }));

  const onClickHandler = (subCategory: string) => {
    // if (selectedCategory[0].category) {
    //   router.push(`/${selectedCategory[0].category}/${subCategory}`);
    // }
  };

  return subCategories.length ? (
    <div className="flex md:items-center flex-col mb-6">
      <h3 className="text-center md:text-2xl mb-3 md:mb-6">{en.categories}</h3>
      <div className="flex justify-center flex-wrap">
        {subCategories?.map((subCategory) => (
          <div
            className="flex flex-col items-center py-2 md:py-4 px-2 sm:px-3 md:px-6 bg-palette-card shadow-lg rounded-lg mx-1 my-1 md:mx-3 w-[5rem] sm:w-auto flex-grow cursor-pointer"
            key={subCategory.title}
            onClick={() => onClickHandler(subCategory.title)}
          >
            <h4 className="text-center text-[12px] md:text-base md:pt-3">
              {en[subCategory.title]}
            </h4>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default SubmenuCategory;
