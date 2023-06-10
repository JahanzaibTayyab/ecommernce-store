import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductList from "@/components/productList/ProductList";

const getProductList = async () => {
  try {
    return await sanityClient.fetch(`*[_type == 'product']`);
  } catch (err) {
    console.log(err);
  }
};

const Products = async () => {
  const products: Array<Product> = await getProductList();
  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default Products;
