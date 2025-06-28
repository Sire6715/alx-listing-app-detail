import React from 'react'
import { FeaturePillProps } from '@/interfaces'
import Image from 'next/image'



const FeaturePill :React.FC<FeaturePillProps>= ({text, icon, alt}) => {
  return (
    <div className="flex  items-center justify-center px-2 py-1 rounded-full pill_style">
     <Image
        src={icon ?? ""}
        alt ={alt ?? ""}
        width={10}
        height={10}
        className="mr-2"
      />
      <span className="text-black text-[10px] font-semibold">{text}</span>
    </div>
  )
}

export default FeaturePill