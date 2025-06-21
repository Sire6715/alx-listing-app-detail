import React from "react";
import { IMAGE_PATHS } from "@/constants";
import { Source_Sans_3 } from "next/font/google";


const ssPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
})


const Hero = () => {
  return (
    <div
      className={`${ssPro.className} font-semibold w-full h-[380px] bg-cover bg-center rounded-[11.13px] md:rounded-[27px] flex justify-center items-center align-center text-center`}
      style={{ backgroundImage: `url(${IMAGE_PATHS.bgImg})` }}
    >
      <div>
        <h1 className="text-white text-[28.28px] md:text-[68.63px] md:leading-[72.28px] font-medium p-2 leading-[29.78px]">
          Find your favorite
          <br /> place here!”
        </h1>
        <p className="text-white text-[7.42px] md:text-[18px] font-light font-Quicksand leading-[13px]">
          The best prices for over 2 million properties worldwide.
        </p>
      </div>
    </div>
  );
};

export default Hero;
