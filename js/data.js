// القاموس اللغوي للموقع
const translations = {
    ar: {
        menu_events: "فعاليات",
        menu_tourism: "سياحة",
        menu_restaurants: "مطاعم",
        menu_flights: "طيران",
        menu_shop: "تسوق",
        sidebar_settings: "الإعدادات",
        sidebar_language: "اللغة",
        sidebar_dark_mode: "الوضع الليلي",
        section_products_title: "عروض فاخرة مختارة",
        contact_title: "تواصل معنا",
        footer_about: "من نحن"
    },
    en: {
        menu_events: "Events",
        menu_tourism: "Tourism",
        menu_restaurants: "Dining",
        menu_flights: "Flights",
        menu_shop: "Shop",
        sidebar_settings: "Settings",
        sidebar_language: "Language",
        sidebar_dark_mode: "Dark Mode",
        section_products_title: "Featured Luxury Offers",
        contact_title: "Contact Us",
        footer_about: "About"
    }
};

// بيانات المنتجات (الأفلييت)
const products = [
    {
        id: 1,
        name: "Luxury Suite - Marriott",
        category: "tourism",
        price: "$450",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        link: "https://www.booking.com/hotel/marriott-luxury-link"
    },
    {
        id: 2,
        name: "First Class - Emirates",
        category: "flights",
        price: "$1200",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3",
        link: "https://www.emirates.com/booking-link"
    }
];

// منصات الشركاء
const affiliatePlatforms = [
    { name: "Booking.com", logo: "assets/images/partners/booking.png" },
    { name: "Marriott", logo: "assets/images/partners/marriott.png" },
    { name: "Hilton", logo: "assets/images/partners/hilton.png" }
];
