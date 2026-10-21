import { Brand, Product, ProductCategoryItem } from '../types';

export const BRANDS: Brand[] = [
  { id: 'bakers', name: 'Bakers', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Baking Essentials & Premixes', logoUrl: '/assets/aistudio/logo-bakers_72a91973.png', isVerifiedPartner: true },
  { id: 'mrs-food-rite-meal-time', name: 'Mrs Food Rite / Meal Time', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Sauces, Mayonnaise & Gravies', logoUrl: '/assets/aistudio/foodrite-logo_75efbd77.png', isVerifiedPartner: true },
  { id: 'habit', name: 'Habit', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Canned Foods & Gourmet Staples', logoUrl: '/assets/aistudio/image_659486a3.png', isVerifiedPartner: true },
  { id: 'malas', name: 'Mala’s', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Syrups, Crushes & Jams', logoUrl: '/assets/aistudio/logo_e49962c0.png', isVerifiedPartner: true },
  { id: 'hyfun', name: 'HyFun', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Frozen Specialties & French Fries', logoUrl: '/assets/aistudio/Logo_4405f2cc.png', isVerifiedPartner: true },
  { id: 'al-hafa', name: 'Al Hafa', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Packaged Food Supplies', logoUrl: '/assets/aistudio/image_89365804.png', isVerifiedPartner: true },
  { id: 'mapro', name: 'Mapro', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Syrups, Crushes & Toppings', logoUrl: '/assets/aistudio/image_a800a77b.png', isVerifiedPartner: true },
  { id: 'mambalam-iyer', name: 'Mambalam Iyer', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Pickles & Culinary Pastes', logoUrl: '/assets/aistudio/image_12d29059.png', isVerifiedPartner: true },
  { id: 'veeba', name: 'Veeba', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Dressings, Mayonnaise & Sauces', logoUrl: '/assets/aistudio/image_3dcd66b4.png', isVerifiedPartner: true },
  { id: 'milo', name: 'Milo', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Malt Beverages & Energy Drink', logoUrl: '/assets/aistudio/image_f044e851.png', isVerifiedPartner: true },
  { id: 'kelloggs', name: 'Kellogg’s', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Breakfast Cereals & Grains', logoUrl: '/assets/aistudio/image_5a02e21b.png', isVerifiedPartner: true },
  { id: 'micks', name: 'Micks', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Food Products' },
  { id: 'hersheys', name: 'Hershey’s', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Syrups & Cocoa' },
  { id: 'pipo', name: 'Pipo', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Ready Mixes' },
  { id: 'oleev', name: 'Oleev', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Culinary Oils' },
  { id: 'del-monte', name: 'Del Monte', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Canned & Sauces' },
  { id: 'amul', name: 'Amul', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Butter & Dairy' },
  { id: 'milky-mist', name: 'Milky Mist', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Paneer & Cheese' },
  { id: 'mevees', name: 'Mevees', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Beverages' },
  { id: 'golden-mark', name: 'Golden Mark', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Bakery Premixes' },
  { id: 'creston-crumbs', name: 'Creston Crumbs', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Bread Crumbs' },
  { id: 'pillsbury', name: 'Pillsbury', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Flour & Mixes' },
  { id: 'nova', name: 'Nova', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Dairy Products' },
  { id: 'ohms', name: 'OHMS', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Spices & Sauces' },
  { id: 'everest', name: 'Everest', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Spices & Blends' },
  { id: 'godrej', name: 'Godrej', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Food Products' },
  { id: 'nudrath', name: 'Nudrath', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Specialty Items' },
  { id: 'ibery', name: 'Ibery', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Dessert Bases' },
  { id: 'cavins', name: 'Cavin’s', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Dairy & Shakes' },
  { id: 'vkl', name: 'VKL', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Seasonings' },
  { id: 'nutralite', name: 'Nutralite', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Spreads & Mayo' },
  { id: 'dairy-hut', name: 'Dairy Hut', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Dairy Supplies' },
  { id: 'spar', name: 'Spar', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'General Pantry' },
  { id: 'indisha', name: 'Indisha', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Culinary Staples' },
  { id: 'dlecta', name: 'D’lecta', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Cheese & Cream' },
  { id: 'morde', name: 'Morde', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Chocolate Compounds' },
  { id: 'van-houten', name: 'Van Houten', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Cocoa & Chocolates' },
  { id: 'heritage', name: 'Heritage', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Milk & Ghee' },
  { id: 'good-life', name: 'Good Life', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Pantry Staples' },
  { id: 'colate', name: 'Colate', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Confectionery' },
  { id: 'peace-on-plate', name: 'Peace on Plate', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Gourmet Offerings' },
  { id: 'blossom', name: 'Blossom', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Baking Essences' },
  { id: 'joiberry', name: 'Joiberry', category: 'chocolates', categoryLabel: 'Chocolates & Desserts', subCategory: 'Fruit Fillings' },
  { id: 'falcon', name: 'Falcon', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Commercial Packs' },
  { id: 'creast', name: 'Creast', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Pastry Essentials' },
  { id: 'karachi-biscuits', name: 'Karachi Biscuits', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Bakery Retail' },
  { id: 'aahaa', name: 'Aahaa', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Condiments' },
  { id: 'tsr-dalda', name: 'TSR Dalda', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Commercial Vanaspati' },
  { id: 'bakers-craft', name: 'Bakers Craft', category: 'dairy-bakery', categoryLabel: 'Dairy & Bakery', subCategory: 'Bakery Concentrates' },
  { id: 'pinak', name: 'Pinak', category: 'staples', categoryLabel: 'Packaged Staples', subCategory: 'Food Supplies' },
  { id: 'spego', name: 'Spego', category: 'condiments', categoryLabel: 'Condiments & Sauces', subCategory: 'Sauces & Dressings' }
];

export const CATEGORIES: ProductCategoryItem[] = [
  {
    id: 'sauces-condiments',
    title: 'Sauces & Condiments',
    description: 'Essential bulk pizza toppings, tomato ketchup, chili sauces, soy sauces, and dip bases.',
    samples: 'Tomato purees, Schezwan, hot sauces',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBElOfH6ggQNGTSvQoMmopFMUu89b3Hx7ALw-TZbVtvrkjX-QxBdBnGvB-U1VrNfN9oAwVmYngzEJ_LVxcQgDOX_rVuvZmbfxsH38iSxMteH00xlBe35eZswPIgtX4XUPogN-wbLQjXJWSOyr8DiIeR3QmH0BI8jhTCVeI7B7Fub1gp6K2pDKkDHc2Zf2HskmL4cXwzMrAkEcZgSlfKsGNd4Dot0dMw5c9mCfXoJeQ2wZ0tNGuy1P8L',
    imageAlt: 'Assorted culinary sauces, ketchup bottles, chili dips, and cooking condiments displayed neatly on a bright commercial food-service preparation shelf.',
    icon: 'UtensilsCrossed'
  },
  {
    id: 'mayonnaise-spreads',
    title: 'Mayonnaise & Spreads',
    description: 'Eggless & flavored mayonnaise, sandwich spreads, and burger dressings in commercial packings.',
    samples: 'Classic mayo, mint mayo, chipotle spread',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4pSTuekwiWOGLP2Jeg96TaXD-rnI1HKcWgocuBJE_2WUSa1kmHvZ0XgfLpXSp4ANTkN3hRWl5EN4Yj3Vbh7Dxh6UbZwHiYSl_iUceKUS3Ga30fQ1mlav2TSA5JrZ-kUQGfrAqXUJVncxPS0pxUlZf1bykSsg6CvFbd3KueEMIEoBQON7TkKHUDJ9jKprSuteVVRNgiJEmI6IL6pIdBBsHevk5D4XHhUecs_pVNBAyF93t4hOin94y',
    imageAlt: 'Creamy mayonnaise jars, sandwich spreads, garlic mayo tubs, and commercial burger sauces arranged on a clean white surface with fresh herbs.',
    icon: 'Sandwich'
  },
  {
    id: 'frozen-foods',
    title: 'Frozen Foods',
    description: 'High-yield commercial quick-fry snacks, french fries, frozen patties, and appetizers.',
    samples: '6mm/9mm Fries, wedges, veggie bites',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZTWNaAQcPwPc3QtvoUCmRsLU3Cue0bdJpFTds5VcJwJGHMZYtVkhsaXZiDl_MA7NtVWeYuH7P8yXmtVRl-lg-puWwF1kRwbN-KrOU4oY-KJmMHeOYz_noPf-yMtBItDj_-UgyHbOeDo1LJ8UxCKw4hfzbi4x56S6hy_HePENcXO1u4Un79EkQvbL-28fIeNs9ChW9eIIEiwr0wtsB3_7VpzzaAyq6uYJbyVMUmgd4MerjAoizfCBw',
    imageAlt: 'Crispy golden French fries, frozen mushroom snacks, patties, and finger foods prepared for café and restaurant service with commercial packaging.',
    icon: 'Snowflake'
  },
  {
    id: 'dairy-products',
    title: 'Dairy Products',
    description: 'Institutional butter blocks, commercial paneer, mozzarella cheese shreds, and cooking cream.',
    samples: 'Table butter, diced cheese, paneer tubs',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhAuxC96BcTASpVtV0oe_OlPT7PiWGyTvA2d-FnT8tbqMzp--lLR_GuZttch_Aw3hKaNg2dIcAKzWrBtbJZj5CyX_l6HDBzbIJVXCDUti0nxdiZU569Mla16Uf4nZljbkhKVvn9_gzWjzBO1C9LNevzWHntQTWfG7lILQLXFXbV9_e4ivcsxTIcw2lj24pZhpoIL5e6kudf215yAAF0ZlTQGGLtuzg2347OSK3F9_oB0Zb4cBBn9MM',
    imageAlt: 'Blocks of fresh cooking paneer, mozzarella cheese, butter bars, and dairy cream packaged for commercial hotel and catering kitchens.',
    icon: 'Milk'
  },
  {
    id: 'bakery-ingredients',
    title: 'Bakery Ingredients',
    description: 'Professional cake premixes, waffle mixes, bread improvers, glazes, essences, and vanaspati.',
    samples: 'Waffle mix, sponge mixes, baking fats',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS5ddDZyQyT1FYe61zUz259VjHqEqD9R3MNe6MvYvZtD2UY0FiOAgBI7hLWXt7zpbxajGPQ-qBFruFPSLrdudXc1AxEezVUetHfXwQnzr0EXfFCCHiSnIhM3ldJqIrLyPLE0JZxMvlOI7Ad9MfKQV7k5sAbmA-9BKEpcycultlts6wrUJP0Ru2eGPZBtMwMrEuqj5ohG-Ym5EAnlaHPn6o2wjHM-BxbhobIVMcJUP9MWU5-wfpEJsP',
    imageAlt: 'Artisanal bakery premixes, waffle mixes, yeast, baking powder, and pastry glazing gels in professional baking workshop setting.',
    icon: 'Wheat'
  },
  {
    id: 'chocolates-desserts',
    title: 'Chocolates & Dessert Ingredients',
    description: 'Dark, milk, and white chocolate compounds, chocolate syrups, dessert garnishes, and cocoa.',
    samples: 'Compound slabs, syrup bottles, fruit crushes',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgPxWEf_GQ-lOSxNzB9rBPzWjM-DrZRUUwAISo2926AIVhWv_dcR-DVuYPxoiqn13s7cn7YmxLfo09oI3e9U2fUfJqeMosOwrNhVz23x7a7YZVFr7lHwusjN5kEAlRd5tyUHtC46At9dWQQZ0uWOZKaqK0oujZA0OXNcJLRaJ7nIdHV8NLA2BAXCRp_bIjBN4SbXzODoNqQN8pQv9tCAZd03yPWp5T6odOexnOcwDKz_oFh4XoIxb9',
    imageAlt: 'Dark and white chocolate compound slabs, cocoa powder, chocolate syrup drizzle, and dessert confectionery toppings ready for pastry chefs.',
    icon: 'Cookie'
  },
  {
    id: 'beverages-milkshakes',
    title: 'Beverages & Milkshakes',
    description: 'Crushes, flavored syrups for mocktails, thick shake concentrates, and malt drink powder.',
    samples: 'Fruit syrups, chocolate shake bases, malt mix',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf4GQbSmSR8FZczSVPh2ruKTgibi700u4f0NQmAioAGGuxs0GLiAfZl_U0d-HyDTDGRjx6faJCmjyFQR9L6zI7vuZntVOfMECJjOSiJL-370kFiYbKz-j0wfNBnOP3OzTOR0CYH6mf_YCPPl4Y2xLyhAoYQJU5EqndVq6XHGxuYjXyKb75ROg1VSCtVgK0HCEmBzYdBNDNO4NgEIe7K5u_83n0t5T9S3CRxYrMXq6AZLp169z9GKlf',
    imageAlt: 'Flavorful beverage syrups, milkshake concentrates, fruit purees, and malt drinks styled in clean café bar glassware.',
    icon: 'GlassWater'
  },
  {
    id: 'pickles-other',
    title: 'Pickles & Other Food Products',
    description: 'Authentic commercial pickles, seasoning pastes, cooking fats, and specialty packaged grocery lines.',
    samples: 'Mango pickle, ginger-garlic paste, dalda',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmsjdQSkAeO4cNQdf-b0Wq9AmJL3TLcXgjNNYAMwyI5m_2RJsQMYzsocvVSgphfm3RDT6bnl3ck4xOB2O2-w301C7Xwy4r9sUZ4IGZ6i0bAhg1H5QB7GrQhLsqhGfvcqLnlbdl5QnWO6VzIHxAT2BNMVSPt2xCneFwDNeirDQ-cc6MvucvCv6-yrOocCNKr_tW3gwoNej2FEUTJNw3qak3mlnjDBrTaroDgfCPFuaMq5OdK8qVgzm8',
    imageAlt: 'Traditional South Indian pickles, catering food pastes, culinary spices, and assorted kitchen staples in commercial containers.',
    icon: 'PackageCheck'
  }
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'hyfun-fries',
    name: 'HyFun French Fries — 6 mm',
    brand: 'HyFun',
    category: 'Frozen Foods',
    description: 'High-yield crisp quick-fry commercial fries designed for fast turnaround and crispy hold time.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXdZqwDWIbq_WqC2VomzcaNkqavFZQWDCuRAYf1R6CxyCjuJLGb5G1rhyNBvbp3Me7RNIuJMoQPqasxezLktYZa_Pdvln8-PQ1MDX2pf7qdYDLLX4DhHZFfWMYxeDHJfk0ILoG47rDTV2Y51_UK4TDfmcVh_NSMbPVnMtnRdmG6SZclEAMXzQqjC2fz-RMAx9df7WJEqO5bak84atHqYAr10OnZn-W5C5D-vAlpWih-lLnRpzr_RDW',
    imageAlt: 'Crispy 6mm thin-cut commercial french fries served in a metal frying basket on a restaurant table with salt.'
  },
  {
    id: 'habit-mushroom-tikka',
    name: 'Habit Mushroom Tikka',
    brand: 'Habit',
    category: 'Frozen Foods',
    description: 'Flavorful marinated snack for quick kitchen prep, suited for tandoor platters and starters.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZHZXZ0vaN_6b08tRpDaTNzyz7m0HxrMTfeJHRVxTDwyqJ9A8lJTKgiDRMERuKZ1QWSsV-R95Zfry58RBmGaGZ6nCZCP7u2JOT2ESobUoF5le_eL-lLkDfh4CwJ0g4KwhRhc2X2KbuKH5bwb2ddyInj6eB6wUMd2WVP-UDpW5QdZoopDvniWRICkTvqS2AODQTP8awsvOLI_gofMqM6xdUKB_1qgSZBCvBFTGVWs6T96h0IalK911D',
    imageAlt: 'Spicy marinated Habit mushroom tikka prepared in tandoori style, garnished with coriander and fresh lemon slices.'
  },
  {
    id: 'meal-time-mayo',
    name: 'Meal Time Mayonnaise',
    brand: 'Meal Time',
    category: 'Mayonnaise & Spreads',
    description: 'Consistent texture for sandwiches and rolls, with high cling and smooth spreadability.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPbJsZ72yXo7Ame2tyWxFHi9QXS3OIaww84XSThavxwHMPHBq1k3DlkJS_Xv1Ax_eyPMhn0weVsmx01hiNtfwGPtZ0XDuIIPIWj1_OzvUylyLQJmDs3z7TJXU6nm6NHAoAi_GHGkirbJ0JUb5kthzHqZUlGXDq8bWDFGg8-mwVLVXxSg6XCkJC0-r0YD88fGu2zu-td8kJzC0v5oCy9X41hzrvD7Yav1jiYmV7r9uvVEQLWK5LxcZR',
    imageAlt: 'Smooth creamy eggless white mayonnaise presented in a commercial catering tub alongside gourmet sandwiches and wraps.'
  },
  {
    id: 'veeba-mayo',
    name: 'Veeba Mayonnaise',
    brand: 'Veeba',
    category: 'Mayonnaise & Spreads',
    description: 'Rich, dependable condiment for commercial QSRs, burgers, subs, and signature dipping sauces.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPoiStNghmtKSWPf7kGKX1RiphwmJTznCJzMRpt8c4Lyrre7hzwsZnNBb2zENvYlZVBWN7xDJxuSLhTQIonSkNuozevbldNgh6kc6Cf8Un9cGRHI-3C99dGjxpSQOD4d-to2oxxXaVgkIPy91y7HTRa30iFRVIHd0hMp8_kCMleC_CNGZ-vMYGTqjM-hThNXV4h6AQyZLgrMoGSET0NLfd1907jIKIPXTaRXx1s6Gx6PF2pL09fOqC',
    imageAlt: 'Veeba premium culinary mayonnaise spread generously inside a loaded burger with fresh lettuce and vegetables.'
  },
  {
    id: 'mapro-chocolate-syrup',
    name: 'Mapro Chocolate Syrup',
    brand: 'Mapro',
    category: 'Chocolates & Desserts',
    description: 'Luscious dessert topping and beverage sweetener, ideal for ice cream parlor sundaes and milkshakes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaVgs_2N4EI9U23PVccWlkHjcBejDnqXwC1VaXp_60WpdtsYLM6KVqIbUmFHhHsR-juBynSwVVjw-x7nJcpK1iOCIsW_91VetDq0BR5OjoBQRA1VNl-YqM_x6TZTOFAKoY7VP0QzlCMVjlUWJNUeqRlFmrV2tZimwNlHDQXIIrBAIrDOdR7mwvQ2F2iHG43uzeEWp9dzv5wRKZBiTwLaJgEYgR7nhpDOlMir19OdGKNOzOWT07vn4v',
    imageAlt: 'Glossy dark chocolate syrup drizzled over scoops of vanilla ice cream in a restaurant dessert presentation.'
  },
  {
    id: 'hersheys-chocolate-syrup',
    name: 'Hershey’s Chocolate Syrup',
    brand: 'Hershey’s',
    category: 'Chocolates & Desserts',
    description: 'Benchmark chocolate taste for milkshakes, sundae bars, hot cocoa, and bakery decorations.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Q0Mvte1VqZUtT9obCYMq6J9P3Yf2RtnWYldMOYVSedRrbBqY8F6u_hno6q7Mi4s7ZBrzuucD1IddYMwCmGRxLNWHY3o4HlZE8FUXevV-zvsgTn5_4UEyx9-ItZ4GxNMNP2HRVGzzPHJuyQibtoQuVp6lcTiWJwbP7K0pxtw6_J1ZkmpLm1LIJSvcXYcrsqk1Usrdj4ukNpy7pVadsWK-E-_DY2fjCC49Vt3jhWzuQAE2670F5dba',
    imageAlt: 'Classic rich chocolate syrup bottle pouring onto freshly made pancakes and dessert milkshakes in warm cafe lighting.'
  },
  {
    id: 'amul-butter',
    name: 'Amul Butter',
    brand: 'Amul',
    category: 'Dairy Products',
    description: 'The indispensable standard for hotel, bakery, and restaurant commercial cooking and table service.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ8HhUCvGYn_73MLUTBkEzAXL7OiGMAcxxk-FRc2Bnbmw45_f8PNC6KSXf5E7JKUsNlasKaJRL5UBHZQPzwKX1UyRja0RvLumlltoGdDC2JPhkAs6xk8QnD_70YYcAYXGqJe0pqWa84UFaBD5xLviV0NG34NiwxWmne6XlvHAlVLUosPCb5dcC-6aBXX79fJYuGh4je7LlJVnxIVKcm-1WoXKioNtYqP2NU_XQUmXAE2XoHDwIy_a',
    imageAlt: 'Golden block of pure dairy table butter resting on marble cutting board with culinary bread and butter knife.'
  },
  {
    id: 'milky-mist-paneer',
    name: 'Milky Mist Paneer',
    brand: 'Milky Mist',
    category: 'Dairy Products',
    description: 'Soft, resilient cottage cheese for restaurant gravies, tikka marination, and catering dishes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoKdU76PpKhh7vQsdzsh-2O-JfGWcMGrSnaWAhVh9JitR1WnB6O8tjJp4jmOZz1ScYMG9qBYaTVdiFzZKZkyakfm3WVKbepQ1AwK1qAxsg5wYzq1dZSVoiiPdj7TVO1d1Lm7RJLn5xvxHvvUmE7jOeGTzcT2dxgs8wjFFsq4KhLAtCZEjOGl4BxMuqlryfMafGLg7n4xRIU0j5dCH8tfKSZzTElMcaxjTpZ2Bq2vzqowJLPNxOeqzL',
    imageAlt: 'Freshly diced cubes of firm white paneer cottage cheese displayed with spices and curry leaves for South Indian catering.'
  },
  {
    id: 'morde-dark-compound',
    name: 'Morde Dark Compound Chocolate',
    brand: 'Morde',
    category: 'Bakery & Chocolates',
    description: 'Easy-melt compound for cake coatings, ganache, brownies, molding, and chocolate confections.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbyPz6CAxj1kt-yP52WJ8s8EFpphjacpe0tikrYxug62SnJVZTlZ4Qp0Oo4NRnLM2bK0rlAoPNJQfFxm2G00Nu-M6Jfwrmsksby67FznbJf2vMgKDGPcDRIRgT7akfuFZPxaKeHrtrNrZ5p7TsRMZj3bwZ9f-eyJTyjPLz4OVlV2SnJA1HSWxNo2ku4P_TSoGGdFL8GzVAWoU9uS_Gqf7Re5Za-mssEHnOP28uU8lOxJZ5AsKeLa4N',
    imageAlt: 'Dense bar of professional dark chocolate compound slab broken into pieces for tempering and bakery confectionery.'
  },
  {
    id: 'pillsbury-waffle-mix',
    name: 'Pillsbury Waffle Mix',
    brand: 'Pillsbury',
    category: 'Bakery Ingredients',
    description: 'Uniform crispiness and quick turnaround for waffle stores, dessert cafes, and breakfast buffets.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCPWsxkMh2Wwqs5lVeluesNIw95tFW0hcbFy0lRzYxNkgfhCvUPHF2Q98XVo-8sgETRqx2nqEb5QMSSzzPCOP5d3HM5bHO42tdiiWq49Dh0ARejoab13OcshOMKxoRTXwhAMkvF0RmKtZngFGUWpoHtV3f0OpHyufS-rhnGvSzHWULzK0qdFsM-XygqAOIP_tXTZasMiSBON46RPmV6pObIRrxVkGTl3M1L7QmmEOzEuaU3nzs7Tjs',
    imageAlt: 'Crispy golden Belgian waffles freshly baked from premix batter served with berries and syrup in a cozy café setting.'
  }
];

export const CLIENT_SEGMENTS = [
  { id: 'hotels', name: 'Hotels', icon: 'Hotel' },
  { id: 'restaurants', name: 'Restaurants', icon: 'UtensilsCrossed' },
  { id: 'bakeries', name: 'Bakeries', icon: 'Cake' },
  { id: 'cafes', name: 'Cafés', icon: 'Coffee' },
  { id: 'canteens', name: 'Canteens', icon: 'Building2' },
  { id: 'caterers', name: 'Caterers', icon: 'Soup' }
];

export const STATIC_IMAGES = {
  logo: '/assets/aistudio/6eadb3ce-f26b-41ad-9b80-012578ae8524_53bafc84.jpg',
  heroKitchen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARoV8x5nD2HKeP5WJHGmiMz0Zq4oAsR5vhlmXf2-nEHny9e-tPYn6hNERHn-jmoMQNueLNTkyQ5gMOMqXIO-N2bM91fRygGoQUl2CQaQJySLDYflyHqkyW84p3Uvg1VXymYyLbsaWmdIWVNrNpPv1B7TImBFPGc41zOz1V33mNxlN2fNUfsOsKp1M34Y6ovEOSSG1mnrwVx58MydiV4GdkHu8S1lX62i0r7sZ-HD-XnlKQcdS65KTM',
  warehouse: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEDFmCJOln5oCfi95LOc1tIVFntYeIq1EgXssxZphpDmpD-_Dto0fPtycxMtl3mOuvqk38JmbIaJBfrr_eu6t_5cH_EawNrv6KpVSs78YOFBd9CWHVkewgrACThwZmDUKCr0VkxcYZxOn03m5F2FYbuH7k9D0lmop1qOcNANlwycOWD_OM8UN-ndDcjB5bdsFeHgtD-TckzQ8CrXebA7rG-WB_YW83tbpGdHznONOIbYNcW5KWX2ni',
  founder: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXXFWgvYvQBe9rmZKUDW8T_BxETCe3Tn5idRnPUXmTS1_9vOzeZc2whPjCiVoCo6aKhgxkuV06r8_JBSG_YzRG3-VLAaBykbB6n2HJeocWo5JjmuoosrMmMh5jv_W4d8i_WFQ-CZD8mteM5O-AVj7r0IpusZOBGvDST1OHCakJs2ZGC9e8fOfvT-NylKG4A3ceWoa7d_rd4l2J40EyK7OdGR6KC8OYDzo69n_eRd5LBGLn1RTmRhfj'
};
