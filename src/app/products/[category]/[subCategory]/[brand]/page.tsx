import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductList from "@/components/productList/ProductList";

const getSubCategoryBrandsProductList = async (context: any) => {
  const subCategory = context?.subCategory;
  const category = context?.category;
  const brand = context?.brand;
  const productQuery = `*[_type=='product' && category[0]=="${category}" && category[1]=="${subCategory}" && brand=="${brand}"]`;
  try {
    return await sanityClient.fetch(productQuery);
  } catch (err) {
    console.log(err);
  }
};

type subCategoryBarnsParams = {
  params: {
    category: string;
    subCategory: string;
    brand: string;
  };
};

const ProductSubCategoryBrandList = async ({
  params,
}: subCategoryBarnsParams) => {
  const products: Array<Product> = await getSubCategoryBrandsProductList(
    params
  );

  return (
    <div>
      <ProductList productList={products} />
    </div>
  );
};

export default ProductSubCategoryBrandList;
