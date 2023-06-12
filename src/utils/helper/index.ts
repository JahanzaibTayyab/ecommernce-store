import { Product } from "@/types/products";
import confetti from "canvas-confetti";

export const calculateDiscountPercentage = (
  price: number,
  discountPercentage: number
) => {
  return price - price * (discountPercentage * 0.01);
};

// export const changeNumbersFormatEnToFa = (number: number | string) =>
//   number.toString().replace(/\d/g, (index) => "۰۱۲۳۴۵۶۷۸۹"[index]);

export const irrCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("fa-IR").format(price) : null;
};

export const gbpCurrencyFormat = (price: number | undefined) => {
  return price ? new Intl.NumberFormat("en-IN").format(price) : null;
};

export const getError = (err: any) =>
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;

export const sortByExpensive = (
  product1: Product,
  product2: Product
): number => {
  return product2.price - product1.price;
};

export const sortByCheapest = (
  product1: Product,
  product2: Product
): number => {
  return product1.price - product2.price;
};

export const sortByPoPularity = (
  product1: Product,
  product2: Product
): number => {
  return product2.starRating - product1.starRating;
};

export function getTimeStamp(date: string) {
  const creationProductDate = new Date(date);
  return creationProductDate.getTime();
}

export const sortByTimeStamp = (
  product1: Product,
  product2: Product
): number => {
  if (product2?.timeStamp && product1?.timeStamp) {
    return product2?.timeStamp - product1?.timeStamp;
  }
  return 0;
};

export const newestProductsFn = (products: Product[]) => {
  const productsWithTimeStamp = products.map((product) => {
    return {
      ...product,
      timeStamp: getTimeStamp(product.registerDate!),
    };
  });
  return productsWithTimeStamp.sort(sortByTimeStamp);
};

export const runFireworks = () => {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval: any = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
