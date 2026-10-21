import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
      {/* Call Button */}
      <a
        href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
        aria-label="Call Wholesale Support"
        className="flex items-center gap-2 bg-[#171717] hover:bg-[#262626] text-white px-3.5 py-2.5 rounded-full shadow-lg border border-neutral-700 transition-all duration-200 hover:scale-105"
      >
        <Phone className="w-4 h-4 text-[#E91E63]" />
        <span className="text-xs font-semibold hidden md:inline pr-1 tabular-nums">
          {CONTACT_INFO.primaryPhone}
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 bg-[#E91E63] hover:bg-[#D81557] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-200 hover:scale-105 group"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold hidden md:inline pr-1">
          Chat with us
        </span>
      </a>
    </div>
  );
};
