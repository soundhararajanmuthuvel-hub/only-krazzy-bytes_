import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { STATIC_IMAGES } from '../data/catalogue';
import { CONTACT_INFO, getWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Brands & Catalogue', href: '#brands' },
    { label: 'Product Categories', href: '#categories' },
    { label: 'Featured Products', href: '#featured' },
    { label: 'Wholesale & Supply', href: '#wholesale' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#171717] text-[#F2F0F0] text-xs py-1.5 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#E91E63] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E91E63]" />
              <span className="tabular-nums font-medium">{CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <div className="hidden sm:flex items-center gap-1 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#E91E63]" />
              <span>Kumbakonam, Tamil Nadu</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#E91E63] text-white px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider uppercase">
              B2B & Retail Food Supply
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-neutral-200 py-3'
            : 'bg-white/90 backdrop-blur-md border-[#F0DCE5]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          {/* Logo Zone */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <img
              src={STATIC_IMAGES.logo}
              alt="Only KRAZZY Bytes Official Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#171717]">
              Only <span className="text-[#E91E63]">KRAZZY</span> Bytes
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#E91E63] transition-colors whitespace-nowrap py-1 relative hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#E91E63]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded shadow-sm hover:shadow transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span className="hidden sm:inline">Enquire on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-800 hover:text-[#E91E63] hover:bg-neutral-100 rounded focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-200 shadow-xl px-4 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-3 font-semibold text-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-[#FFF7FA] hover:text-[#E91E63] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400" />
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-5 border-t border-neutral-100 flex flex-col gap-3">
            <div className="text-xs text-neutral-500 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E91E63]" />
              <span>3, Vijayendra Swamy Mutt St, Kumbakonam</span>
            </div>
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 bg-neutral-900 text-white rounded text-sm font-semibold hover:bg-neutral-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E91E63]" />
              <span>Call +91 74488 82425</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
