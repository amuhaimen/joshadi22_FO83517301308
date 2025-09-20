import Image from 'next/image'
import React from 'react'
import GoogleIcon from '@/public/certification-store/icons/GoogleIcon'

interface CertificationStoreCardProps {
  image?: string;  // Optional image, if provided it will display
  title: string;
  description: string;
  price: string;
 
}

export default function CertificationStoreCard({
  image,
  title,
  description,
  price,
 
}: CertificationStoreCardProps) {
  return (
    <div className="bg-[#202020] p-5 border border-[#2c6a4b] rounded-2xl space-y-[18px]">
      {/* Row 1 */}
      <div className="flex items-start gap-3">
        {image && <Image src={image} alt="Certification Image" width={45} height={45} />}
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-white text-base">{description}</p>
        </div>
      </div>
      {/* Row 2 */}
      <h2 className="text-[#21AF68] text-2xl font-semibold">{price}</h2>
      {/* Row 3 */}
      <button className="text-white flex items-center justify-center w-full py-[10px] rounded-[10px] common_btn_bg border border-[#2b6d4b] text-base font-semibold gap-2 cursor-pointer">
        <GoogleIcon />
        Login with Google
      </button>
      {/* Row 4 */}
      <button className="text-white flex items-center border border-[#2b6d4b] w-full justify-center py-[10px] rounded-[10px] common_btn_bg text-base font-semibold cursor-pointer">
       Login with Coursera
      </button>
    </div>
  );
}
