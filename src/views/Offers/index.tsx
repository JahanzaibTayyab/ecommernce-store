import CarouselBox from "@/components/CarouselBox/CarouselBox";
import { Product } from "@/types/products";
import CarouselBoxCard from "@/components/CarouselBox/CarouselBoxCard";
import { sanityClient } from "@/lib/sanityClient";
import offerBg from "/public/images/carouselBox-bg/offersbg.webp";

const getOffersList = async () => {
  const res = await sanityClient.fetch(
    `*[_type == 'product' && isOffer == true] | order(name asc)`
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return await res;
};

const Offers = async () => {
  const OfferProducts = await getOffersList();
  return (
    <div className="md:mt-10 w-full xl:max-w-[2100px] mx-auto">
      Offers Data
      <CarouselBox
        title="Offers"
        className="bg-offersBG"
        href="/"
        style={{ backgroundImage: `url(${offerBg.src})` }}
      >
        {OfferProducts.slice(0, 10).map((product: Product) => {
          return <CarouselBoxCard key={product.name} product={product} />;
        })}
      </CarouselBox>
    </div>
  );
};

export default Offers;
