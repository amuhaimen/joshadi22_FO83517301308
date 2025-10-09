import ActiveIcon from '@/public/investor/icons/ActiveIcon';
import InactiveIcon from '@/public/investor/icons/InactiveIcon';
import CalenderIcon from '@/public/investor/icons/CalenderIcon';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface InvestorCardProps {
  investorName: string;
  equity: string;
  status: string;
  imageUrl: string |  StaticImageData;
}

const InvestorCard: React.FC<InvestorCardProps> = ({
  investorName,
  equity,
  status,
  imageUrl,
}) => {
  return (
    <div className="flex justify-between items-center border border-[#ffffff0d] px-5 py-4 rounded-2xl bg-[#1f1f1f]">
      <div className="flex gap-4 items-center">
        <div>
          <Image src={imageUrl} alt={investorName} width={50} height={50} />
        </div>
        <div>
          <h3 className="text-base font-medium text-white">{investorName}</h3>
          <div className="flex items-center gap-5">
            <p className="text-xs text-[#E9E9EA]">{equity} Equity</p>
            <div className="flex items-center gap-1">
              {status === 'active' ? <ActiveIcon /> : <InactiveIcon />}
              <span className={`text-xs ${status === 'active' ? 'text-[#21AF68]' : 'text-[#FFBC6E]'}`}>
                {status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CalenderIcon />
      </div>
    </div>
  );
};

export default InvestorCard;
