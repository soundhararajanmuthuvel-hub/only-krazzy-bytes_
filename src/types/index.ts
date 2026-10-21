export type BrandCategory = 'all' | 'featured' | 'condiments' | 'dairy-bakery' | 'chocolates' | 'staples';

export interface Brand {
  id: string;
  name: string;
  category: 'condiments' | 'dairy-bakery' | 'chocolates' | 'staples';
  categoryLabel: string;
  subCategory: string;
  logoUrl?: string;
  isVerifiedPartner?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  packNote?: string;
}

export interface ProductCategoryItem {
  id: string;
  title: string;
  description: string;
  samples: string;
  imageUrl: string;
  imageAlt: string;
  icon: string;
}

export interface EnquiryFormData {
  userName: string;
  businessName: string;
  businessType: string;
  cityLocation: string;
  requiredItems: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number; // 1 to 5
  reviewText: string;
  reviewDate?: string;
  source: 'Google Review';
  initials?: string;
}
