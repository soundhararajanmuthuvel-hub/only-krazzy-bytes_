/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Brands } from './components/Brands';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Wholesale } from './components/Wholesale';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF9F8] text-[#171717] flex flex-col selection:bg-[#E91E63] selection:text-white">
      {/* SECTION A — Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {/* SECTION B — Hero */}
        <Hero />

        {/* SECTION C — Business Highlights */}
        <Highlights />

        {/* SECTION D — About the Business */}
        <About />

        {/* SECTION F — Brand Catalogue */}
        <Brands />

        {/* SECTION E — Product Categories */}
        <Categories />

        {/* SECTION G — Featured Products */}
        <FeaturedProducts />

        {/* SECTION H — Wholesale & Retail */}
        <Wholesale />

        {/* GOOGLE REVIEWS SECTION — What Our Customers Say */}
        <ReviewsCarousel />

        {/* SECTION I — Restrained Regional Customer Network statement */}
        <div className="w-full bg-[#F5F3F3] py-8 border-b border-neutral-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-[#171717]">
                Trusted Food Service Logistics Network
              </span>
              <span className="text-xs text-[#666666] mt-0.5">
                Serving independent hotels, cloud kitchens, bakeries, and retail outlets across Kumbakonam, Thanjavur, and Tamil Nadu.
              </span>
            </div>
            <a
              href="#contact"
              className="text-xs font-bold text-[#E91E63] hover:underline whitespace-nowrap"
            >
              Partner with Us →
            </a>
          </div>
        </div>

        {/* SECTION J — Contact */}
        <Contact />
      </main>

      {/* SECTION K — Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Desk Actions */}
      <FloatingActions />
    </div>
  );
}
