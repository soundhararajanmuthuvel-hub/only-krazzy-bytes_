import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { STATIC_IMAGES } from '../data/catalogue';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#171717] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          {/* Col 1: Brand & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={STATIC_IMAGES.logo}
                alt="Only KRAZZY Bytes Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-display font-extrabold text-lg text-white">
                Only <span className="text-[#E91E63]">KRAZZY</span> Bytes
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Wholesale and retail food products supplier serving hotels, restaurants, bakeries, cafés, canteens, and caterers with reliable commercial delivery across Tamil Nadu.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E91E63] hover:bg-[#D81557] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Direct WhatsApp Order</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-300">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2 text-xs text-neutral-400">
              <a href="#home" className="hover:text-[#E91E63] transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-[#E91E63] transition-colors">
                About Us
              </a>
              <a href="#brands" className="hover:text-[#E91E63] transition-colors">
                Partner Brands
              </a>
              <a href="#categories" className="hover:text-[#E91E63] transition-colors">
                Product Categories
              </a>
              <a href="#featured" className="hover:text-[#E91E63] transition-colors">
                Featured Products
              </a>
              <a href="#wholesale" className="hover:text-[#E91E63] transition-colors">
                Wholesale & Supply
              </a>
              <a href="#reviews" className="hover:text-[#E91E63] transition-colors">
                Customer Reviews
              </a>
              <a href="#contact" className="hover:text-[#E91E63] transition-colors">
                Contact Us
              </a>
            </nav>
          </div>

          {/* Col 3: Warehouse & Office */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-300">
              Warehouse & Office
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              3, Vijayendra Swamy Mutt Street,<br />
              Kumbakonam, Thanjavur,<br />
              Tamil Nadu – 612001, India
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-[#FFB2BE] font-medium pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E91E63]" />
              <span>Serving Tamil Nadu & Regional Outlets</span>
            </div>
          </div>

          {/* Col 4: Contact & Enquiries */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-neutral-300">
              Contact & Enquiries
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-neutral-400">
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="hover:text-[#E91E63] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#E91E63]" />
                <span className="tabular-nums font-semibold text-white">{CONTACT_INFO.primaryPhone}</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.additionalPhoneRaw}`}
                className="hover:text-[#E91E63] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span className="tabular-nums font-semibold text-white">{CONTACT_INFO.additionalPhone}</span>
              </a>

              <div className="mt-2 p-3 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                  Bulk Orders Desk
                </span>
                <span className="text-xs font-semibold text-white block">
                  Ready Stock & Fast Logistics Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Only KRAZZY Bytes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Commercial Food Service Logistics & Wholesaler</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 bg-white/5 hover:bg-white/10 rounded-full text-neutral-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 pt-4 border-t border-neutral-800/60 text-center text-xs text-neutral-500">
          <p>
            Built by <span className="font-semibold text-[#E91E63]">MSR Solution</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
