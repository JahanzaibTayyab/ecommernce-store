"use client";
import en from "@/locales/en";
interface Props {
  value: number;
  type: string;
  isDanger: boolean;
}

const DateTimeDisplay: React.FC<Props> = ({ value, type, isDanger }) => {
  const dateTime = new Intl.NumberFormat("en-EN").format(value);

  return (
    <div
      className={`flex flex-col items-center mx-[2px] sm:mx-3 py-2 text-[11px] sm:text-sm md:text-base w-14 sm:w-20 backdrop-filter backdrop-blur-[8px] bg-palette-fill/50 shadow-lg rounded-lg ${
        isDanger ? "text-rose-600" : ""
      }`}
    >
      <p>{dateTime}</p>
      <span>{en[`${type}`]}</span>
    </div>
  );
};

export default DateTimeDisplay;
