import React, { useState } from 'react';
import { Package, MessageSquare, Check, X, ArrowUpRight } from 'lucide-react';
import { FEATURED_PRODUCTS, BRANDS } from '../data/catalogue';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

export const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [customRequirement, setCustomRequirement] = useState('');

  const handleCustomEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    const baseMsg = `Hello Only KRAZZY Bytes, I am interested in ${selectedProduct.name} from ${selectedProduct.brand}.`;
    const fullMsg = customRequirement.trim()
      ? `${baseMsg}\n\nNotes / Volume Requirement: ${customRequirement.trim()}`
      : `${baseMsg} Please share availability and commercial packing sizes.`;
    
    window.open(
      `https://wa.me/917448882425?text=${encodeURIComponent(fullMsg)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSelectedProduct(null);
    setCustomRequirement('');
  };

  return (
    <section className="w-full bg-[#F5F3F3] py-16 lg:py-24 border-b border-neutral-200/60" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
              <Package className="w-4 h-4" />
              <span>Sample Catalogue</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
              Featured Products
            </h2>
            <p className="text-sm sm:text-base text-[#666666]">
              Verified food staples frequently ordered by regional commercial caterers, cafés, and bakeries.
            </p>
          </div>
          <div className="text-xs font-semibold text-neutral-600 flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-neutral-200/80 self-start md:self-auto shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E91E63]" />
            <span>Trade pack sizes & bulk wholesale dispatch</span>
          </div>
        </div>

        {/* 10 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {FEATURED_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-3.5 sm:p-4 shadow-xs border border-neutral-200/80 hover:border-[#E91E63]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex flex-col">
                {/* 1:1 Aspect Ratio Image Frame */}
                <div className="w-full aspect-square rounded-lg overflow-hidden bg-neutral-100 mb-3 border border-neutral-100 relative">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="absolute bottom-2 right-2 bg-white/90 hover:bg-white text-neutral-800 text-[10px] font-semibold px-2 py-1 rounded shadow-xs opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Details
                  </button>
                </div>

                {/* Brand & Category */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5 min-w-0">
                    {(() => {
                      const brandInfo = BRANDS.find(
                        (b) =>
                          b.name.toLowerCase() === product.brand.toLowerCase() ||
                          b.name.toLowerCase().includes(product.brand.toLowerCase()) ||
                          product.brand.toLowerCase().includes(b.name.toLowerCase())
                      );
                      if (brandInfo?.logoUrl) {
                        return (
                          <div className={`h-5 w-6 shrink-0 rounded border flex items-center justify-center p-0.5 ${
                            brandInfo.id === 'kelloggs'
                              ? 'bg-[#D0021B] border-[#D0021B]'
                              : 'bg-neutral-50 border-neutral-200/70'
                          }`}>
                            <img
                              src={brandInfo.logoUrl}
                              alt=""
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                        );
                      }
                      return null;
                    })()}
                    <span className="text-xs font-bold text-[#E91E63] truncate">
                      {product.brand}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider bg-neutral-100 px-1.5 py-0.5 rounded shrink-0">
                    {product.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="font-display font-bold text-sm text-[#171717] line-clamp-1 group-hover:text-[#E91E63] transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#666666] mt-1 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Working Enquire Button */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-2">
                <a
                  href={getProductWhatsAppUrl(product.name, product.brand)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white text-center py-2 px-3 rounded text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>Enquire</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  title="View specifications"
                  className="p-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details & Fast Enquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-neutral-200 relative overflow-hidden">
            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                setCustomRequirement('');
              }}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-800 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex gap-4 items-start">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-100 shrink-0 border border-neutral-200">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#E91E63]">{selectedProduct.brand}</span>
                  <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded uppercase font-semibold">
                    {selectedProduct.category}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#171717] mt-1">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>
            </div>

            <form onSubmit={handleCustomEnquiry} className="mt-5 pt-4 border-t border-neutral-100 flex flex-col gap-3">
              <label className="text-xs font-semibold text-neutral-800">
                Specify Quantity or Inquiries (Optional):
              </label>
              <textarea
                value={customRequirement}
                onChange={(e) => setCustomRequirement(e.target.value)}
                placeholder="e.g. Need 5 cartons weekly for hotel restaurant in Thanjavur..."
                rows={2}
                className="w-full px-3 py-2 text-xs bg-neutral-50 rounded-lg border border-neutral-200 text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#E91E63] resize-none"
              />

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white py-2.5 px-4 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Product Enquiry on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
