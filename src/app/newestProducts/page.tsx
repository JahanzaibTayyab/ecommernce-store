import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductList from "@/components/productList/ProductList";

const getNewestProductList = async () => {
  try {
    return await sanityClient.fetch(`*[_type == 'product'] | order(name asc)`);
  } catch (err) {
    console.log(err);
  }
};
const newestProducts = async () => {
  const productsList: Array<Product> = await getNewestProductList();
  return (
    <div className="flex flex-wrap">
      {productsList.length ? <ProductList productList={productsList} /> : <></>}
    </div>
  );
};
export default newestProducts;
