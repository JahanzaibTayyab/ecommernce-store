import { calculateDiscountPercentage, gbpCurrencyFormat } from "@/utils/helper";

interface Props {
  price: number;
  discount?: number;
  isLargeSize?: boolean;
  isInSlider?: boolean;
}
const ProductPrice: React.FC<Props> = ({
  price,
  discount,
  isLargeSize = false,
  isInSlider,
}) => {
  const locale = "en";
  const discountPrice = discount
    ? calculateDiscountPercentage(price, discount)
    : 0;

  //style base on component position
  const textMainPriceSize = isLargeSize
    ? "text-xl md:text-3xl"
    : "text-md md:text-lg";
  const textDiscountPriceSize = isLargeSize
    ? "text-sm md:text-md"
    : "text-[12px] md:text-base";

  const flexDirection = isInSlider || locale === "en" ? "row" : "row-reverse";

  return (
    <div>
      <div className={`flex self-start text-left mt-2`}>
        {discount ? (
          <div className="flex items-end flex-wrap" style={{ flexDirection }}>
            <span className="flex flex-col">
              <del
                className={`text-rose-800 dark:text-rose-200 md:text-sm ${textDiscountPriceSize}`}
              >
                <sup className="mr-1">Rs</sup>
                {gbpCurrencyFormat(price)}
              </del>
              <ins
                className={`font-bold self-end no-underline mt-1 ${textMainPriceSize}`}
              >
                <sup className="mr-1">Rs</sup>
                {gbpCurrencyFormat(discountPrice)}
              </ins>
            </span>
            <span
              className="text-green-800 dark:text-green-200 ml-1 text-[12px] inline-block"
              style={{ direction: "ltr" }}
            >{`(-%${discount})`}</span>
          </div>
        ) : (
          <div>
            {isInSlider ? <div className="h-[1.4rem]" /> : null}{" "}
            <div
              className={`flex items-center ${textMainPriceSize} font-bold no-underline`}
              style={{ flexDirection }}
            >
              <sup className="mr-1">{locale === "en" ? "Rs" : ""}</sup>
              <span>{gbpCurrencyFormat(price)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPrice;
