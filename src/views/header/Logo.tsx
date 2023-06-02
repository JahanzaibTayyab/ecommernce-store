import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0"
    >
      <Image
        src="/images/logoShop.png"
        alt="zishop-logo"
        width={120}
        height={25}
        className="cursor-pointer md:mr-3 object-contain"
      />
    </Link>
  );
};

export default Logo;
