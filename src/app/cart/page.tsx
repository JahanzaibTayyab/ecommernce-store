"use client";
import CartList from "@/components/cart/CartList";
import Breadcrumb from "@/components/Breadcrumb";
import OrderSummaryBox from "@/components/cart/OrderSummaryBox";

const cart = () => {
  return (
    <div>
      <Breadcrumb />
      <div className="flex justify-center flex-col md:flex-row items-start relative max-w-[2100px] mx-auto">
        <CartList />
        <OrderSummaryBox />
      </div>
    </div>
  );
};

export default cart;
