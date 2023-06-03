"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useCallback, useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { NextArrow, PrevArrow } from "./Arrows";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { Banner } from "@/types/banner";

const Banner = () => {
  const [banners, setBanner] = useState<Banner[]>();

  const getBannersData = useCallback(async () => {
    const bannerResponse: any = await fetch("api/getBanners");
    const banners = await bannerResponse.json();
    setBanner(banners);
  }, []);

  useEffect(() => {
    getBannersData();
  }, [getBannersData]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow to="next" />,
    prevArrow: <PrevArrow to="prev" />,
    appendDots: (dots: string) => (
      <div className="bg-transparent !pb-[40px]">
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="relative">
      {!!banners?.length ? (
        <>
          <Slider {...settings}>
            {banners?.map((slideContent) => {
              return <Slide key={slideContent._id} {...slideContent} />;
            })}
          </Slider>
          <>
            <div className="absolute top-1/2 right-4 md:right-3 lg:right-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
              <HiOutlineChevronRight />
            </div>
            <div className="absolute top-1/2 left-4  md:left-3 lg:left-8 shadow-lg rounded-full bg-palette-card/80 p-1 drop-shadow-lg text-[0.8rem] md:text-[1.8rem]">
              <HiOutlineChevronLeft />
            </div>
          </>
        </>
      ) : (
        <div className="flex items-center space-x-4 bg-slate-300 justify-center py-24 ">
          <div className="space-y-2">
            <Skeleton className="h-8 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Banner;
