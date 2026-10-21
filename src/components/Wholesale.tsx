import React from 'react';
import {
  Truck,
  Hotel,
  UtensilsCrossed,
  Cake,
  Coffee,
  Building2,
  Soup,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Wholesale: React.FC = () => {
  const segments = [
    { name: 'Hotels', icon: Hotel },
    { name: 'Restaurants', icon: UtensilsCrossed },
    { name: 'Bakeries', icon: Cake },
    { name: 'Cafés', icon: Coffee },
    { name: 'Canteens', icon: Building2 },
    { name: 'Caterers', icon: Soup },
  ];

  const steps = [
    {
      num: 1,
      title: 'Share SKU List & Volume',
      desc: 'Send your product list or kitchen menu ingredients directly via WhatsApp or phone call.',
    },
    {
      num: 2,
      title: 'Consultant Review',
      desc: 'We verify batch freshness, package sizes, and optimum brand equivalents tailored to your food cost.',
    },
    {
      num: 3,
      title: 'Dispatch & Fulfillment',
      desc: 'Organized commercial packaging and dispatch from Kumbakonam to your outlet premises.',
    },
  ];

  return (
    <section className="w-full bg-[#171717] text-white py-16 lg:py-24" id="wholesale">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Audience & Solutions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#FFB2BE] text-xs font-bold uppercase tracking-wider">
              <Truck className="w-4 h-4 text-[#E91E63]" />
              <span>Commercial Logistics & Sourcing</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight text-balance">
              Wholesale & Retail Supply Solutions
            </h2>

            <p className="text-base text-neutral-300 leading-relaxed max-w-xl">
              Whether running a multi-location restaurant, an institutional canteen, or a neighborhood gourmet retail outlet, Only KRAZZY Bytes provides consistent trade delivery schedules, genuine brand stock, and flexible carton quantities.
            </p>

            {/* Audience Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {segments.map((seg) => {
                const IconComponent = seg.icon;
                return (
                  <div
                    key={seg.name}
                    className="bg-white/5 border border-white/10 hover:border-[#E91E63]/60 p-3.5 rounded-xl flex items-center gap-3 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E91E63]/20 text-[#FFB2BE] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200">
                      {seg.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl('Hello Only KRAZZY Bytes, I would like to discuss our commercial food supply requirements.')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white text-sm font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Discuss Your Requirements</span>
              </a>
              <span className="text-xs text-neutral-400">
                Quick quotation turnarounds for bulk inquiries
              </span>
            </div>
          </div>

          {/* Right Column: 3 Procurement Steps */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col gap-6 backdrop-blur-sm">
            <h3 className="font-display font-bold text-lg text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#E91E63]" />
              <span>Commercial Procurement Steps</span>
            </h3>

            <div className="flex flex-col gap-5">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#E91E63] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                    {step.num}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">
                      {step.title}
                    </span>
                    <span className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
