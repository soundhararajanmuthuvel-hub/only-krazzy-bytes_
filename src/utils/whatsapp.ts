export const CONTACT_INFO = {
  primaryPhone: '+91 74488 82425',
  primaryPhoneRaw: '917448882425',
  additionalPhone: '+91 91500 30070',
  additionalPhoneRaw: '9150030070',
  address: '3, Vijayendra Swamy Mutt Street, Kumbakonam, Thanjavur, Tamil Nadu – 612001, India',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=3%2C+Vijayendra+Swamy+Mutt+Street%2C+Kumbakonam%2C+Thanjavur%2C+Tamil+Nadu+612001%2C+India',
  founderName: 'Sandeep Jain',
  founderRole: 'Founder & Food Business Consultant',
  businessName: 'Only KRAZZY Bytes',
};

/**
 * Generates a valid WhatsApp URL with encoded message
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg =
    'Hello Only KRAZZY Bytes, I would like to enquire about your food products and wholesale supply. Please share more details.';
  const text = message || defaultMsg;
  return `https://wa.me/${CONTACT_INFO.primaryPhoneRaw}?text=${encodeURIComponent(text)}`;
}

/**
 * Product-specific WhatsApp enquiry
 */
export function getProductWhatsAppUrl(productName: string, brandName: string): string {
  const message = `Hello Only KRAZZY Bytes, I am interested in ${productName} from ${brandName}. Please share availability and details.`;
  return `https://wa.me/${CONTACT_INFO.primaryPhoneRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Category-specific WhatsApp enquiry
 */
export function getCategoryWhatsAppUrl(categoryName: string): string {
  const message = `Hello Only KRAZZY Bytes, I would like to enquire about ${categoryName} supply.`;
  return `https://wa.me/${CONTACT_INFO.primaryPhoneRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Formatted structured enquiry from contact form
 */
export function getFormEnquiryWhatsAppUrl(data: {
  userName: string;
  businessName: string;
  businessType: string;
  cityLocation: string;
  requiredItems: string;
}): string {
  const message = `Hello Only KRAZZY Bytes,

I would like to enquire about food product supply:
• Name: ${data.userName}
• Business: ${data.businessName} (${data.businessType})
• Location: ${data.cityLocation}
• Requirements: ${data.requiredItems}

Please share price details and minimum order quantities.`;

  return `https://wa.me/${CONTACT_INFO.primaryPhoneRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Brand-specific catalogue and rate list WhatsApp enquiry
 */
export function getBrandWhatsAppUrl(brandName: string): string {
  const message = `Hello Only KRAZZY Bytes, please share the wholesale price list and product catalogue for ${brandName}.`;
  return `https://wa.me/${CONTACT_INFO.primaryPhoneRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Full catalogue & trade rate sheet WhatsApp enquiry
 */
export function getCatalogueWhatsAppUrl(): string {
  const message = `Hello Only KRAZZY Bytes, please share your complete food products wholesale & retail catalogue, brand portfolio, and current rate sheet.`;
  return `https://wa.me/${CONTACT_INFO.primaryPhoneRaw}?text=${encodeURIComponent(message)}`;
}
