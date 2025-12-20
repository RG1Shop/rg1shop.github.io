// ✅ الملف النهائي والشامل لبيانات تطبيق aladdan
const translations = {
    ar: {
        // العناوين والقوائم
        "menu_events": "حفلات", "menu_tourism": "سياحة", "menu_restaurants": "مطاعم", "menu_flights": "طيران", "menu_shopping": "تسوق", "menu_blog": "المدونة", "menu_contact": "تواصل",
        
        // الأقسام الرئيسية
        "events_title": "🎉 الفعاليات والحفلات", "tourism_title": "🌍 السياحة والسفر", "restaurants_title": "🍽️ المطاعم والمقاهي", "flights_title": "✈️ حجز الطيران", "shopping_title": "🛍️ التسوق العالمي",
        "section_products_title": "📦 عروضنا المختارة", "section_affiliates_title": "🔗 شركاء النجاح",

        // روابط التواصل (ضمان عدم ضياع الزبائن)
        "contact_section_title": "📩 تواصل معنا مباشرة", "whatsapp_link_text": "إضغط هنا للتحدث معنا عبر واتساب", "paypal_button_text": "دعم عبر PayPal الآمن",
        "full_name_placeholder": "أدخل اسمك الكريم هنا...", "send_message_button": "إرسال الرسالة الآن",

        // السياسات القانونية
        "privacy_policy_title": "🔒 سياسة الخصوصية", "terms_conditions_title": "⚖️ الشروط والأحكام",
        "cookie_text": "نحن نستخدم ملفات تعريف الارتباط لضمان أفضل تجربة.", "cookie_accept": "موافق", "cookie_reject": "رفض",
        "footer_text": "© 2025 aladdan - جميع الحقوق محفوظة لمتجر RG1Shop"
    },
    en: {
        "menu_events": "Events", "menu_tourism": "Tourism", "menu_restaurants": "Dining", "menu_flights": "Flights", "menu_shopping": "Shopping",
        "whatsapp_link_text": "Contact us on WhatsApp", "footer_text": "© 2025 aladdan - All Rights Reserved"
    }
};

const productsData = [
    { id: 1, category: "tourism-hotels", title_ar: "حجز فنادق 5 نجوم", title_en: "5-Star Hotels", price: "أفضل سعر", image: "https://rg1shop.com/1000061847.jpg", link: "https://wa.me/212660074196" },
    { id: 2, category: "events-tickets", title_ar: "تذاكر حفلات VIP", title_en: "VIP Party Tickets", price: "تواصل معنا", image: "https://rg1shop.com/1000061847.jpg", link: "https://wa.me/212660074196" },
    { id: 3, category: "flights-booking", title_ar: "عروض طيران دولية", title_en: "Flight Offers", price: "خصم خاص", image: "https://rg1shop.com/1000061847.jpg", link: "https://expedia.com" }
];

// تصدير البيانات لتكون متاحة للملفات الأخرى
window.translations = translations;
window.productsData = productsData;
