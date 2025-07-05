import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import { Quicksand } from "next/font/google";
import { icons } from "@/constants";
import FeaturePill from "../common/FeaturePill";
import { useState } from "react";
import Amenties from "../common/Amenties";
import ReviewSection from "./ReviewSection";
import BookingSection from "./BookingSection";
import { useRouter } from "next/router";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  const [selectedTab, setSelectedTab] = useState<
    "description" | "offers" | "reviews" | "host"
  >("description");

  const [isOpen, setIsOpen] = useState(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const router = useRouter();

  const spaceDescription = (listItem: string): string => {
    return property.description.slice(
      property.description.indexOf(listItem),
      property.description.indexOf(listItem) + listItem.length
    );
  };

  type SectionedBullets = {
    [section: string]: string[];
  };

  const extractSections = (description: string): SectionedBullets => {
    const spaceSection = description.split("The space")[1] || "";
    const lines = spaceSection.split("\n").map((line) => line.trim());

    const sections: SectionedBullets = {};
    let currentSection = "";

    for (const line of lines) {
      if (line === "") continue;

      // If it's a section title
      if (!line.startsWith("•")) {
        currentSection = line;
        sections[currentSection] = [];
      }

      // If it's a bullet point
      if (line.startsWith("•") && currentSection) {
        sections[currentSection].push(line.replace(/^•\s*/, ""));
      }
    }
    return sections;
  };

  const sections = extractSections(property.description);

  const description = property.description.slice(
    0,
    property.description.indexOf("The space")
  );

  const averageRating =
    property.reviews.reduce((sum, review) => sum + review.rating, 0) /
    property.reviews.length;

  return (
    <div className={`${quicksand.className}`}>
      <div className="flex flex-col ">
        <div className="flex justify-between md:hidden pt-3 align-baseline items-baseline px-6">
          {/* {save/share mobile} */}
          <span className="flex gap-3">
            <Image
              src={icons.arrowleft}
              alt={icons.arrowleft}
              height={16}
              width={16}
              onClick={() => router.back()}
            />
            <p className="font-semibold text-black text-[17px">Return</p>
          </span>
          <span className="flex gap-6">
            {isLiked ? (
              <Image
                src={icons.heartRed}
                alt={icons.heartRed}
                height={18}
                width={18}
                className="color-red-600"
                onClick={() => setIsLiked((prev) => !prev)}
              />
            ) : (
              <Image
                src={icons.heart}
                alt={icons.heart}
                height={18}
                width={18}
                className="color-red-600"
                onClick={() => setIsLiked((prev) => !prev)}
              />
            )}

            <Image src={icons.share} alt={icons.share} height={18} width={18} />
          </span>
        </div>
        {/* Property Header */}
        <div className="md:pb-5  flex flex-col-reverse md:flex-col  space-y-2">
          {/* Property Name */}
          <div className="px-6 pt-4 flex justify-between">
            <div>
              <h1 className="text-[22px] font-bold text-black">
                {property.name}
              </h1>
              <div className="flex items-start space-x-6">
                {/* Rating and Location */}
                <div className="flex items-center whitespace-nowrap overflow-hidden no-scrollbar space-x-4">
                  <span className="text-black   font-semibold flex items-baseline text-[11px]">
                    <Image
                      src={icons.star}
                      alt="star icon"
                      width={12}
                      height={12}
                      className="mr-1"
                    />
                    {averageRating.toFixed(2)}
                    <span className="text-[#929292] text-[11px] font-light">
                      {" "}
                      {`(${property.reviews.length} reviews)`}
                    </span>
                  </span>
                  <div className="text-[#929292] text-[11px] flex gap-1 items-baseline">
                    <Image
                      src={icons.location}
                      alt={icons.location}
                      width={12}
                      height={12}
                    />
                    <span>
                      {property.address.city}, {property.address.country}
                    </span>
                  </div>
                </div>
                {/*host*/}
                <div className="flex gap-2 items-baseline">
                  <Image
                    src={icons.profile1}
                    alt={icons.profile1}
                    height={12}
                    width={12}
                  />
                  <span className="text-[#929292] text-[11px]">Mainstream</span>
                </div>
              </div>
            </div>
            {/* {save/share desktop} */}
            <div className="hidden md:flex">
              <span className="flex gap-6">
                <span onClick={() => setIsLiked((prev) => !prev)} className="flex cursor-pointer items-center justify-center gap-3 px-2 py-1 rounded-full pill_style">
                  {isLiked ? (
                    <Image
                      src={icons.heartRed}
                      alt={icons.heartRed}
                      height={16}
                      width={16}
                      className="color-red-600"
                      
                    />
                  ) : (
                    <Image
                      src={icons.heart}
                      alt={icons.heart}
                      height={16}
                      width={16}
                      className="color-red-600"
                    />
                  )}
                  <h1 className="text-black text-[16]px font-semibold">Save</h1>
                </span>

                <span className="flex cursor-pointer  items-center justify-center gap-3 px-2 py-1 rounded-full pill_style">
                  <Image
                    src={icons.share}
                    alt={icons.share}
                    height={13}
                    width={13}
                  />
                  <h1 className="text-black text-[16]px font-semibold">
                    Share
                  </h1>
                </span>
              </span>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4 md:px-8">
            <Image
              src={property.image}
              alt={property.name}
              width={800} // Adjust based on your layout
              height={384} // h-96 = 384px (96 * 4)
              className="col-span-2 w-full h-96 object-cover md:rounded-4xl"
            />{" "}
            {/* Add more images */}
          </div>
        </div>

        {/*Features*/}
        <div className="flex px-4 gap-6 align-middle items-center">
          <FeaturePill
            icon={icons.bed}
            alt={icons.bed}
            text={`${property.offers.bed} Bedrooms`}
          />
          <FeaturePill
            icon={icons.bathtub}
            alt={icons.bathtub}
            text={`${property.offers.shower} Bathroom`}
          />
          <FeaturePill
            icon={icons.people}
            alt={icons.people}
            text={`${property.offers.occupants} guests`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-7">
        <div className="md:col-span-3 lg:col-span-6">
          <div className="">
            <ul className="mt-4 ul_border text-[#929292] text-[17px] overflow-scroll pl-6 no-scrollbar whitespace-nowrap text-2xl font-semibold flex justify-between md:justify-around md:w-2/3 w-full gap-8">
              <li
                className={`${
                  selectedTab === "description" ? "list-nav" : ""
                } mb-3   cursor-pointer`}
                onClick={() => setSelectedTab("description")}
              >
                Description
              </li>
              <li
                className={`${
                  selectedTab === "offers" ? "list-nav" : ""
                } mb-3   cursor-pointer`}
                onClick={() => setSelectedTab("offers")}
              >
                What we offer
              </li>
              <li
                className={`${
                  selectedTab === "reviews" ? "list-nav" : ""
                } mb-3   cursor-pointer`}
                onClick={() => setSelectedTab("reviews")}
              >
                Reviews
              </li>
              <li
                className={`${
                  selectedTab === "host" ? "list-nav" : ""
                } mb-3   cursor-pointer`}
                onClick={() => setSelectedTab("host")}
              >
                About host
              </li>
            </ul>
          </div>

          {/* Description */}
          {selectedTab === "description" && (
            <div>
              <div className={isOpen ? "line-clamp-6" : ""}>
                <p className="text-black pt-4 px-6 text-[18px] leading-[30px]">
                  {description}
                </p>
                <p className="text-black px-6 font-semibold text-[18px] mt-6 mb-0.5">
                  {spaceDescription("The space")}
                </p>
                {Object.entries(sections).map(([sectionTitle, bullets]) => (
                  <div key={sectionTitle} className="mb-4 px-6">
                    <h3 className="text-black text-[18px] ">{sectionTitle}</h3>
                    <ul className="list-disc pl-6 text-gray-800 space-y-1">
                      {bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="px-6 flex align-baseline items-center gap-3 font-medium text-[#34967C] text-[18px]"
              >
                {isOpen ? "Read more" : "Show less"}
                <Image
                  src={icons.arrow_right}
                  alt={icons.arrow_right}
                  height={20}
                  width={20}
                />{" "}
              </button>

              {/* Amenities */}
              <div className="mt-1 px-6">
                <h1 className="text-2xl font-semibold">
                  What this place offers
                </h1>
                <h2 className="text-black font-bold text-[20px] leading-[35px]">
                  What this place offer
                </h2>
                <p className="text-black text-[16px] my-7">
                  Each home is fully equipped to meet your needs, with ample
                  space and privacy.
                </p>
                {property.category.map((amenity, index) => (
                  <span
                    key={index}
                    className="flex align-baseline text-[22.09px] items-center gap-4 m-4"
                  >
                    <Amenties iconString={amenity} width={20} height={20} />
                    <p className="text-black text-[16.05px]">{amenity}</p>
                  </span>
                ))}
                <div className="mt-18">
                  <span className="text-black font-semibold flex items-baseline text-[22px]">
                    <Image
                      src={icons.star}
                      alt="star icon"
                      width={16}
                      height={16}
                      className="mr-1"
                    />
                    <p>{averageRating.toFixed(2)}</p>
                    <span className="text-[#929292] text-[22px] font-bold">
                      {" "}
                      {`(${property.reviews.length} reviews)`}
                    </span>
                  </span>
                  {/* Reviews */}
                  <div className="">
                    <ReviewSection reviews={property.reviews} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === "offers" && (
            <div className="pl-6">
              <p className="text-black text-[16px] my-4">
                Each home is fully equipped to meet your needs, with ample space
                and privacy.
              </p>
              {property.category.map((amenity, index) => (
                <span
                  key={index}
                  className="flex align-baseline text-[22.09px] items-center gap-4 m-4"
                >
                  <Amenties iconString={amenity} width={20} height={20} />
                  <p className="text-black text-[16.05px]">{amenity}</p>
                </span>
              ))}
            </div>
          )}

          {selectedTab === "reviews" && (
            <div className="mt-6 pl-6">
              <span className="text-black font-semibold flex items-baseline text-[22px]">
                <Image
                  src={icons.star}
                  alt="star icon"
                  width={16}
                  height={16}
                  className="mr-1"
                />
                <p>{averageRating.toFixed(2)}</p>
                <span className="text-[#929292] text-[22px] font-bold">
                  {" "}
                  ({property.reviews.length} reviews)
                </span>
              </span>
              <ReviewSection reviews={property.reviews} />
            </div>
          )}

          {selectedTab === "host" && (
            <div className="pl-6">
              <p className="text-gray-700 mt-2">
                {/* Placeholder — customize with actual host info from property if available */}
                Hosted by Mainstream. They are committed to providing great
                stays for guests.
              </p>
            </div>
          )}
        </div>

        {/* Booking session */}
        <div className=" md:col-span-3 lg:col-span-2">
          <BookingSection price={property.price} discount={property.discount} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
