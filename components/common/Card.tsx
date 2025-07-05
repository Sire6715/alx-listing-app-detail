// components/Card.tsx
import React from "react";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { icons } from "@/constants";
import Link from "next/link";

const Card = ({ property }: { property: PropertyProps[] }) => {
  return (
    <div className="font-semibold  w-full grid grid-cols-1 md:grid-cols-2 md: md:justify-between md:gap-7  xl:gap-y-15 xl:gap-x-12 lg:grid-cols-2 xl:grid-cols-4 gap-y-7 py-4 ">
      {property.map((prop) => (
        <Link
          className="py-4 flex flex-col relative  justify-between align-baseline w-full bg-white md:w-full"
          key={prop.name}
          href={`property/${prop.name}`}
        >
          <Image
            src={prop.image}
            alt={prop.name}
            width={400}
            height={192}
            style={{ width: "100%", height: "20rem" }}
            className="rounded-[16.5px]  object-cover"
          />
          <div className="my-4 whitespace-nowrap overflow-scroll no-scrollbar">
            {prop.category.map((cat, idx) => (
              <span
                key={idx}
                className=" bg-[#F9F9F9] font-bold  text-black text-[12.52px] px-3 py-2 rounded-full  mr-2"
              >
                {cat}
              </span>
            ))}
          </div>
          {prop.discount && (
            <span className="bg-[#2cc39b] shadow-2xl gap-2 flex  items-center justify-center px-2 py-1 discount absolute">
              <Image
                src={icons.discount}
                alt={icons.discount}
                height={16}
                width={16}
              />
              <h1>{`${prop.discount}% Off`}</h1>
            </span>
          )}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[22.67px] font-semibold mb-1 text-black font-Quicksand">
              {prop.name}
            </h2>
            <span className="mb-1 flex gap-1">
              <Image src={icons.star} alt="star" height={16} width={16} />
              <p className="text-xl font-semibold text-black">{prop.rating}</p>
            </span>
          </div>
          <p className="text-gray-600 mb-1">
            {prop.address.city}, {prop.address.state} , {prop.address.country}
          </p>

          <div className="flex justify-between items-center">
            <div className=" py-2 px-2 rounded-full border-2 border-[#E9E9E9] flex justify-between items-center text-[15.51px] gap-2 text-sm text-gray-700 mt-2">
              <span className="flex gap-1 justify-between items-center">
                <Image
                  aria-hidden
                  src={icons.bed}
                  alt="Bed Icon"
                  width={16}
                  height={16}
                />
                {prop.offers.bed}
              </span>
              <span className="flex gap-1 justify-between items-center">
                <Image
                  src={icons.bathtub}
                  alt="Bed Icon"
                  width={16}
                  height={16}
                  className="inline mr-1"
                />
                {prop.offers.bed}
                {prop.offers.shower}
              </span>
              <div className="flex justify-between items-center align-baseline">
                <span className="flex gap-1 justify-between items-center">
                  <Image
                    src={icons.people}
                    alt="Bed Icon"
                    width={16}
                    height={16}
                    className="inline mr-1"
                  />
                  {prop.offers.occupants}
                </span>
              </div>
            </div>

            <div>
              <p className="text-2xl text-black font-bold">
                ${prop.price.toLocaleString()}
                <span className="text-sm">/n</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
