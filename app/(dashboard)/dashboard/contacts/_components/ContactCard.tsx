import React from 'react';

// Define the TypeScript interface for the props
interface ContactCardProps {
  title: string;
  dateRange: string;
  timelineStatus: string;
  message: string;
  amount: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  dateRange,
  timelineStatus,
  message,
  amount,
}) => {
  return (
    <div className=''>
      <div className='bg-[#202020] p-5 rounded-2xl border border-[#2c6a4b]'>
        <h3 className='text-2xl text-white font-semibold mb-2'>{title}</h3>
        <p className='text-lg text-white mb-4'>{dateRange}</p>
        <p className='contact_card_timeline_bg py-2.5 px-3 border border-[#2c6a4b] rounded-[10px] inline-block text-white text-base font-semibold mb-3'>
          {timelineStatus}
        </p>
        <div>
          <p className='text-white text-base mb-6'>{message}</p>
        </div>
        <h4 className='text-[#21AF68] text-2xl font-semibold'>{amount}</h4>
      </div>
    </div>
  );
};

export default ContactCard;
