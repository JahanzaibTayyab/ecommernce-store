"use client";
import FooterColumns from "./footerContent/FooterColumns";
import { useSelectedLayoutSegment } from "next/navigation";
import SocialPart from "./footerContent/SocialPart";
import { hideLayoutRoutes } from "@/utils/contsants";

const Footer = () => {
  let segment = useSelectedLayoutSegment();
  const isLayoutNeeded = !hideLayoutRoutes.includes(segment as string);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className={`${isLayoutNeeded ? "block" : "hidden"} mt-12`}>
      <div className="border-t-[1px] border-slate-500/30">
        <div className="flex flex-wrap py-4 md:py-8 md:px-4 w-full xl:max-w-[2100px] mx-auto">
          <FooterColumns />
          <SocialPart />
        </div>
      </div>
      <div className="border-t-[1px] border-slate-500/30 text-center text-xs md:text-sm py-4">
        <div>
          <p>
            © {currentYear} OnlineShop. All rights reserved - Designed and
            Developed By&nbsp;
            <a
              href="https://www.jahanzaibtayyab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold px-2 text-[#0d4c76]"
            >
              Jahanzaib Tayyab
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
