import React from 'react';
import {
  UtensilsCrossed,
  Sandwich,
  Snowflake,
  Milk,
  Wheat,
  Cookie,
  GlassWater,
  PackageCheck,
  MessageSquare,
  Boxes
} from 'lucide-react';
import { CATEGORIES } from '../data/catalogue';
import { getCategoryWhatsAppUrl } from '../utils/whatsapp';

export const Categories: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Sandwich':
        return <Sandwich className="w-5 h-5" />;
      case 'Snowflake':
        return <Snowflake className="w-5 h-5" />;
      case 'Milk':
        return <Milk className="w-5 h-5" />;
      case 'Wheat':
        return <Wheat className="w-5 h-5" />;
      case 'Cookie':
        return <Cookie className="w-5 h-5" />;
      case 'GlassWater':
        return <GlassWater className="w-5 h-5" />;
      case 'PackageCheck':
      default:
        return <PackageCheck className="w-5 h-5" />;
    }
  };

  return (
    <section className="w-full bg-[#FBF9F8] py-16 lg:py-24 border-b border-neutral-200/60" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
            <Boxes className="w-4 h-4" />
            <span>Supply Verticals</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
            Product Categories
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Wholesale ingredients and packaged inventory categorized for restaurant, café, and commercial bakery setups.
          </p>
        </div>

        {/* 8 Category Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-neutral-200/80 hover:border-[#E91E63]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-3">
                {/* Category Image Box */}
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/60 relative">
                  <img
                    src={cat.imageUrl}
                    alt={cat.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-2 text-[#E91E63] pt-1">
                  {getIcon(cat.icon)}
                  <h3 className="font-display font-bold text-base text-[#171717] group-hover:text-[#E91E63] transition-colors">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-[#666666] leading-relaxed">
                  {cat.description}
                </p>

                <div className="text-[11px] text-neutral-500 pt-1 border-t border-neutral-100">
                  <span className="font-semibold text-neutral-700">Samples: </span>
                  <span>{cat.samples}</span>
                </div>
              </div>

              {/* Working Enquire Category CTA */}
              <a
                href={getCategoryWhatsAppUrl(cat.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full bg-[#FFF7FA] hover:bg-[#E91E63] text-[#171717] hover:text-white border border-[#F0DCE5] hover:border-[#E91E63] text-center py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Enquire Category</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
