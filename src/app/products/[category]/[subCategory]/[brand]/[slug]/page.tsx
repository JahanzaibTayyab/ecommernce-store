import { sanityClient } from "@/lib/sanityClient";
import { Product } from "@/types/products";
import ProductDetails from "@/components/productDetails";

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

const getSubCategoryBrandsProduct = async (slug: string) => {
  const productQuery = `*[_type=='product' && slug.current=="${slug}"][0]`;
  try {
    return await sanityClient.fetch(productQuery);
  } catch (err) {
    console.log(err);
  }
};

type productDetailParams = {
  params: {
    category: string;
    subCategory: string;
    brand: string;
    slug: string;
  };
};

const ProductDetailPage = async ({ params }: productDetailParams) => {
  const products: Array<Product> = await getSubCategoryBrandsProductList(
    params
  );
  const product: Product = await getSubCategoryBrandsProduct(params.slug);
  return (
    <div>
      <ProductDetails product={product} products={products} />
    </div>
  );
};

export default ProductDetailPage;
