# Only KRAZZY Bytes — Business Website

Official responsive business website for **Only KRAZZY Bytes**, a premier food products wholesale and retail supplier based in Kumbakonam, Thanjavur, Tamil Nadu, India.

Founded by **Sandeep Jain** (Food Business Consultant), Only KRAZZY Bytes supplies high-grade ingredients, sauces, dairy, frozen foods, chocolates, and bakery premixes to hotels, restaurants, bakeries, cafés, canteens, and caterers.

---

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Architecture:** 100% Client-Side Single Page Application (SPA), zero backend/database dependencies, ready for instant Vercel or static host deployment.

---

## 🌟 Key Features

1. **Direct WhatsApp Ordering & Enquiries:**
   - Pre-formatted messages for general supplies, specific products, and categories.
   - Interactive WhatsApp enquiry form dynamically encoding customer requirements.
2. **Comprehensive Brand Catalogue:**
   - 50+ trade partner brands with live search and category filtering.
   - Clean "View All Brands" / "Show Fewer Brands" expansion.
3. **8 Verified Product Categories:**
   - Sauces & Condiments, Mayonnaise & Spreads, Frozen Foods, Dairy Products, Bakery Ingredients, Chocolates & Desserts, Beverages & Milkshakes, Pickles & Other.
4. **Sample Catalogue Showcases:**
   - Real products with detailed specification modal and direct WhatsApp purchase request.
5. **Direct Calling Desks & Location:**
   - Primary line: `+91 74488 82425`
   - Additional desk: `9150030070`
   - Direct Google Maps directions link for the Kumbakonam warehouse.
6. **Auto-Moving Google Reviews Carousel:**
   - Section: **What Our Customers Say** ("Feedback from our customers").
   - 4-second auto-slide interval with hover pause, touch swipe gestures on mobile, keyboard & pagination controls, and `prefers-reduced-motion` compliance.
   - Separate data structure in `src/data/reviews.ts` preventing unverified/fake reviews.
   - Working CTA button: **"Read All Reviews on Google"** linking to the official search results.

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Deployment to Vercel

This is a standard Vite + React SPA and can be deployed directly to Vercel's free hobby tier:

1. Push this project to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

> Note: Custom domains can be linked in Vercel project settings; domain registration is acquired separately through a registrar.
