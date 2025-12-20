// الجزء الأول: الترجمات (Translations)
// تأكد من وضع كل النصوص التي تضمن تواصل الزبائن معك هنا
const translations = {
    ar: {
        "menu_events": "حفلات",
        "whatsapp_link_text": "تحدث معنا عبر واتساب",
        // أضف بقية المفاتيح التي أرسلتها لك سابقاً هنا...
        "footer_text": "© 2025 aladdan - جميع الحقوق محفوظة لمتجر RG1Shop"
    },
    en: {
        "menu_events": "Events",
        "whatsapp_link_text": "Contact us",
        "footer_text": "© 2025 aladdan - All Rights Reserved"
    }
};

// الجزء الثاني: المنتجات (Products Data)
// هذا الجزء هو المسؤول عن ملء "products-container" في ملف products-section.html
const productsData = [
    {
        id: 1,
        category: "events-tickets", // يجب أن يطابق data-sub في الـ HTML
        title_ar: "تذاكر حفلات فاخرة",
        title_en: "VIP Concert Tickets",
        price: "اتصل للسعر",
        image: "https://rg1shop.com/1000061847.jpg",
        link: "https://wa.me/212660074196" // رابط التواصل المباشر الذي طلبته
    }
    // يمكنك إضافة عشرات المنتجات هنا بنفس الطريقة
];
