import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductList from "@/components/productList/ProductList";

const getOffersList = async () => {
  try {
    return await sanityClient.fetch(
      `*[_type == 'product' && isOffer == true] | order(name asc)`
    );
  } catch (err) {
    console.log(err);
  }
};

const Offerers = async () => {
  const products: Array<Product> = await getOffersList();

  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default Offerers;
