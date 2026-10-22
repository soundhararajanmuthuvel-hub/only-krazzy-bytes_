import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowRight,
  MessageSquare,
  BadgeCheck,
  FileText,
  PhoneCall,
  ExternalLink,
  X
} from 'lucide-react';
import { BRANDS } from '../data/catalogue';
import { Brand, BrandCategory } from '../types';
import { CONTACT_INFO, getWhatsAppUrl, getBrandWhatsAppUrl, getCatalogueWhatsAppUrl } from '../utils/whatsapp';

export const Brands: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BrandCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeBrandModal, setActiveBrandModal] = useState<Brand | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const getBrandInitials = (name: string): string => {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const categories: { key: BrandCategory; label: string; count?: number }[] = [
    { key: 'all', label: 'All Brands' },
    { key: 'featured', label: '⭐ Official Brand Partners' },
    { key: 'condiments', label: 'Condiments & Sauces' },
    { key: 'dairy-bakery', label: 'Dairy & Bakery' },
    { key: 'chocolates', label: 'Chocolates & Desserts' },
    { key: 'staples', label: 'Packaged Staples' },
  ];

  const filteredBrands = useMemo(() => {
    return BRANDS.filter((brand) => {
      let matchesCategory = true;
      if (selectedCategory === 'featured') {
        matchesCategory = Boolean(brand.isVerifiedPartner || (brand.logoUrl && !failedImages[brand.id]));
      } else if (selectedCategory !== 'all') {
        matchesCategory = brand.category === selectedCategory;
      }

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        brand.name.toLowerCase().includes(query) ||
        brand.subCategory.toLowerCase().includes(query) ||
        brand.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Collapsed view shows initial 24 brands, expanded shows all
  const INITIAL_COUNT = 24;
  const displayedBrands = isExpanded
    ? filteredBrands
    : filteredBrands.slice(0, INITIAL_COUNT);

  return (
    <section className="w-full bg-[#F5F3F3] py-16 lg:py-24 border-b border-neutral-200/60" id="brands">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Brand Catalogue & Sourcing</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
              Brands We Offer & Wholesale Catalogue
            </h2>
            <p className="text-sm sm:text-base text-[#666666]">
              Sourcing dependable ingredients and commercial supplies from reputable food and confectionery brands. Browse our brand partners or request the full product catalogue.
            </p>
          </div>

          {/* Quick Catalogue Action & Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={getCatalogueWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E91E63] hover:bg-[#D81557] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>Get Full Catalogue</span>
            </a>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search brand (Bakers, Foodrite...)"
                className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-neutral-300 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-neutral-200/70 p-1 rounded-xl self-start">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.key);
                setIsExpanded(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.key
                  ? 'bg-[#E91E63] text-white shadow-xs'
                  : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Brands Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {displayedBrands.map((brand) => (
            <div
              key={brand.id}
              onClick={() => setActiveBrandModal(brand)}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-2xs border border-neutral-200/80 hover:border-[#E91E63]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between text-center min-h-[148px] group relative cursor-pointer"
            >
              {/* Top status indicator */}
              {brand.logoUrl && !failedImages[brand.id] && (
                <div className="absolute top-2 right-2 flex items-center justify-center">
                  <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-[#E91E63] bg-[#FFF7FA] px-1.5 py-0.5 rounded border border-[#F0DCE5]">
                    <BadgeCheck className="w-3 h-3 text-[#E91E63]" />
                    <span className="hidden group-hover:inline">Official</span>
                  </span>
                </div>
              )}

              {/* Brand Logo / Monogram Frame */}
              <div className="flex flex-col items-center">
                <div className={`h-16 w-full flex items-center justify-center p-2 mb-2 rounded-lg border transition-all duration-200 ${
                  brand.id === 'kelloggs'
                    ? 'bg-[#D0021B] border-[#D0021B] group-hover:brightness-105'
                    : 'bg-white border-neutral-200/70 group-hover:border-[#E91E63]/30 shadow-2xs'
                }`}>
                  {brand.logoUrl && !failedImages[brand.id] ? (
                    <img
                      src={brand.logoUrl}
                      alt={`${brand.name} logo`}
                      className={`max-h-12 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-200 ${
                        brand.id === 'kelloggs' ? 'brightness-100' : ''
                      }`}
                      onError={() => handleImageError(brand.id)}
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFF5F8] via-[#FAF7F8] to-[#F5EEF2] border border-[#E91E63]/25 shadow-2xs flex items-center justify-center group-hover:scale-105 group-hover:border-[#E91E63]/50 group-hover:from-[#FFF0F5] group-hover:to-[#FFE4EE] transition-all duration-200">
                      <span className="font-display font-extrabold text-xs tracking-wider text-[#171717] group-hover:text-[#E91E63] transition-colors">
                        {getBrandInitials(brand.name)}
                      </span>
                    </div>
                  )}
                </div>

                <span className="font-display font-bold text-xs sm:text-sm text-[#171717] group-hover:text-[#E91E63] transition-colors line-clamp-1">
                  {brand.name}
                </span>

                <span className="text-[11px] font-medium text-[#666666] mt-0.5 line-clamp-1">
                  {brand.subCategory}
                </span>
              </div>

              {/* Action Link */}
              <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-center gap-1 text-[11px] font-semibold text-[#E91E63] group-hover:underline">
                <MessageSquare className="w-3 h-3" />
                <span>Enquire Catalogue</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state for search */}
        {filteredBrands.length === 0 && (
          <div className="p-8 text-center bg-white rounded-xl border border-neutral-200 flex flex-col items-center gap-3">
            <p className="text-sm text-neutral-600 font-medium">
              No brand matching &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-xs text-[#E91E63] font-bold hover:underline"
              >
                Reset filters
              </button>
              <span className="text-neutral-300">•</span>
              <a
                href={getCatalogueWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-800 font-semibold hover:underline"
              >
                Ask our sourcing team on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Expand / Collapse Button */}
        {filteredBrands.length > INITIAL_COUNT && (
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 text-xs font-semibold rounded-lg shadow-2xs transition-all hover:border-[#E91E63]"
            >
              <span>
                {isExpanded
                  ? 'Show Fewer Brands'
                  : `View All ${filteredBrands.length} Brands`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#E91E63]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#E91E63]" />
              )}
            </button>
          </div>
        )}

        {/* Wholesale Catalogue Request Banner */}
        <div className="bg-gradient-to-r from-[#171717] via-[#241B20] to-[#171717] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Full B2B Sourcing & Pricing</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Need Our Complete Wholesale Catalogue & Price Sheet?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Receive updated product availability, carton quantities, bulk institutional discounts, and prompt dispatch schedules for Kumbakonam and Tamil Nadu regions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={getCatalogueWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Request Full Catalogue</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg border border-white/15 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-[#E91E63]" />
              <span>Call Sourcing Desk</span>
            </a>
          </div>
        </div>

        {/* Informational Disclaimer Bar */}
        <div className="p-3.5 bg-white rounded-xl border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#666666]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#E91E63] shrink-0" />
            <span>
              Brand names are official trade supplier listings subject to inventory confirmation. We add new brand logos and product lines as partnerships expand.
            </span>
          </div>
          <a
            href={getCatalogueWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E91E63] hover:underline font-bold inline-flex items-center gap-1 shrink-0"
          >
            <span>Request Brand Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Brand Detail Modal */}
      {activeBrandModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveBrandModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-200 relative flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveBrandModal(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Brand Logo / Name */}
            <div className="flex items-center gap-4 border-b border-neutral-100 pb-4">
              <div className={`h-16 w-20 flex items-center justify-center p-2 rounded-xl border shrink-0 ${
                activeBrandModal.id === 'kelloggs'
                  ? 'bg-[#D0021B] border-[#D0021B]'
                  : 'bg-white border-neutral-200'
              }`}>
                {activeBrandModal.logoUrl && !failedImages[activeBrandModal.id] ? (
                  <img
                    src={activeBrandModal.logoUrl}
                    alt={`${activeBrandModal.name} logo`}
                    className="max-h-12 max-w-full object-contain"
                    onError={() => handleImageError(activeBrandModal.id)}
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FFF5F8] via-[#FAF7F8] to-[#F5EEF2] border border-[#E91E63]/25 shadow-2xs flex items-center justify-center">
                    <span className="font-display font-extrabold text-xs tracking-wider text-[#171717]">
                      {getBrandInitials(activeBrandModal.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display font-bold text-lg text-[#171717]">
                    {activeBrandModal.name}
                  </h3>
                  {activeBrandModal.isVerifiedPartner && (
                    <BadgeCheck className="w-4 h-4 text-[#E91E63]" />
                  )}
                </div>
                <span className="text-xs text-[#E91E63] font-semibold">
                  {activeBrandModal.categoryLabel}
                </span>
                <span className="text-xs text-[#666666]">
                  {activeBrandModal.subCategory}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Only KRAZZY Bytes supplies wholesale and commercial packaging for {activeBrandModal.name} to hotels, restaurants, bakeries, and retail counters across Kumbakonam and Tamil Nadu.
            </p>

            <div className="bg-[#FFF7FA] border border-[#F0DCE5] rounded-xl p-3 flex flex-col gap-1 text-xs text-neutral-800">
              <span className="font-bold text-[#E91E63]">Available Procurement:</span>
              <span>• Bulk institution trade cartons &amp; retail units</span>
              <span>• Direct dispatch from regional inventory</span>
              <span>• Competitive trade rates &amp; consistent billing</span>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href={getBrandWhatsAppUrl(activeBrandModal.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#E91E63] hover:bg-[#D81557] text-white text-xs font-bold py-2.5 px-4 rounded-lg shadow-xs transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
              <a
                href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold py-2.5 px-4 rounded-lg transition-all"
              >
                <PhoneCall className="w-4 h-4 text-[#E91E63]" />
                <span>Call Desk</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
