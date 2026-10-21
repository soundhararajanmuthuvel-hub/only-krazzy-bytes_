---
name: Commercial Culinary Direct
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5b3f43'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#8f6f73'
  outline-variant: '#e4bdc2'
  surface-tint: '#bc004b'
  primary: '#b80049'
  on-primary: '#ffffff'
  primary-container: '#e2165f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2be'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5f5b5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#787376'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9de'
  primary-fixed-dim: '#ffb2be'
  on-primary-fixed: '#400014'
  on-primary-fixed-variant: '#900038'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e8e0e3'
  tertiary-fixed-dim: '#ccc5c8'
  on-tertiary-fixed: '#1e1b1d'
  on-tertiary-fixed-variant: '#4a4648'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  title-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets commercial food service operators: executive chefs, procurement officers, bakery managers, cloud kitchen operators, and institutional caterers. The visual language bridges industrial procurement efficiency with sensory culinary appeal.

### Aesthetic Foundation
The style combines modern functional commerce with high-contrast editorial clarity:
- **Tone:** Professional, reliable, energetic, operationally decisive.
- **Visual Expression:** Stark charcoal containers, ultra-crisp white functional cards, precise typography, and targeted high-visibility pink highlights (#E91E63) engineered to direct commercial purchasing workflows.
- **Imagery:** Crisp ingredient macro photography, wholesale packaging details, dynamic staging with real kitchen lighting, devoid of generic stock textures.
- **Interface Structure:** High-density scannability balanced with generous negative space to minimize friction during bulk ordering and inventory matching.

## Colors

The palette is tuned for high-speed scanning, stock tracking, and bulk ordering workflows under commercial kitchen and office environments.

### Role Assignments
- **Primary (`#E91E63`):** High-priority operational touchpoints—primary transaction triggers, bulk addition toggles, order confirmation steps, and critical price tier indicators.
- **Secondary / Deep Base (`#171717`):** High-contrast structural framing, primary typography, bulk unit matrices, and technical spec labels.
- **Tertiary / Canvas Tint (`#FFF7FA`):** Atmospheric warmth across expansive canvas backgrounds, active row fills, and promotional wholesale callouts.
- **Neutral / Slate Text (`#666666`):** Secondary metadata, SKU IDs, case counts, tax exclusions, pack weights, and auxiliary timestamps.
- **Surface Crisp (`#FFFFFF`):** Operational surfaces, product inventory tiles, modal dialogs, and tabular data containers.
- **Operational Line Tint (`#EAEAEA`):** Low-profile structural grid dividers and micro-borders defining dense matrix tables.

## Typography

The type scale combines **Manrope** for authoritative structural display headers and **Inter** for dense transactional interfaces, product codes, unit prices, and ordering tables.

### Rules of Usage
- **Numerics:** Numerical pricing, SKU codes, carton quantities, and stock statuses must use `font-variant-numeric: tabular-nums` to guarantee vertical alignment in lists and invoices.
- **Hierarchy:** Primary section headings employ bold Manrope cuts to delineate culinary categories (e.g., *Dairy & Fats*, *Flours & Starches*, *Condiments*).
- **Secondary Captions:** Technical specifications, unit conversions (e.g., `12 x 1kg Case`), and MOQ (Minimum Order Quantity) badges utilize `label-md` or `label-sm` in bold uppercase weights for rapid legibility.

## Layout & Spacing

A structured 12-column fluid grid system engineered for enterprise B2B purchasing dashboards, quick-order sheets, and retail catalog navigation.

### Breakpoints & Layout Adaptations
- **Desktop (1280px+):** 12 columns, `margin: 2.5rem`, `gutter: 1.5rem`. Enables side-by-side ordering pads, persistent cart summaries, and multi-tier filter trees.
- **Tablet (768px - 1279px):** 8 columns, `margin: 1.5rem`, `gutter: 1rem`. Cart slides into an off-canvas drawer; catalog transitions to 2–3 card columns.
- **Mobile (320px - 767px):** 4 columns, `margin: 1rem`, `gutter: 0.75rem`. Dense list view alternates with 2-column compact grid; quick-add buttons remain sticky to thumb zones.

### Vertical Rhythm
Layout components adhere strictly to an 8px base grid (0.5rem intervals). Density takes precedence inside order matrices and catalog lists, utilizing `space-xs` and `space-sm` for intra-item distances.

## Elevation & Depth

Visual hierarchy uses crisp, razor-thin framing combined with deliberate low-diffusion ambient shadows. This prevents interface fatigue during sustained administrative wholesale purchasing sessions.

### Elevation Tiers
- **Tier 0 (Base Canvas):** `#FFF7FA` ground layer for background body context.
- **Tier 1 (Surface Cards & Grids):** Pure white (`#FFFFFF`) surface with a 1px solid structural border in `#171717` at 8% opacity (`rgba(23, 23, 23, 0.08)`). No baseline drop shadow.
- **Tier 2 (Interactive Hover & Focus):** Shift to `box-shadow: 0 4px 16px -2px rgba(23, 23, 23, 0.06), 0 2px 6px -1px rgba(23, 23, 23, 0.04)` combined with an elevated border accent using `#E91E63` at 25% opacity.
- **Tier 3 (Floating Overlays, Cart Drawers, Modals):** Crisp containment via `box-shadow: 0 20px 32px -8px rgba(23, 23, 23, 0.12), 0 1px 3px 0 rgba(23, 23, 23, 0.05)`, backed by a 40% opacity `#171717` backdrop scrim.

## Shapes

The design uses a **Soft** shape archetype (`roundedness: 1`), conveying commercial industrial durability rather than consumer playfulness.

### Geometric Specs
- **Base Components (Inputs, Buttons, Badges):** `0.25rem` (4px) corner radii.
- **Surface Containers (Product Cards, Data Tables):** `rounded-lg` at `0.5rem` (8px).
- **Overlays (Modals, Bulk Drawers):** `rounded-xl` at `0.75rem` (12px).
- **Status Badges & Stock Indicator Chips:** Crisp, squared-off pills using a tight `0.25rem` to preserve high-density data packing.

## Components

### Buttons
- **Primary Action (Wholesale Buy, Order Finalization):** Background `#E91E63`, text `#FFFFFF`, border-radius `0.25rem`, typography `label-lg`. Hover state deepens to `#D81557`. Focus ring: 2px solid `#171717` offset by 2px.
- **Secondary Action (Request Quote, Split Order):** Background `#171717`, text `#FFFFFF`, border-radius `0.25rem`. Hover state transitions to `#2E2E2E`.
- **Tertiary / Utility (Download Spec Sheet, Reorder):** Background transparent, 1px border `#171717` (20% opacity), text `#171717`. Hover uses `#FFF7FA` fill with 100% opaque border.

### Product & Matrix Cards
- **Base Structure:** `#FFFFFF` background, `0.5rem` border radius, 1px border in `rgba(23, 23, 23, 0.08)`.
- **Anatomy:** High-clarity 1:1 food supply imagery, prominent unit pricing alongside wholesale tiered bulk discounts (e.g., "1–9 Cases: $42/case", "10+ Cases: $36/case"), bold brand marker, stock readiness status badge, and immediate numerical incrementer input.

### Input Fields & Steppers
- **Text Inputs:** Height 40px, pure white surface, 1px border in `#666666` (30% opacity), text `#171717`, placeholder `#666666`. Focused state activates a 1.5px border in `#E91E63`.
- **Quantity Steppers:** Integrated inline units with dual minus/plus toggles and direct keypad input, explicitly displaying both single-unit and master-carton multi-packs.

### Chips & Stock Indicators
- **In-Stock Wholesale Chip:** Background `#E8F5E9`, text `#1B5E20`, border 1px solid `rgba(27, 94, 32, 0.2)`, `label-sm`.
- **Limited Allocation / Lead-Time Alert:** Background `#FFF7FA`, text `#E91E63`, border 1px solid `rgba(233, 30, 99, 0.3)`.
- **Packaging Spec Tags (e.g., "Food-Grade HDPE", "HACCP Certified"):** Background `#F5F5F5`, text `#171717`, `label-sm`.

### Checkboxes & Radios
- **Checkboxes:** 18x18px, `0.125rem` radius, 1.5px border `#171717`. Active state fills `#E91E63` with white checkmark.
- **Radio Buttons:** 18x18px concentric circle, active state features `#E91E63` center dot with `#171717` perimeter.

### Industry-Specific Extensions
- **Bulk Tier Pricing Matrix:** Tabular micro-component embedded inside product details, displaying quantity thresholds, unit price, margin savings, and immediate click-to-fill capabilities.
- **Quick-Order Barcode / SKU Line:** Fixed rapid-entry bar allowing direct SKU or barcode paste with immediate inventory lookup and bulk append triggers.