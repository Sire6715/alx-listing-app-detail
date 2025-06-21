import React, { useState } from "react";
import { PillProps } from "@/interfaces";
import { icons } from "@/constants";
import Image from "next/image";
import { useScreenSize } from "@/constants";

const Pills = ({
  pillText,
  style,
  filterProperties,
  activeCategories,
}: PillProps) => {
  const screenSize = useScreenSize();
  const [showDropDown, setShowDropdown] = useState(false);

  const getVisibleCount = () => {
    if (
      screenSize === "sm" ||
      screenSize === "lg" ||
      screenSize === "xl" ||
      screenSize === "2xl"
    )
      return 4;
    if (screenSize === "md") return 3;
    return pillText.length;
  };

  const visibleCount = getVisibleCount();

  const visiblePills = pillText.slice(0, visibleCount);
  const hiddenPills = pillText.slice(visibleCount);

  const handleFilterCheck = (text: string) => {
    filterProperties(text);
    if (!hiddenPills.length) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="flex w-full justify-between align-baseline  items-center ">
      {hiddenPills.length > 0 && (
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className="bg-white justify-between items-center space-x-1.5 pill_style text-black  flex md:hidden p-2 rounded-full md:rounded-[50%] font-semibold mr-2 cursor-pointer  hover:bg-gray-200"
        >
          <span>
            <Image
              src={icons.filter}
              alt="filter"
              style={{ maxWidth: "none" }}
              height={16}
              width={16}
            />
          </span>
        </div>
      )}
      {/* visible pills */}

      <div className="w-6/4 flex">
        {visiblePills.map((text, index) => {
          const isActive =
            activeCategories.includes(text) ||
            (text === "All" && activeCategories.length === 0);

          return (
            <span
              key={index}
              onClick={() => filterProperties(text)}
              className={`${style} whitespace-nowrap font-semibold font-Quicksand cursor-pointer transition-all delay-150 duration-300 ease-in-out ${
                isActive
                  ? "bg-[#34967C]"
                  : "bg-white text-black hover:bg-[#F0FFFB] hover:text-[#34967C]"
              }`}
            >
              {text}
            </span>
          );
        })}
        {/* {hiddenPills.length > 0 && (
          <div
            onClick={() => setShowDropdown((prev) => !prev)}
            className="bg-white  pill_style text-black flex p-3 rounded-[50%] font-semibold mr-2 cursor-pointer  hover:bg-gray-200"
          >
            <span>
              <Image
                src={icons.arrowDown}
                alt="drop down"
                style={{ maxWidth: "none" }}
                height={14}
                width={14}
              />
            </span>
          </div>
        )} */}
      </div>
      {/* dropdown for pills */}
      <div>
        {showDropDown && (
          <div className="absolute mt-8 bg-white border rounded-lg flex flex-col shadow-lg z-50">
            {hiddenPills.map((text, index) => {
              const isActive =
                activeCategories.includes(text) ||
                (text === "All" && activeCategories.length === 0);
              return (
                <div
                  key={index}
                  onClick={() => handleFilterCheck(text)}
                  className={`text-black px-4 py-2 cursor-pointer whitespace-nowrap  ${
                    isActive
                      ? "bg-[#34967C] text-white"
                      : "hover:bg-[#F0FFFB] hover:text-[#34967C]"
                  }`}
                >
                  {text}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className=" hidden md:flex justify-between">
        {hiddenPills.length > 0 && (
          <div
            onClick={() => setShowDropdown((prev) => !prev)}
            className="bg-white flex justify-between items-center space-x-1.5 pill_style text-black  px-8 md:px-2 md:py-2 p-2 rounded-full  font-semibold mr-2 cursor-pointer  hover:bg-gray-200"
          >
            <h1 className="hidden md:hidden lg:hidden xl:inline-block">
              Filter:{" "}
            </h1>
            <span>
              <Image
                src={icons.filter}
                alt="filter"
                style={{ maxWidth: "none" }}
                height={16}
                width={16}
              />
            </span>
          </div>
        )}
      </div>

      <div className=" hidden md:flex whitespace-nowrap space-x-1.5 bg-white  justify-between align-center pill_style text-black  md:px-8 md:py-2 p-1 md:rounded-full  font-semibold mr-2 cursor-pointer  hover:bg-gray-200">
        <h1>Sort By: </h1>
        <p>Highest Price</p>
      </div>
    </div>
  );
};

export default Pills;
