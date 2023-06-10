import { ProductDetails, Slug } from "./products";

export type CartProduct = {
  _id: string;
  image: any;
  name: string;
  slug: Slug;
  price: number;
  discount?: number;
  brand: string;
  category: Record<string, unknown>;
  starRating: number;
  isOffer?: boolean;
  details?: ProductDetails[];
  registerDate?: string;
  quantity: number;
  totalPrice: number;
};

export type CartUI = {
  cartBoxIsVisible: boolean;
};

export type Cart = {
  items: ICartProduct[];
  totalQuantity: number;
  totalAmount: number;
};

export type CartUiRootState = {
  cartUi: CartUI;
};

export type CartRootState = {
  cart: Cart;
};
