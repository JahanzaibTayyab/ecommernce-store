import Image from "next/image";
import dynamic from "next/dynamic";
import Benefits from "@/views/Benefits";
import Banner from "@/views/Banner";
import Offers from "@/views/Offers";
const Category = dynamic(() => import("@/views/category"));
const Brands = dynamic(() => import("@/views/brands"));
const Banners = dynamic(() => import("@/views/OfferBanners"));

export default function Home() {
  return (
    <>
      <Banner />
      <Benefits />
      {/* @ts-expect-error Server Component */}
      <Offers />
      <Category />
      <Banners />
      <Brands />
    </>
  );
}
