import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductList from "@/components/productList/ProductList";

const getCategoryProductList = async (param: string) => {
  try {
    return await sanityClient.fetch(
      `*[_type == 'product' && category[0]=='${param}']`
    );
  } catch (err) {
    console.log(err);
  }
};

type categoryParams = {
  params: {
    category: string;
  };
};

const ProductCategoryList = async ({ params }: categoryParams) => {
  const productsByCategory: Array<Product> = await getCategoryProductList(
    params.category
  );
  return (
    <div>
      <ProductList productList={productsByCategory} />
    </div>
  );
};

export default ProductCategoryList;
