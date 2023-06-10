import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductList from "@/components/productList/ProductList";

const getCategoryProductList = async (context: any) => {
  const subCategory = context?.subCategory;
  const category = context?.category;
  const productQuery = `*[_type=='product'&& category[0]=="${category}" && category[1]=="${subCategory}"]`;
  try {
    return await sanityClient.fetch(productQuery);
  } catch (err) {
    console.log(err);
  }
};

type subCategoryParams = {
  params: {
    category: string;
    subCategory: string;
  };
};

const ProductSubCategoryList = async ({ params }: subCategoryParams) => {
  const productsByCategory: Array<Product> = await getCategoryProductList(
    params
  );
  return (
    <div>
      <ProductList productList={productsByCategory} />
    </div>
  );
};

export default ProductSubCategoryList;
