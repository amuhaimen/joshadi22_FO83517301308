import React from "react";
 import chertificationData from '../certification-store/data/certificatonStoreData.json'
import CertificationStoreCard from "./_components/CertificationStoreCard";

export default function page() {
  return (
    <div>
      {/* header */}
      <div className=" flex items-center justify-between">
        <h2 className=" text-[32px] text-white font-medium">
          Certification Store
        </h2>
        <div>
          <button className=" text-white py-2.5 px-3 text-sm font-semibold border border-[#464646] common_btn_bg rounded-[10px] cursor-pointer">
            Add Certificates
          </button>
        </div>
      </div>

      {/* cards */}
      <div className=" p-6 contact_bg rounded-2xl mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          chertificationData.map((item,index)=>(
            <CertificationStoreCard key={index} image={item.image} title={item.title} description={item.description} price={item.price}/>
          ))
        }
         {/* <CertificationStoreCard/> */}
      </div>
    </div>
  );
}
