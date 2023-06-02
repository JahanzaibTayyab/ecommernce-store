import Image from "next/image";
import dynamic from "next/dynamic";
import Benefits from "@/views/Benefits";
import Banner from "@/views/Banner";
const Category = dynamic(() => import("@/views/category"));
const Banners = dynamic(() => import("@/views/OfferBanners"), { ssr: false });

export default function Home() {
  return (
    <>
      <Banner />
      <Benefits />
      <Category />
      <Banners />
    </>
  );
}
