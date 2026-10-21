import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Send,
  ExternalLink,
  MessageSquare,
  Building,
  CheckCircle2
} from 'lucide-react';
import { CONTACT_INFO, getFormEnquiryWhatsAppUrl } from '../utils/whatsapp';
import { EnquiryFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    userName: '',
    businessName: '',
    businessType: 'Restaurant / Cafe',
    cityLocation: '',
    requiredItems: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.businessName || !formData.requiredItems) {
      return;
    }

    const targetUrl = getFormEnquiryWhatsAppUrl(formData);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section className="w-full bg-[#FBF9F8] py-16 lg:py-24 border-b border-neutral-200/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2 text-[#E91E63] text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
              Contact Only KRAZZY Bytes
            </h2>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
              Connect with founder and food business consultant Sandeep Jain for catalog inquiries, bulk dispatch schedules, and retail partnerships.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              {/* Office Address Card */}
              <div className="bg-white p-5 rounded-xl shadow-xs border border-neutral-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFF7FA] text-[#E91E63] border border-[#F0DCE5] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider">
                    Office & Warehouse Address
                  </span>
                  <span className="font-display font-bold text-sm text-[#171717] mt-0.5">
                    {CONTACT_INFO.businessName}
                  </span>
                  <p className="text-xs text-[#666666] mt-1 leading-relaxed">
                    3, Vijayendra Swamy Mutt Street,<br />
                    Kumbakonam, Thanjavur,<br />
                    Tamil Nadu – 612001, India
                  </p>
                  <div className="mt-3">
                    <a
                      href={CONTACT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E91E63] hover:underline"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>View Location on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Calling Desks Card */}
              <div className="bg-white p-5 rounded-xl shadow-xs border border-neutral-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFF7FA] text-[#E91E63] border border-[#F0DCE5] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col w-full">
                  <span className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider">
                    Calling Desks
                  </span>
                  <div className="mt-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-600 font-medium">Primary WhatsApp / Call:</span>
                      <a
                        href={`tel:${CONTACT_INFO.primaryPhoneRaw}`}
                        className="font-bold text-[#E91E63] hover:underline tabular-nums"
                      >
                        {CONTACT_INFO.primaryPhone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-600 font-medium">Additional Direct Line:</span>
                      <a
                        href={`tel:${CONTACT_INFO.additionalPhoneRaw}`}
                        className="font-bold text-[#171717] hover:text-[#E91E63] transition-colors tabular-nums"
                      >
                        {CONTACT_INFO.additionalPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white p-5 rounded-xl shadow-xs border border-neutral-200/80 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FFF7FA] text-[#E91E63] border border-[#F0DCE5] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider">
                    Operational Desks
                  </span>
                  <span className="font-display font-bold text-sm text-[#171717] mt-0.5">
                    Monday – Saturday
                  </span>
                  <p className="text-xs text-[#666666] mt-0.5">
                    9:00 AM – 8:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-md border border-neutral-200/80 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-1">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171717]">
                  Send Direct WhatsApp Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#666666]">
                  Fill in your commercial requirements below to open a prefilled, structured conversation with Sandeep Jain.
                </p>
              </div>

              {submitted && (
                <div className="mt-4 p-3.5 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-2.5 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    WhatsApp link generated! Review and send your message directly in WhatsApp.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-800" htmlFor="userName">
                      Your Name *
                    </label>
                    <input
                      id="userName"
                      type="text"
                      required
                      value={formData.userName}
                      onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 text-neutral-800 text-xs border border-neutral-300 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-800" htmlFor="businessName">
                      Business / Firm Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Anandha Sweets & Bakery"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 text-neutral-800 text-xs border border-neutral-300 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-800" htmlFor="businessType">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 text-neutral-800 text-xs border border-neutral-300 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63]"
                    >
                      <option value="Restaurant / Cafe">Restaurant / Café</option>
                      <option value="Bakery / Cake Shop">Bakery / Cake Shop</option>
                      <option value="Hotel / Institutional">Hotel / Institutional Canteen</option>
                      <option value="Catering Service">Catering Service</option>
                      <option value="Retail Outlet">Retail Food Store</option>
                      <option value="Other">Other Food Operation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-neutral-800" htmlFor="cityLocation">
                      City / Delivery Location *
                    </label>
                    <input
                      id="cityLocation"
                      type="text"
                      required
                      value={formData.cityLocation}
                      onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                      placeholder="e.g. Kumbakonam / Thanjavur"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 text-neutral-800 text-xs border border-neutral-300 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-neutral-800" htmlFor="requiredItems">
                    Items or Brands You Are Looking For *
                  </label>
                  <textarea
                    id="requiredItems"
                    required
                    rows={3}
                    value={formData.requiredItems}
                    onChange={(e) => setFormData({ ...formData, requiredItems: e.target.value })}
                    placeholder="e.g. Looking for regular supply of HyFun French Fries, Meal Time Mayonnaise 1kg packs, and Morde compound."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-50 text-neutral-800 text-xs border border-neutral-300 focus:outline-none focus:border-[#E91E63] focus:ring-1 focus:ring-[#E91E63] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-[#E91E63] hover:bg-[#D81557] active:scale-95 text-white py-3.5 px-6 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-neutral-500 mt-1">
                  Direct connection to {CONTACT_INFO.primaryPhone} • No account or registration needed
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
