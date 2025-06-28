import { useState } from "react";
import Pills from "@/components/common/Pills";
import Card from "@/components/common/Card";
import { PropertyProps } from "@/interfaces";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { Quicksand } from "next/font/google";
import Hero from "@/components/common/Hero";
import { Button } from "@/components/common/Button";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function Home() {
  const [item, setItem] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);
  const propertyCategories = [
    "All",
    ...Array.from(
      new Set(
        PROPERTYLISTINGSAMPLE.flatMap((val) =>
          Array.isArray(val.category) ? val.category : [val.category]
        )
      )
    ),
  ];

  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const filterProperties = (category: string) => {
    if (category === "All") {
      setActiveCategories([]);
      setItem(PROPERTYLISTINGSAMPLE);
      return;
    }

    const updatedCategories = activeCategories.includes(category)
      ? activeCategories.filter((cat) => cat !== category)
      : [...activeCategories, category];

    setActiveCategories(updatedCategories);

    const newItems = PROPERTYLISTINGSAMPLE.filter((item) =>
      updatedCategories.some((cat) => item.category.includes(cat))
    );

    setItem(updatedCategories.length ? newItems : PROPERTYLISTINGSAMPLE);
  };



  

  return (
    <div className={`px-[1.3rem] ${quicksand.className}`}>
      <div className="Hero w-full flex justify-center items-center">
        <Hero />
      </div>

      <div className=" flex justify-start items-center ml-4 py-4 px-4 overflow-x-auto no-scrollbar">
        <Pills
          pillText={propertyCategories}
          style={
            "text-[13.78px] leading-[13px] px-8 py-2 rounded-full mr-2 mb-2 pill_style "
          }
          filterProperties={filterProperties}
          setItems={setItem}
          activeCategories={activeCategories}
        />
      </div>

      <div>
        <Card property={item} />
      </div>
      <div className = "h-[10rem] md:h-[25rem] xl:h-[15rem] flex flex-col items-center mb-[11rem] justify-end">
        <Button
          style={"px-10 py-2 mb-4 rounded-full bg-black text-white font-semibold"}
          text={"Show more"}
        />
        <h1 className="text-black font-semibold tracking-wide">Click to see more listings. </h1>
      </div>
    </div>
  );
}
