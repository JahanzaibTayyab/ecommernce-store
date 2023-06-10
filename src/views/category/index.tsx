import React from "react";
import { categorySmContent } from "@/utils/mock/category-sm";
import CategorySmBox from "./CategorySmBox";
import { categoryLgContent } from "@/utils/mock/category-lg";
import CategoryLgBox from "./CategoryLgBox";
import SectionTitle from "@/components/SectionTitle";
import { productsSlug } from "@/utils/contsants";

const Category = () => {
  return (
    <div className="flex flex-col items-center my-4 md:my-8">
      <SectionTitle title={"CategoryOfGoods"} />
      <div className="flex flex-wrap justify-around items-center lg:hidden">
        {categorySmContent.map((categoryItem) => {
          return (
            <CategorySmBox
              bgc={categoryItem.bgc}
              imgSrc={categoryItem.imgSrc}
              categoryTitle={categoryItem.categoryTitle}
              href={`${productsSlug}/${categoryItem.href}`}
              key={categoryItem.categoryTitle}
            />
          );
        })}
      </div>
      <div className="hidden lg:grid  gap-4 grid-rows-9 grid-cols-2 md:grid-cols-9 w-full xl:max-w-[2100px] mx-auto">
        {categoryLgContent.map(
          ({
            name,
            title,
            description,
            styles,
            href,
            imgSrc,
            imgWidth,
            imgHeight,
          }) => {
            return (
              <CategoryLgBox
                key={name}
                name={name}
                title={title}
                description={description}
                styles={styles}
                href={`${productsSlug}/${href}`}
                imgSrc={imgSrc}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
              />
            );
          }
        )}
      </div>

    </div>
  );
};

export default Category;
