import Image from "next/image";
import dynamic from "next/dynamic";
import Benefits from "@/views/Benefits";
import Banner from "@/views/Banner";
const Category = dynamic(() => import("@/views/category"));

export default function Home() {
  return (
    <div>
      <Banner />
      <Benefits />
      <Category />
    </div>
  );
}
