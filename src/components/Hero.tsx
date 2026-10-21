import React from 'react';
import { ArrowRight, MessageSquare, ArrowUpRight, CheckCircle2, Truck } from 'lucide-react';
import { STATIC_IMAGES } from '../data/catalogue';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBF9F8] pt-32 pb-16 lg:pt-36 lg:pb-24 border-b border-neutral-200/60" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-5 z-10">
            {/* Pill kicker */}
            <div className="inline-flex items-center gap-2 self-start bg-[#FFF7FA] border border-[#F0DCE5] text-[#171717] px-3.5 py-1.5 rounded-full shadow-2xs animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#E91E63]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                B2B & Retail Food Distribution • Kumbakonam
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[52px] leading-tight text-[#171717] tracking-tight text-balance animate-fade-in-up animation-delay-100">
              Your Trusted Partner for <span className="text-[#E91E63]">Food Business</span> Supplies
            </h1>

            <p className="text-base sm:text-lg text-[#666666] max-w-xl leading-relaxed animate-fade-in-up animation-delay-200">
              Discover a wide range of food products and trusted brands for restaurants, hotels, bakeries, cafés, and food-service businesses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-in-up animation-delay-300">
              <a
                href="#brands"
                className="bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white text-sm font-semibold px-6 py-3.5 rounded shadow-sm hover:shadow transition-all flex items-center gap-2"
              >
                <span>Explore Brands</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="bg-[#171717] hover:bg-[#262626] active:scale-95 text-white text-sm font-semibold px-6 py-3.5 rounded shadow-sm hover:shadow transition-all"
              >
                Contact Us
              </a>
            </div>

            {/* Fast Wholesale Desk Callout */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-200/80 animate-fade-in-up animation-delay-400">
              <div className="w-10 h-10 rounded-full bg-[#FFF7FA] border border-[#F0DCE5] flex items-center justify-center text-[#E91E63] shrink-0">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#666666] uppercase tracking-wider">
                  Fast Wholesale Desk
                </span>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#171717] hover:text-[#E91E63] transition-colors flex items-center gap-1.5"
                >
                  <span>Direct WhatsApp: {CONTACT_INFO.primaryPhone}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E91E63]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 animate-fade-in-up animation-delay-200">
            {/* Main Visual Frame */}
            <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-neutral-100 shadow-xl border border-neutral-200">
              <img
                src={STATIC_IMAGES.heroKitchen}
                alt="Commercial hotel kitchen showing stainless steel counters, culinary ingredients, sauces, and dairy cartons"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6">
                <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-100 max-w-sm">
                  <div className="flex items-center gap-2 text-[#E91E63] text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Commercial Grade Inventory</span>
                  </div>
                  <p className="text-xs text-neutral-700 mt-1 leading-relaxed">
                    Ready stock delivery for bulk commercial kitchens & regional retail counters across Tamil Nadu.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -top-4 -left-6 bg-white p-3.5 rounded-xl shadow-lg border border-neutral-200/80 items-center gap-3 max-w-[230px]">
              <div className="w-9 h-9 rounded-lg bg-[#FFF7FA] text-[#E91E63] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                  Tamil Nadu
                </span>
                <span className="text-sm font-bold text-[#171717] leading-tight">
                  Regional Supply
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
