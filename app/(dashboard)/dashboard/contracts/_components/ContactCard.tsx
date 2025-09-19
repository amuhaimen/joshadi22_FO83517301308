import MessageIcon from '@/public/contacts/icons/MessageIcon';
import TagIcon from '@/public/sidebar/icons/TagIcon';
import WarningIcon from '@/public/sidebar/icons/WarningIcon';
import React from 'react';

// Define the TypeScript interface for the props
interface ContactCardProps {
  title: string;
  dateRange: string;
  timelineStatus: string;
  statusType: string;
  message?: string;
  amount: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  dateRange,
  timelineStatus,
  statusType,
  message,
  amount,
}) => {
  return (
   
      <div className="bg-[#202020] p-5 rounded-2xl border border-[#2c6a4b] min-h-[250px] flex flex-col justify-between">
        <h3 className="text-2xl text-white font-semibold mb-2">{title}</h3>
        <p className="text-lg text-white mb-4">{dateRange}</p>
        <div>
          {
            statusType === 'delayed' ? (
              <div className="flex items-center gap-2">
                <WarningIcon />
                <p className="text-base text-[#F9C80E] font-semibold py-3 px-3">{timelineStatus}</p>
              </div>
            ) : statusType === 'update' ? (
              <div className="flex items-center">
                <TagIcon />
                <p className="text-base text-white font-semibold py-3 px-3">{timelineStatus}</p>
              </div>
            ) : (
              <p className="contact_card_timeline_bg py-2.5 px-3 border border-[#2c6a4b] rounded-[10px] inline-block text-white text-base font-semibold mb-3">
                {timelineStatus}
              </p>
            )
          }
        </div>
         <div className="flex-grow">
          {message && statusType !== 'delayed' ? (
            // If statusType is not 'delayed' and message exists
            <div className="flex items-center gap-2">
              <MessageIcon /> {/* Message icon */}
              <p className="text-white text-base font-semibold">{message}</p>
            </div>
          ) : message && statusType === 'delayed' ? (
            // If statusType is 'delayed' and message exists
            
              <p className="text-white text-base font-semibold border border-[#393939] py-2.5 px-3 rounded-[10px] inline-block bg-[#232323] mb-6">{message}</p>
            
          ) : null}
        </div>
        <h4 className="text-[#21AF68] text-2xl font-semibold">{amount}</h4>
      </div>
  
  );
};

export default ContactCard;
