import React from 'react';
import { Layers, Store, UserCheck, Phone, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

export const Highlights: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F3F3] py-10 sm:py-12 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-7 rounded-xl shadow-xs border border-neutral-200/80 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#F0DCE5]">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#FFF7FA] text-[#E91E63] border border-[#F0DCE5] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#171717]">
                Wide Product Range
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Explore food products across multiple categories and brands spanning condiments, bakery, dairy, and dessert solutions.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center text-xs font-semibold text-[#E91E63]">
              <span>50+ Partner Brands Available</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-7 rounded-xl shadow-xs border border-neutral-200/80 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#F0DCE5]">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 text-[#171717] flex items-center justify-center">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#171717]">
                Wholesale & Retail Supply
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Food supply options for businesses and retail customers, tailored for commercial institutional setups as well as walk-in retail needs.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center text-xs font-semibold text-neutral-800">
              <span>Bulk Carton & Loose Pack Support</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-7 rounded-xl shadow-xs border border-neutral-200/80 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#F0DCE5]">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-[#FFF7FA] text-[#E91E63] border border-[#F0DCE5] flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-[#E91E63] bg-[#FFF7FA] px-2 py-0.5 rounded border border-[#F0DCE5]">
                  Expert Advice
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#171717]">
                Food Business Expertise
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed">
                Connect directly with Sandeep Jain, Food Business Consultant, to select optimal ingredients and commercial packaging sizes.
              </p>
            </div>
            <div className="pt-4 mt-2 border-t border-neutral-100 flex items-center gap-2">
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] hover:text-[#E91E63] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E91E63]" />
                <span>Call Sandeep</span>
              </a>
              <span className="text-neutral-300">·</span>
              <a
                href={getWhatsAppUrl('Hello Sandeep Jain, I would like to consult on food business supplies for my kitchen.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E91E63] hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
