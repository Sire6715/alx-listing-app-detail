import { AmenityIconRenderer } from "@/interfaces";
import { amenityIconsMap } from "@/constants";
import Image from "next/image";

export const AmentityIcons = ({
  iconString,
  width = 24,
  height = 24,
  className = "inline-block",
}:AmenityIconRenderer) => {
  const IconPath = amenityIconsMap[iconString];

  if(!IconPath) {
    console.warn(`Icon for ${iconString} not found.`);
    return null;}
  return (
    <Image
      src={IconPath}
      alt={iconString}
      width={width}
      height={height}
      className={className}
       />
  )}; 

export default AmentityIcons;