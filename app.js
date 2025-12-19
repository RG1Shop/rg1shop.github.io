/* =======================================================================
✅ الجزء الأول: إصلاح مشكلة قفز الصفحة لأسفل (الحل القوي)
=======================================================================
*/
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function forceScrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// تنفيذ الصعود في عدة مراحل زمنية حرجة لضمان الثبات
forceScrollToTop(); 
window.addEventListener('load', forceScrollToTop);
document.addEventListener('DOMContentLoaded', forceScrollToTop);

// منع أي كود خارجي من سحب الصفحة للأسفل في أول ثانية من التحميل
let scrollInterval = setInterval(forceScrollToTop, 10);
setTimeout(() => clearInterval(scrollInterval), 1000);

/* =======================================================================
⚙️ الجزء الثاني: المتغيرات الأساسية
=======================================================================
*/
let currentLang = localStorage.getItem('rg1_lang') || 'ar';     
let currentTheme = localStorage.getItem('rg1_theme') || 'light'; 

/* =======================================================================
🔥 الجزء الثالث: قاموس الترجمات الكامل (بدون أي حذف)
=======================================================================
*/
const translations = {     
    // الروابط والعناوين
    'menu_events': { ar: 'حفلات', en: 'Events' },     
    'menu_tourism': { ar: 'سياحة', en: 'Tourism' },     
    'menu_restaurants': { ar: 'مطاعم', en: 'Restaurants' },     
    'menu_flights': { ar: 'طيران', en: 'Flights' },     
    'menu_shopping': { ar: 'تسوق', en: 'Shopping' },     
    'menu_products': { ar: 'المنتجات', en: 'Products' },     
    'menu_blog': { ar: 'المدونة', en: 'Blog' },     
    'menu_affiliates': { ar: 'الشركاء', en: 'Partners' },     
    'nav_links_text': { ar: 'روابط', en: 'Links' },     
    'menu_contact': { ar: 'تواصل', en: 'Contact' },     
    'nav_privacy_text': { ar: 'خصوصية', en: 'Privacy' },     
    'nav_terms_text': { ar: 'شروط', en: 'Terms' },     
    'nav_about_text': { ar: 'نحن', en: 'About' },     
    'events_title': { ar: '🎉 قسم الحفلات والفعاليات', en: '🎉 Events & Activities Section' },     
    'tourism_title': { ar: '✈️ قسم السياحة', en: '✈️ Tourism Section' },     
    'restaurants_title': { ar: '🍽️ قسم المطاعم', en: '🍽️ Restaurants Section' },     
    'flights_title': { ar: '🛫 قسم رحلات الطيران', en: '🛫 Flight Section' },     
    'shopping_title': { ar: '🛒 قسم التسوق', en: '🛒 Shopping Section' },     
    'section_products_title': { ar: 'اكتشف منتجاتنا', en: 'Discover Our Products' },     
    'section_affiliates_title': { ar: 'أفضل الروابط التجارية', en: 'Top Affiliate Platforms' },     
    'blog_main_title': { ar: 'المدونة (المقالات)', en: 'Blog (Articles)' }, 
    'specific_services_title': { ar: 'خدمات محددة', en: 'Specific Services' },     
    'contact_section_title': { ar: 'اتصل بنا', en: 'Contact Us' },     

    // التصنيفات الفرعية (Subcategories)
    'sub_events_tickets': { ar: 'تذاكر الحفلات', en: 'Event Tickets' },     
    'sub_events_organization': { ar: 'تنظيم الحفلات', en: 'Event Organization' },     
    'sub_events_venue': { ar: 'تأجير القاعات', en: 'Venue Rental' },     
    'sub_events_equipment': { ar: 'معدات الصوت والإضاءة', en: 'Sound & Lighting Equipment' },     
    'sub_events_hospitality': { ar: 'خدمات الضيافة', en: 'Hospitality Services' },     
    'sub_tourism_transport': { ar: 'المواصلات', en: 'Transportation' },     
    'sub_tourism_hotels': { ar: 'الفنادق', en: 'Hotels' },     
    'sub_tourism_restaurants': { ar: 'المطاعم', en: 'Restaurants' },     
    'sub_tourism_destinations': { ar: 'الوجهات السياحية', en: 'Tourist Destinations' },     
    'sub_tourism_entertainment': { ar: 'الترفيه', en: 'Entertainment' },     
    'sub_restaurants_luxury': { ar: 'مطاعم فاخرة', en: 'Luxury Restaurants' },     
    'sub_restaurants_fastfood': { ar: 'مطاعم سريعة', en: 'Fast Food' },     
    'sub_restaurants_cafes': { ar: 'مقاهي', en: 'Cafes' },     
    'sub_restaurants_desserts': { ar: 'حلويات ومخابز', en: 'Desserts & Bakeries' },     
    'sub_restaurants_delivery': { ar: 'توصيل الطعام', en: 'Food Delivery' },     
    'sub_flights_booking': { ar: 'حجز الرحلات', en: 'Book Flights' },     
    'sub_flights_offers': { ar: 'عروض الطيران', en: 'Flight Deals' },     
    'sub_flights_airlines': { ar: 'شركات الطيران', en: 'Airlines' },     
    'sub_flights_domestic': { ar: 'رحلات داخلية', en: 'Domestic Flights' },     
    'sub_flights_international': { ar: 'رحلات دولية', en: 'International Flights' },     
    'sub_shopping_clothes': { ar: 'ملابس', en: 'Clothing' },     
    'sub_shopping_electronics': { ar: 'إلكترونيات', en: 'Electronics' },     
    'sub_shopping_beauty': { ar: 'تجميل وعناية', en: 'Beauty & Care' },     
    'sub_shopping_home': { ar: 'مستلزمات منزلية', en: 'Home Essentials' },     
    'sub_shopping_accessories': { ar: 'اكسسوارات', en: 'Accessories' },     

    // نصوص التواصل والكوكيز
    'cookie_text': { ar: '🍪 نستخدم الكوكيز (Cookies) لتحسين تجربتك. هل تقبل؟', en: '🍪 We use cookies to improve your experience. Do you accept?' },     
    'accept_button': { ar: 'قبول', en: 'Accept' },     
    'reject_button': { ar: 'رفض', en: 'Reject' },     
    'contact_email_label': { ar: 'البريد الإلكتروني:', en: 'Email:' },     
    'whatsapp_label': { ar: 'تواصل عبر واتساب:', en: 'Contact via WhatsApp:' },     
    'whatsapp_link_text': { ar: 'انقر للبدء (رسائل فقط)', en: 'Click to start (messages only)' },     
    'support_payments_label': { ar: 'الدعم والمدفوعات:', en: 'Support & Payments:' },     
    'paypal_button_text': { ar: '💰 ادعمنا عبر PayPal', en: '💰 Support us via PayPal' },     
    'send_query_title': { ar: 'أرسل استفسارك مباشرة', en: 'Send Your Inquiry Directly' },     
    'full_name_label': { ar: 'الاسم الكامل:', en: 'Full Name:' },     
    'full_name_placeholder': { ar: 'أدخل اسمك الكريم', en: 'Enter your full name' },     
    'email_label': { ar: 'البريد الإلكتروني:', en: 'Email:' },     
    'email_placeholder': { ar: 'بريدك الإلكتروني', en: 'Your Email' },     
    'message_label': { ar: 'الرسالة أو الاستشارة:', en: 'Message or Consultation:' },     
    'message_placeholder': { ar: 'تفاصيل مشروعك أو استفسارك...', en: 'Details of your project or inquiry...' },     
    'send_message_button': { ar: 'إرسال الرسالة', en: 'Send Message' },     

    // سياسة الخصوصية
    'privacy_policy_title': { ar: '📜 سياسة الخصوصية لـ RG1Shop', en: '📜 RG1Shop Privacy Policy' },     
    'last_updated': { ar: 'تاريخ آخر تحديث:', en: 'Last updated:' },     
    'info_collection_title': { ar: '1. جمع واستخدام المعلومات', en: '1. Information Collection and Use' },     
    'privacy_p1': { ar: 'نحن في RG1Shop نلتزم بحماية خصوصية زوارنا. يتم جمع المعلومات للأغراض التالية فقط:', en: 'At RG1Shop, we are committed to protecting the privacy of our visitors.' },     
    'usage_data_label': { ar: 'بيانات الاستخدام (Usage Data):', en: 'Usage Data:' },     
    'privacy_usage_data_text': { ar: 'نجمع معلومات حول كيفية وصولك واستخدامك للموقع (مثل الصفحات التي تزورها, الوقت المستغرق, ونوع المتصفح).', en: 'We collect information about how you access and use the site.' },     
    'contact_data_label': { ar: 'بيانات الاتصال (Contact Data):', en: 'Contact Data:' },     
    'privacy_contact_data_text': { ar: 'المعلومات التي تقدمها عبر نموذج "اتصل بنا" تُستخدم فقط للرد على استفساراتك.', en: 'Information provided via the "Contact Us" form is used only for replies.' },     
    'cookies_label': { ar: 'ملفات تعريف الارتباط (Cookies):', en: 'Cookies:' },     
    'privacy_cookies_text': { ar: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتذكر تفضيلاتك.', en: 'We use cookies to improve experience and remember preferences.' },     
    'adsense_cookies_note': { ar: 'ملاحظة خاصة بإعلانات Google AdSense:', en: 'Special note on Google AdSense ads:' },     
    'privacy_adsense_note_text': { ar: 'نستخدم ملفات تعريف الارتباط لخدمة إعلانات Google AdSense لتقديم إعلانات تهمك.', en: 'We use cookies for AdSense to serve relevant ads.' },     
    'data_disclosure_title': { ar: '2. الإفصاح عن البيانات', en: '2. Data Disclosure' },     
    'privacy_disclosure_p1': { ar: 'نحن لا نبيع بياناتك الشخصية أو نتاجر بها.', en: 'We do not sell or trade your personal data.' },     
    'service_providers_label': { ar: 'مقدمي الخدمات:', en: 'Service Providers:' },     
    'privacy_service_providers_text': { ar: 'شركات استضافة الويب والتحليل التي تساعدنا في تشغيل الموقع.', en: 'Web hosting and analytics companies helping us operate.' },     
    'legal_obligations_label': { ar: 'التزامات قانونية:', en: 'Legal Obligations:' },     
    'privacy_legal_obligations_text': { ar: 'إذا كنا ملزمين قانونًا بالكشف عن البيانات.', en: 'If we are legally obliged to disclose data.' },     
    'ad_partners_label': { ar: 'شركاء الإعلانات:', en: 'Ad Partners:' },     
    'privacy_ad_partners_text': { ar: 'قد نشارك بيانات غير شخصية مع شركاء مثل Google AdSense.', en: 'We may share non-personal data with partners like AdSense.' },     
    'gdpr_rights_title': { ar: '3. حقوقك بموجب القانون العام لحماية البيانات (GDPR)', en: '3. Your Rights under GDPR' },     
    'privacy_gdpr_text': { ar: 'إذا كنت مقيمًا في الاتحاد الأوروبي, يحق لك الوصول والتصحيح والحذف لمعلوماتك.', en: 'If EU resident, you have rights to access, rectify, or delete data.' },     

    // الشروط والأحكام
    'terms_conditions_title': { ar: '⚖️ الشروط والأحكام لـ RG1Shop', en: '⚖️ RG1Shop Terms & Conditions' },     
    'terms_effective_text': { ar: 'تسري هذه الشروط عند استخدامك لموقعنا.', en: 'These terms apply when you use our site.' },     
    'terms_acceptance_title': { ar: '1. شروط الاستخدام وقبول الشروط', en: '1. Terms of Use and Acceptance' },     
    'terms_acceptance_full_text': { ar: 'يعد دخولك واستخدامك لموقع RG1Shop بمثابة موافقة كاملة على هذه الشروط.', en: 'Your use of RG1Shop constitutes full acceptance of these terms.' },     
    'affiliate_system_title': { ar: '2. نظام التسويق بالعمولة (Affiliate Disclosure)', en: '2. Affiliate Marketing System' },     
    'affiliate_statement_text': { ar: 'RG1Shop هو موقع تسويق بالعمولة.', en: 'RG1Shop is an affiliate marketing website.' },     
    'commissions_label': { ar: 'العمولات:', en: 'Commissions:' },     
    'terms_commissions_text': { ar: 'نحصل على عمولة عندما تشتري منتجًا عبر روابطنا دون زيادة في التكلفة عليك.', en: 'We earn a commission when you buy through our links at no extra cost.' },     
    'products_responsibility_label': { ar: 'المسؤولية عن المنتجات:', en: 'Product Responsibility:' },     
    'terms_products_responsibility_text': { ar: 'نحن لسنا البائعين الأصليين ولا نتحمل مسؤولية جودة أو شحن المنتجات.', en: 'We are not the original sellers and not responsible for product quality.' },     
    'important_note': { ar: 'تنويه هام:', en: 'Important Note:' },     
    'legal_note_text_span': { ar: 'الأجابة الصحيحة دائمًا هي **فردي** وليست ملكية فردية.', en: 'The correct answer is always **individual**.' },     
    'adsense_terms_note': { ar: 'إعلانات Google AdSense:', en: 'Google AdSense Ads:' },     
    'terms_adsense_text': { ar: 'يعرض الموقع إعلانات AdSense التي تستخدم الكوكيز لتقديم إعلانات ذات صلة.', en: 'Site displays AdSense ads using cookies for relevance.' },     
    'ip_rights_title': { ar: '3. الملكية الفكرية (Copyright)', en: '3. Intellectual Property' },     
    'ip_rights_text': { ar: 'جميع محتويات الموقع هي ملكية حصرية لـ RG1Shop (عادل لغريفي).', en: 'All site content is exclusive property of RG1Shop (Adil Laghrifi).' },     
    'liability_limitation_title': { ar: '4. تحديد المسؤولية', en: '4. Limitation of Liability' },     
    'liability_limitation_text': { ar: 'يتم توفير الموقع "كما هو" ولا نتحمل مسؤولية أي أضرار ناتجة عن الاستخدام.', en: 'Site provided "as is", we are not liable for damages from use.' },     

    // من نحن والتذييل
    'about_us_title': { ar: 'من نحن', en: 'About Us' },     
    'about_us_para1': { ar: 'RG1Shop هو مشروع رقمي يهدف لتوفير محتوى موثوق وأدوات تجارة إلكترونية.', en: 'RG1Shop is a digital project providing reliable content and e-commerce tools.' },     
    'about_us_para2': { ar: 'مؤسس الموقع: Adil Laghrifi. الرؤية: بناء منصة مفيدة وصادقة.', en: 'Founder: Adil Laghrifi. Vision: Build a useful, honest platform.' },     
    'footer_text': { ar: '&copy; 2025 RG1Shop. جميع الحقوق محفوظة.', en: '&copy; 2025 RG1Shop. All rights reserved.' },     
    'affiliate_notice': { ar: 'تنويه: بعض الروابط تابعة وقد نربح عمولة دون تكلفة إضافية عليك.', en: 'Disclaimer: Some links are affiliate links, we may earn commission.' },     
    'affiliates_links_description': { ar: 'روابط مصنفة حسب المحتوى لسهولة الوصول:', en: 'Links categorized by content for easy access:' }, 

    // محتوى المدونة
    'blog_date_prefix': { ar: 'التاريخ: ', en: 'Date: ' }, 
    'blog1_title': { ar: '1. اكتشف منتجاتنا الرقمية المميزة وابدأ رحلتك نحو النجاح', en: '1. Discover Our Unique Digital Products' },     
    'blog1_p1': { ar: 'هل تبحث عن منتجات رقمية مبتكرة؟ نقدم لك اليوم مجموعة مميزة من العروض الرقمية.', en: 'Looking for innovative digital products? We offer a unique collection today.' },     
    'blog1_h4_1': { ar: 'أولاً: تصميم المنتجات الرقمية لتجربة مستخدم سلسة', en: 'First: Seamless User Experience' },     
    'blog1_p2': { ar: 'منتجاتنا مصممة لتوفير تجربة فعّالة تخضع لاختبارات الجودة.', en: 'Products designed for efficiency and quality tested.' },     
    'blog1_h4_2': { ar: 'ثانياً: خدمات رقمية لإدارة أعمالك بفعالية', en: 'Second: Effective Management' },     
    'blog1_p4': { ar: 'خدماتنا تجعل إدارة أعمالك أسهل من خلال تحليل البيانات وإدارة الحملات.', en: 'Our services make business management easier via data analysis.' },     
    'blog1_conclusion_title': { ar: 'خاتمة: انطلق بثقة نحو النجاح الرقمي', en: 'Conclusion: Launch Confidently' },     
    'blog1_conclusion_text': { ar: 'منتجاتنا صممت لمن يبحث عن حلول عملية في عالم التسويق الرقمي.', en: 'Our products are for those seeking practical digital marketing solutions.' },

    'blog2_title': { ar: '2. أفضل الخدمات الرقمية لتعزيز حضورك وزيادة أرباحك', en: '2. Best Digital Services to Enhance Presence' },     
    'blog2_p1': { ar: 'النجاح يعتمد على استخدام الأدوات الصحيحة لإدارة أعمالك بذكاء.', en: 'Success depends on using the right tools to manage business smartly.' },     
    'blog2_h4_1': { ar: 'أولاً: خدمات إدارة الحملات الرقمية الاحترافية', en: 'First: Professional Campaigns' },     
    'blog2_p2': { ar: 'نساعدك على إنشاء حملات تسويقية فعالة عبر منصات متعددة.', en: 'Helping you create effective campaigns across platforms.' },     
    'blog2_conclusion_title': { ar: 'خاتمة: الاستثمار في الأدوات الرقمية هو استثمار في المستقبل', en: 'Conclusion: Investing in Future' },     
    'blog2_conclusion_text': { ar: 'باستخدام خدماتنا، ستتمكن من تعزيز حضورك وزيادة أرباحك بشكل مستمر.', en: 'Using our services, you can enhance presence and profits.' }
};

/* =======================================================================
⚙️ الجزء الرابع: المنطق البرمجي (Logic)
=======================================================================
*/
function updateTranslations() {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[key]) {
            // التعامل مع نصوص العناوين والفقرات
            if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                el.innerText = translations[key][currentLang];
            } 
            // التعامل مع الـ Placeholders في النماذج
            else {
                el.placeholder = translations[key][currentLang];
            }
        }
    });
    // ضبط اتجاه الصفحة (RTL للعربية و LTR للإنجليزية)
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('rg1_lang', lang);
    updateTranslations();
    forceScrollToTop(); // ضمان بقاء الصفحة في الأعلى عند تبديل اللغة
}

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
    forceScrollToTop();
});
