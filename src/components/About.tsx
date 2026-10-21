import React from 'react';
import { Building2, Phone, MessageSquare, MapPin } from 'lucide-react';
import { STATIC_IMAGES } from '../data/catalogue';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <section className="w-full bg-[#FBF9F8] py-16 lg:py-24 border-b border-neutral-200/60" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>About Only KRAZZY Bytes</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight leading-tight text-balance">
              Reliable Food Procurement for Commercial Kitchens & Retailers
            </h2>

            <div className="flex flex-col gap-3 text-base text-[#666666] leading-relaxed">
              <p>
                Only KRAZZY Bytes is a specialized wholesale and retail food product distributor based in Kumbakonam, Tamil Nadu. We supply high-grade ingredients, condiments, frozen specialties, and confectioneries directly to commercial food-service establishments and retail businesses.
              </p>
              <p>
                Our operational framework focuses on dependability: assisting commercial operators in streamlining kitchen inventory, eliminating supply inconsistencies, and sourcing directly from established trade manufacturers.
              </p>
            </div>

            {/* Founder Profile Card */}
            <div className="mt-2 p-5 sm:p-6 bg-[#F5F3F3] rounded-2xl border border-neutral-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <img
                src={STATIC_IMAGES.founder}
                alt="Sandeep Jain - Founder & Food Business Consultant"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0 shadow-md border-2 border-white"
                loading="lazy"
              />
              <div className="flex flex-col text-center sm:text-left gap-1">
                <span className="font-display font-bold text-lg text-[#171717]">
                  {CONTACT_INFO.founderName}
                </span>
                <span className="text-xs font-semibold text-[#E91E63]">
                  {CONTACT_INFO.founderRole}
                </span>
                <p className="text-xs sm:text-sm text-[#666666] mt-1 leading-relaxed">
                  Focused on consultative food distribution, menu ingredient optimization, and helping commercial kitchens in Tamil Nadu secure continuous, authenticated food supply lines with predictable logistics.
                </p>
                <div className="mt-3 flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold">
                  <a
                    href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                    className="text-[#171717] hover:text-[#E91E63] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E91E63]" />
                    <span>Direct Line</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello Sandeep Jain, I would like to connect with you regarding our food business requirements.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E91E63] hover:underline flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Connect with Consultant</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Warehouse Imagery & Counter Strip */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-[4/3] shadow-md border border-neutral-200">
              <img
                src={STATIC_IMAGES.warehouse}
                alt="Clean commercial warehouse aisle with neatly organized food cartons and pallets in Kumbakonam"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-lg border border-neutral-200/60 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E91E63]" />
                  <span className="text-xs font-bold text-[#171717]">Kumbakonam Central Warehouse</span>
                </div>
                <span className="text-[11px] font-semibold text-neutral-500">Thanjavur Dt.</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FFF7FA] border border-[#F0DCE5] p-5 rounded-xl flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#171717] tabular-nums">
                  50+
                </span>
                <span className="text-xs font-medium text-[#666666] mt-0.5">
                  Trade Partner Brands
                </span>
              </div>
              <div className="bg-white border border-neutral-200 p-5 rounded-xl flex flex-col">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#171717] tabular-nums">
                  8+
                </span>
                <span className="text-xs font-medium text-[#666666] mt-0.5">
                  Major Food Categories
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
