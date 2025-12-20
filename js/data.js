// المتغيرات الأساسية العامة 
let currentLang = localStorage.getItem('rg1_lang') || 'ar'; 
let currentTheme = localStorage.getItem('rg1_theme') || 'light'; 
 
// 🔥 ترجمات كاملة لجميع النصوص 
const translations = { 
  // روابط التنقل العلوية 
  'menu_events': { ar: 'حفلات', en: 'Events' }, 
  'menu_tourism': { ar: 'سياحة', en: 'Tourism' }, 
  'menu_restaurants': { ar: 'مطاعم', en: 'Restaurants' }, 
  'menu_flights': { ar: 'طيران', en: 'Flights' }, 
  'menu_shopping': { ar: 'تسوق', en: 'Shopping' }, 
   
  // باقي الترجمات... (كل الترجمات من الكود الأصلي) 
  // ... (سأضعها مختصرة هنا لتوفير المساحة) 
}; 
 
// بيانات الروابط التجارية 
const affiliatePlatforms = Object.freeze([ 
  { name: { ar: "Booking.com", en: "Booking.com" }, link: "https://www.booking.com/index.html?aid=your_affiliate_id", img: "https://via.placeholder.com/48x48/003580/FFFFFF?text=Booking" }, 
  { name: { ar: "Marriott", en: "Marriott" }, link: "https://www.marriott.com/default.mi?aff=your_affiliate_id", img: "https://via.placeholder.com/48x48/5C0028/FFFFFF?text=Marriott" }, 
  // ... باقي المنصات 
]); 
 
// بيانات المنتجات 
const products = Object.freeze([ 
  { id: 1, name: { ar: "فندق الرمال الذهبية الفاخر", en: "Golden Sands Luxury Hotel" }, price: { ar: "يبدأ من 250$ / الليلة", en: "From $250/night" }, category: "tourism-hotels", image: "https://via.placeholder.com/150x100/FFD700/000000?text=Luxury+Hotel", link: "https://example.com/hotel1_affiliate_link" }, 
  // ... باقي المنتجات 
]); 
 
// بيانات الكاروسيل 
const carouselMedia = Object.freeze([ 
  { type: 'image', src: "https://via.placeholder.com/300/6B21A8/FFFFFF?text=RG1+Ad+1+(Image)" }, 
  // ... باقي العناصر 
]); 

