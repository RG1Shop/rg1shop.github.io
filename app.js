// =======================================================================     
// 🚀 حل مشكلة قفز الصفحة (الإصدار القوي والمحسن)
// =======================================================================     
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function forceScrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// تنفيذ الصعود في عدة مراحل زمنية حرجة
forceScrollToTop(); 
window.addEventListener('load', forceScrollToTop);
document.addEventListener('DOMContentLoaded', forceScrollToTop);

// منع أي كود آخر من سحب الصفحة للأسفل في أول ثانية
let scrollInterval = setInterval(forceScrollToTop, 10);
setTimeout(() => clearInterval(scrollInterval), 1000);

// المتغيرات الأساسية العامة     
let currentLang = localStorage.getItem('rg1_lang') || 'ar';     
let currentTheme = localStorage.getItem('rg1_theme') || 'light'; 

// =======================================================================     
// 🔥 ترجمات كاملة لجميع النصوص الثابتة في الصفحة     
// =======================================================================     
const translations = {     
    // روابط التنقل العلوية     
    'menu_events': { ar: 'حفلات', en: 'Events' },     
    'menu_tourism': { ar: 'سياحة', en: 'Tourism' },     
    'menu_restaurants': { ar: 'مطاعم', en: 'Restaurants' },     
    'menu_flights': { ar: 'طيران', en: 'Flights' },     
    'menu_shopping': { ar: 'تسوق', en: 'Shopping' },     
    // روابط التنقل السفلية     
    'menu_products': { ar: 'المنتجات', en: 'Products' },     
    'menu_blog': { ar: 'المدونة', en: 'Blog' },     
    'menu_affiliates': { ar: 'الشركاء', en: 'Partners' },     
    'nav_links_text': { ar: 'روابط', en: 'Links' },     
    'menu_contact': { ar: 'تواصل', en: 'Contact' },     
    'nav_privacy_text': { ar: 'خصوصية', en: 'Privacy' },     
    'nav_terms_text': { ar: 'شروط', en: 'Terms' },     
    'nav_about_text': { ar: 'نحن', en: 'About' },     
     
    // عناوين الأقسام الرئيسية     
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
     
    // ترجمات Subcategory Cards     
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
     
    'privacy_policy_title': { ar: '📜 سياسة الخصوصية لـ RG1Shop', en: '📜 RG1Shop Privacy Policy' },     
    'last_updated': { ar: 'تاريخ آخر تحديث:', en: 'Last updated:' },     
    'info_collection_title': { ar: '1. جمع واستخدام المعلومات', en: '1. Information Collection and Use' },     
    'privacy_p1': { ar: 'نحن في RG1Shop نلتزم بحماية خصوصية زوارنا. يتم جمع المعلومات للأغراض التالية فقط:', en: 'At RG1Shop, we are committed to protecting the privacy of our visitors. Information is collected for the following purposes only:' },     
    'usage_data_label': { ar: 'بيانات الاستخدام (Usage Data):', en: 'Usage Data:' },     
    'privacy_usage_data_text': { ar: 'نجمع معلومات حول كيفية وصولك واستخدامك للموقع (مثل الصفحات التي تزورها, الوقت المستغرق, ونوع المتصفح). تُستخدم هذه البيانات لتحسين تجربة المستخدم وتحليل أداء الموقع.', en: 'We collect information about how you access and use the site (such as pages visited, time spent, and browser type). This data is used to improve user experience and analyze site performance.' },     
    'contact_data_label': { ar: 'بيانات الاتصال (Contact Data):', en: 'Contact Data:' },     
    'privacy_contact_data_text': { ar: 'المعلومات التي تقدمها عبر نموذج "اتصل بنا" (الاسم والبريد الإلكتروني والرسالة) تُستخدم فقط للرد على استفساراتك.', en: 'Information you provide via the "Contact Us" form (name, email, and message) is used only to respond to your inquiries.' },     
    'cookies_label': { ar: 'ملفات تعريف الارتباط (Cookies):', en: 'Cookies:' },     
    'privacy_cookies_text': { ar: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتذكر تفضيلاتك وتتبع النقرات على الروابط التابعة (Affiliate Links).', en: 'We use cookies to improve your experience, remember your preferences, and track clicks on affiliate links.' },     
    'adsense_cookies_note': { ar: 'ملاحظة خاصة بإعلانات Google AdSense:', en: 'Special note on Google AdSense ads:' },     
    'privacy_adsense_note_text': { ar: 'نستخدم أيضًا ملفات تعريف الارتباط لخدمة إعلانات Google AdSense، والتي قد تستخدم معلومات حول زياراتك لهذا الموقع ومواقع الويب الأخرى لتقديم إعلانات حول السلع والخدمات التي تهمك. يمكنك إدارة تفضيلات الإعلانات عبر إعدادات Google Ads.', en: 'We also use cookies for Google AdSense advertising, which may use information about your visits to this and other websites to provide ads about goods and services of interest to you. You can manage ad preferences via Google Ads settings.' },     
    'data_disclosure_title': { ar: '2. الإفصاح عن البيانات', en: '2. Data Disclosure' },     
    'privacy_disclosure_p1': { ar: 'نحن لا نبيع بياناتك الشخصية أو نتاجر بها. قد نكشف عن بياناتك لطرف ثالث موثوق به فقط في الحالات التالية:', en: 'We do not sell or trade your personal data. We may disclose your data to trusted third parties only in the following cases:' },     
    'service_providers_label': { ar: 'مقدمي الخدمات:', en: 'Service Providers:' },     
    'privacy_service_providers_text': { ar: 'شركات استضافة الويب والتحليل التي تساعدنا في تشغيل الموقع, وهي ملزمة بالحفاظ على سرية بياناتك.', en: 'Web hosting and analytics companies that help us operate the site, and are obligated to maintain the confidentiality of your data.' },     
    'legal_obligations_label': { ar: 'التزامات قانونية:', en: 'Legal Obligations:' },     
    'privacy_legal_obligations_text': { ar: 'إذا كنا ملزمين قانونًا بالكشف عن البيانات.', en: 'If we are legally obliged to disclose data.' },     
    'ad_partners_label': { ar: 'شركاء الإعلانات:', en: 'Ad Partners:' },     
    'privacy_ad_partners_text': { ar: 'قد نشارك بيانات غير شخصية ومجمعة مع شركاء الإعلانات مثل Google AdSense لغرض عرض الإعلانات المستهدفة وتحسين تجربة الإعلان.', en: 'We may share non-personal, aggregated data with advertising partners such as Google AdSense for the purpose of displaying targeted ads and improving the ad experience.' },     
    'gdpr_rights_title': { ar: '3. حقوقك بموجب القانون العام لحماية البيانات (GDPR)', en: '3. Your Rights under GDPR' },     
    'privacy_gdpr_text': { ar: 'إذا كنت مقيمًا في الاتحاد الأوروبي, يحق لك: الوصول, التصحيح, الحذف, والاعتراض على معالجة بياناتك. يمكنك ممارسة هذه الحقوق عن طريق الاتصال بنا عبر البريد الإلكتروني المذكور في صفحة "تواصل معنا".', en: 'If you are a resident of the European Union, you have the right to: access, rectify, delete, and object to the processing of your data. You can exercise these rights by contacting us via the email address mentioned on the "Contact Us" page.' },     
    'terms_conditions_title': { ar: '⚖️ الشروط والأحكام لـ RG1Shop', en: '⚖️ RG1Shop Terms & Conditions' },     
    'terms_effective_text': { ar: 'تسري هذه الشروط عند استخدامك لموقعنا.', en: 'These terms apply when you use our site.' },     
    'terms_acceptance_title': { ar: '1. شروط الاستخدام وقبول الشروط', en: '1. Terms of Use and Acceptance' },     
    'terms_acceptance_full_text': { ar: 'يعد دخولك واستخدامك لموقع RG1Shop بمثابة موافقة كاملة على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط, يجب عليك عدم استخدام الموقع.', en: 'Your access and use of the RG1Shop website constitutes full acceptance of these terms and conditions. If you do not agree to these terms, you must not use the website.' },     
    'affiliate_system_title': { ar: '2. نظام التسويق بالعمولة (Affiliate Disclosure)', en: '2. Affiliate Marketing System (Affiliate Disclosure)' },     
    'affiliate_statement_text': { ar: 'RG1Shop هو موقع تسويق بالعمولة.', en: 'RG1Shop is an affiliate marketing website.' },     
    'commissions_label': { ar: 'العمولات:', en: 'Commissions:' },     
    'terms_commissions_text': { ar: 'نحصل على عمولة من طرف ثالث عندما تشتري منتجًا عبر الروابط الموجودة على موقعنا. هذا لا يزيد من تكلفة المنتج عليك.', en: 'We receive a commission from a third party when you purchase a product through the links on our website. This does not increase the cost of the product to you.' },     
    'products_responsibility_label': { ar: 'المسؤولية عن المنتجات:', en: 'Product Responsibility:' },     
    'terms_products_responsibility_text': { ar: 'نحن لسنا البائعين الأصليين أو الموردين. نحن لا نتحمل مسؤولية جودة, شحن, أو إرجاع أي منتج يتم شراؤه عبر الروابط التابعة. يجب توجيه الاستفسارات المتعلقة بالمنتج إلى البائع الأصلي.', en: 'We are not the original sellers or suppliers. We are not responsible for the quality, shipping, or return of any product purchased through affiliate links. Inquiries regarding the product should be directed to the original seller.' },     
    'important_note': { ar: 'تنويه هام:', en: 'Important Note:' },     
    'legal_note_text_span': { ar: 'الأجابة الصحيحة دائمًا هي **فردي** وليست ملكية فردية.', en: 'The correct answer is always **individual** and not sole proprietorship.' },     
    'adsense_terms_note': { ar: 'إعلانات Google AdSense:', en: 'Google AdSense Ads:' },     
    'terms_adsense_text': { ar: 'يعرض هذا الموقع إعلانات Google AdSense، والتي قد تستخدم ملفات تعريف الارتباط (Cookies) لجمع بيانات الاستخدام وتقديم إعلانات ذات صلة باهتماماتك. يعتبر استخدام الموقع موافقة على هذا الاستخدام.', en: 'This website displays Google AdSense ads, which may use cookies to collect usage data and provide ads relevant to your interests. Use of the site constitutes consent to this use.' },     
    'ip_rights_title': { ar: '3. الملكية الفكرية (Copyright)', en: '3. Intellectual Property (Copyright)' },     
    'ip_rights_text': { ar: 'جميع محتويات الموقع, بما في ذلك النصوص, الجرافيك, الأكواد, وتصاميم المدونة, هي ملكية حصرية لـ RG1Shop (عادل لغريفي) ومحمية بقوانين حقوق النشر. يُمنع إعادة إنتاج أو نسخ أو توزيع أي جزء من المحتوى دون إذن خطي.', en: 'All content on the site, including text, graphics, code, and blog designs, is the exclusive property of RG1Shop (Adil Laghrifi) and is protected by copyright laws. Reproduction, copying, or distribution of any part of the content is prohibited without written permission.' },     
    'liability_limitation_title': { ar: '4. تحديد المسؤولية', en: '4. Limitation of Liability' },     
    'liability_limitation_text': { ar: 'يتم توفير الموقع "كما هو" (As Is). لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية تنشأ عن استخدامك للموقع أو عدم القدرة على استخدامه.', en: 'The site is provided "as is". We will not be responsible for any direct, indirect, or incidental damages arising from your use of or inability to use the site.' },     
    'about_us_title': { ar: 'من نحن', en: 'About Us' },     
    'about_us_para1': { ar: 'RG1Shop هو مشروع رقمي تم تأسيسه بهدف توفير محتوى موثوق, أدوات تجارة إلكترونية, شروحات تقنية, وروابط خدمات موثوقة للمستخدمين. هدف الموقع هو تسهيل الوصول للمعلومات والخدمات التجارية الرقمية وتقديم محتوى عالي الجودة يحترم قواعد Google AdSense.', en: 'RG1Shop is a digital project founded to provide reliable content, e-commerce tools, technical explanations, and trusted service links to users. The website aims to facilitate access to digital commercial information and services and to provide high-quality content that respects Google AdSense policies.' },     
    'about_us_para2': { ar: 'مؤسس الموقع: Adil Laghrifi الرؤية: بناء منصة مفيدة, صادقة, وقائمة على تقديم قيمة حقيقية للمستخدم.', en: 'Founder: Adil Laghrifi. Vision: To build a useful, honest, and value-driven platform.' },     
    'footer_text': { ar: '&copy; 2025 RG1Shop. جميع الحقوق محفوظة.', en: '&copy; 2025 RG1Shop. All rights reserved.' },     
    'affiliate_notice': { ar: 'تنويه: بعض الروابط في هذا الموقع هي روابط تابعة وقد نربح عمولة دون أي تكلفة إضافية عليك.', en: 'Disclaimer: Some links on this site are affiliate links and we may earn a commission at no extra cost to you.' },     
    'affiliates_links_description': { ar: 'روابط مصنفة حسب المحتوى لسهولة الوصول:', en: 'Links categorized by content for easy access:' }, 
    'blog_date_prefix': { ar: 'التاريخ: ', en: 'Date: ' }, 
    'blog1_title': { ar: '1. اكتشف منتجاتنا الرقمية المميزة وابدأ رحلتك نحو النجاح', en: '1. Discover Our Unique Digital Products and Start Your Journey to Success' },     
    'blog1_p1': { ar: 'هل تبحث عن منتجات رقمية وخدمات مبتكرة تساعدك على تحقيق أهدافك بسرعة وكفاءة؟ نقدم لك اليوم مجموعة مميزة من العروض الرقمية المصممة خصيصًا لتلبية احتياجاتك في عالم التسويق الرقمي والعمل عبر الإنترنت. سواء كنت تبحث عن أدوات لتطوير مهاراتك، أو خدمات رقمية تعزز حضورك على الإنترنت، أو منتجات جاهزة لزيادة دخلك، فإن مجموعتنا توفر لك الحل الأمثل.', en: 'Are you looking for innovative digital products and services that help you achieve your goals quickly and efficiently? Today, we offer you a unique collection of digital offerings specially designed to meet your needs in the world of digital marketing and online work. Whether you are looking for tools to develop your skills, digital services to enhance your online presence, or ready-made products to increase your income, our collection provides you with the optimal solution.' },     
    'blog1_h4_1': { ar: 'أولاً: تصميم المنتجات الرقمية لتجربة مستخدم سلسة', en: 'First: Designing Digital Products for a Seamless User Experience' },     
    'blog1_p2': { ar: 'منتجاتنا الرقمية مصممة لتوفير تجربة مستخدم سلسة وفعّالة. كل منتج يخضع لاختبارات الجودة للتأكد من أنه يقدم قيمة حقيقية للمستخدم. على سبيل المثال, نقدم دورات تدريبية رقمية تغطي أساسيات التسويق الرقمي, استراتيجيات الحملات الإعلانية, وأفضل الأدوات لإدارة المحتوى على منصات التواصل الاجتماعي. هذه المنتجات تساعدك على تعلم المهارات الضرورية بسرعة وبدون تعقيد, لتبدأ تحقيق نتائج ملموسة فورًا.', en: 'Our digital products are designed to provide a smooth and efficient user experience. Every product undergoes quality testing to ensure it delivers real value to the user. For example, we offer digital training courses covering the basics of digital marketing, advertising campaign strategies, and the best tools for content management on social media platforms. These products help you quickly and without complexity learn the necessary skills to start achieving tangible results immediately.' },     
    'blog1_p3': { ar: 'نحن نركز بشكل خاص على المنتجات التي تحل مشاكل حقيقية للمسوقين, مثل أدوات أتمتة البريد الإلكتروني أو برامج تحليل المنافسين. هذه الأدوات تمنحك ميزة تنافسية فورية في السوق.', en: 'We focus specifically on products that solve real problems for marketers, such as email automation tools or competitor analysis software. These tools give you an immediate competitive advantage in the market.' },     
    'blog1_h4_2': { ar: 'ثانياً: خدمات رقمية لإدارة أعمالك بفعالية', en: 'Second: Digital Services for Effective Business Management' },     
    'blog1_p4': { ar: 'خدماتنا الرقمية تجعل إدارة أعمالك أسهل وأكثر فعالية. من خلال خدمات إدارة الحملات, تحليل البيانات, وتصميم المحتوى الرقمي, يمكنك توفير الوقت وزيادة الإنتاجية. خدماتنا مصممة لتلبية احتياجات المسوقين الرقميين والرواد في التجارة الإلكترونية, مع ضمان جودة عالية وتجربة مستخدم ممتازة. كل خدمة تأتي مع دليل واضح يوضح كيفية الاستفادة القصوى منها.', en: 'Our digital services make managing your business easier and more effective. Through campaign management services, data analysis, and digital content design, you can save time and increase productivity. Our services are designed to meet the needs of digital marketers and e-commerce pioneers, ensuring high quality and an excellent user experience. Each service comes with a clear guide explaining how to make the most of it.' },     
    'blog1_p5': { ar: 'نصيحتنا العملية هي دمج أدوات التخطيط مع أدوات التنفيذ. عند استخدام برنامج جدولة منشورات مع خدمة إعلانية, ستجد أن جهودك التسويقية أصبحت متكاملة وموجهة نحو تحقيق الهدف الأكبر: زيادة المبيعات. لا تستهن بقوة التخطيط المسبق في المجال الرقمي.', en: 'Our practical advice is to integrate planning tools with execution tools. By using scheduling software with an advertising service, you will find that your marketing efforts have become integrated and directed towards achieving the bigger goal: increasing sales. Do not underestimate the power of prior planning in the digital field.' },     
    'blog1_h4_3': { ar: 'ثالثاً: التحديث المستمر وضمان الجودة', en: 'Third: Continuous Updates and Quality Assurance' },     
    'blog1_p6': { ar: 'منتجاتنا مميزة ومحدّثة باستمرار. نحرص على إضافة أدوات جديدة وميزات مبتكرة بشكل دوري, لضمان أنك دائمًا تحصل على أحدث الحلول الرقمية. سواء كنت تبحث عن برامج لإدارة البريد الإلكتروني, أدوات تحليل المواقع, أو حلول لتعزيز التفاعل على صفحاتك, فإن مجموعتنا الرقمية توفر لك كل ذلك في مكان واحد.', en: 'Our products are unique and constantly updated. We are keen to add new tools and innovative features periodically, to ensure that you always get the latest digital solutions. Whether you are looking for email management software, website analysis tools, or solutions to enhance interaction on your pages, our digital collection provides you with all of that in one place.' },     
    'blog1_p7': { ar: 'التحديثات لا تقتصر على الميزات الجديدة فحسب, بل تشمل أيضًا تحسينات الأداء الأمني. في عالم الإنترنت سريع التغير, يجب أن تكون أدواتك محمية وقادرة على التكيف مع التحديثات القانونية مثل GDPR وغيرها. هذا يضمن استدامة عملك وعدم مواجهة مشاكل تقنية غير متوقعة.', en: 'Updates are not limited to new features only, but also include security performance improvements. In the rapidly changing online world, your tools must be protected and able to adapt to legal updates such as GDPR and others. This ensures the sustainability of your business and avoids unexpected technical problems.' },     
    'blog1_h4_4': { ar: 'رابعاً: خطوات بسيطة لبدء الاستفادة', en: 'Fourth: Simple Steps to Start Benefiting' },     
    'blog1_p8': { ar: 'كيف يمكنك الاستفادة من هذه المنتجات والخدمات؟ الأمر بسيط: اختر المنتج أو الخدمة التي تتناسب مع احتياجاتك, اطلع على المزايا والفوائد, ثم ابدأ مباشرة في استخدامها. كل منتج مصحوب بإرشادات واضحة تساعدك على تحقيق أفضل النتائج بسرعة. بالإضافة لذلك, نقدم دعمًا مستمرًا لأي استفسارات قد تواجهها أثناء استخدامك للمنتجات والخدمات.', en: 'How can you benefit from these products and services? It\'s simple: choose the product or service that suits your needs, check out the features and benefits, then start using it immediately. Each product comes with clear instructions to help you achieve the best results quickly. In addition, we provide continuous support for any inquiries you may encounter while using the products and services.' },     
    'blog1_list1_item1': { ar: 'ابدأ بالمنتجات التي تتناسب مع أهدافك الحالية لتجنب التشتت والتركيز على هدف واحد في البداية.', en: 'Start with products that align with your current goals to avoid distraction and focus on one goal initially.' },     
    'blog1_list1_item2': { ar: 'جرّب الأدوات والخدمات المتاحة لفترة قصيرة قبل الالتزام الكامل لتحديد الأنسب لنموذج عملك.', en: 'Try out available tools and services for a short period before full commitment to determine what best suits your business model.' },     
    'blog1_list1_item3': { ar: 'استخدم ميزات التدريب أو الإرشادات المصاحبة لكل منتج لتحقيق أقصى استفادة ممكنة من جميع الخصائص.', en: 'Utilize training features or accompanying instructions for each product to maximize the benefits of all its features.' },     
    'blog1_list1_item4': { ar: 'شارك تجربتك مع الآخرين عبر التقييمات أو التعليقات, لتعزيز المجتمع الرقمي الخاص بك والمساهمة في بناء الثقة.', en: 'Share your experience with others through reviews or comments to strengthen your digital community and contribute to building trust.' },     
    'blog1_conclusion_title': { ar: 'خاتمة: انطلق بثقة نحو النجاح الرقمي', en: 'Conclusion: Launch Confidently Towards Digital Success' },     
    'blog1_conclusion_text': { ar: 'منتجاتنا وخدماتنا الرقمية تم تصميمها خصيصًا لمن يبحث عن حلول عملية وفعّالة في عالم التسويق الرقمي. بفضل المزايا المتنوعة والدعم المستمر, ستتمكن من تحسين مهاراتك, زيادة إنتاجيتك, وتحقيق دخل مستدام من خلال التفاعل مع هذه الأدوات. لا تنتظر أكثر, استكشف منتجاتنا المميزة اليوم وابدأ رحلتك نحو النجاح الرقمي بثقة وفعالية. اجعل كل نقرة وكل عملية شراء خطوة نحو هدفك الكبير.', en: 'Our digital products and services are specifically designed for those seeking practical and effective solutions in the digital marketing world. Thanks to diverse features and continuous support, you will be able to enhance your skills, increase your productivity, and achieve sustainable income by interacting with these tools. Don\'t wait any longer, explore our unique products today and embark on your journey towards digital success with confidence and efficiency. Make every click and every purchase a step towards your big goal.' },     
     
    'blog2_title': { ar: '2. أفضل الخدمات الرقمية لتعزيز حضورك وزيادة أرباحك', en: '2. Best Digital Services to Enhance Your Presence and Increase Your Profits' },     
    'blog2_p1': { ar: 'في عالم التسويق الرقمي الحديث, النجاح يعتمد بشكل كبير على استخدام الأدوات والخدمات الصحيحة التي تساعدك على إدارة أعمالك بذكاء وفعالية. نقدم لك اليوم مجموعة من الخدمات الرقمية المميزة التي صممت لتساعدك على تحسين تواجدك الرقمي, جذب المزيد من العملاء, وزيادة أرباحك بطريقة سهلة وسريعة.', en: 'In the modern digital marketing world, success largely depends on using the right tools and services that help you manage your business smartly and efficiently. Today, we offer you a range of unique digital services designed to help you improve your digital presence, attract more customers, and increase your profits quickly and easily.' },     
    'blog2_h4_1': { ar: 'أولاً: خدمات إدارة الحملات الرقمية الاحترافية', en: 'First: Professional Digital Campaign Management Services' },     
    'blog2_p2': { ar: 'هذه الخدمات تساعدك على إنشاء حملات تسويقية فعالة عبر منصات متعددة مثل وسائل التواصل الاجتماعي والبريد الإلكتروني. من خلال أدواتنا, يمكنك تتبع الأداء, تحسين استراتيجياتك, وزيادة معدل التحويل بشكل ملحوظ. كل خدمة مصممة لتوفير الوقت والجهد, مع ضمان نتائج ملموسة وسريعة. نركز على تمكينك من الوصول إلى الجمهور المستهدف بدقة متناهية, مما يقلل من تكلفة الإعلانات ويزيد من العائد على الاستثمار.', en: 'These services help you create effective marketing campaigns across multiple platforms such as social media and email. Through our tools, you can track performance, optimize your strategies, and significantly increase conversion rates. Each service is designed to save time and effort, while ensuring tangible and quick results. We focus on enabling you to reach your target audience with extreme precision, which reduces advertising costs and increases return on investment.' },     
    'blog2_p3': { ar: 'تعتبر إدارة الحملات عنصرًا حاسمًا؛ فمن خلال التتبع الدقيق لمؤشرات الأداء الرئيسية (KPIs), يمكنك تحديد نقاط القوة والضعف في استراتيجيتك. خدماتنا توفر لك لوحات تحكم متقدمة لمراقبة كل شيء بدءاً من نسبة النقر إلى الظهور (CTR) وصولاً إلى تكلفة الاكتساب (CPA).', en: 'Campaign management is a crucial element; by precisely tracking Key Performance Indicators (KPIs), you can identify the strengths and weaknesses of your strategy. Our services provide you with advanced dashboards to monitor everything from Click-Through Rate (CTR) to Cost Per Acquisition (CPA).' },     
    'blog2_h4_2': { ar: 'ثانياً: أدوات تحليل البيانات الرقمية المتطورة', en: 'Second: Advanced Digital Data Analysis Tools' },     
    'blog2_p4': { ar: 'فهم بيانات جمهورك هو مفتاح النجاح في التسويق الرقمي. نوفر لك أدوات متقدمة لتحليل حركة الزوار, معرفة اهتماماتهم, واكتشاف فرص جديدة لزيادة التفاعل. هذه الأدوات تجعل قراراتك التسويقية أكثر دقة واحترافية, وتساعدك على توجيه الموارد نحو القنوات الأكثر ربحية. تحليل البيانات يضمن لك عدم إضاعة الميزانية على قنوات غير مجدية.', en: 'Success in digital marketing depends on accurately understanding your audience. We provide you with advanced analysis tools that help you understand customer interests, track their behavior, and discover new opportunities to increase engagement. These tools make your marketing decisions more accurate and professional, and help you direct resources towards the most profitable channels. Data analysis ensures you\'t waste budget on ineffective channels.' },     
    'blog2_p5': { ar: 'على سبيل المثال, باستخدام أدواتنا, يمكنك تحديد الفئة العمرية والمنطقة الجغرافية الأكثر تفاعلاً مع عروضك, مما يسمح لك بتخصيص المحتوى والروابط لتلك الفئة تحديداً. هذا التخصيص يرفع من قيمة صفحتك ويجعلها وجهة موثوقة لجمهورك.', en: 'For example, using our tools, you can identify the age group and geographical region most engaged with your offers, which allows you to tailor content and links specifically for that segment. This customization enhances your page\'s value and makes it a trusted destination for your audience.' },     
    'blog2_h4_3': { ar: 'ثالثاً: خدمات تصميم المحتوى الرقمي المؤثر', en: 'Third: Influential Digital Content Design Services' },     
    'blog2_p6': { ar: 'المحتوى هو الملك في عالم التسويق الرقمي, وصنع محتوى جذاب ومؤثر يتطلب خبرة ووقت. نقدم لك خدمات تصميم منشورات احترافية, فيديوهات قصيرة, ورسوم توضيحية تتناسب مع جمهورك. هذا المحتوى يزيد من تفاعل الزوار ويحفزهم على التفاعل مع منتجاتك وخدماتك الرقمية. نحن نضمن أن يكون المحتوى متوافقًا مع العلامة التجارية لـ RG1Shop ومعايير الجودة العالية.', en: 'Content is king in the world of digital marketing, and creating attractive and influential content requires expertise and time. We provide you with professional post design services, short videos, and illustrative graphics that suit your audience. This content increases visitor engagement and motivates them to interact with your digital products and services. We ensure that the content is consistent with the RG1Shop brand and high-quality standards.' },     
    'blog2_p7': { ar: 'المحتوى المرئي القصير (مثل قصص Instagram أو TikTok) هو الأكثر شيوعًا حاليًا. نوفر لك قوالب وأدوات لإنشاء هذا النوع من المحتوى بسرعة, مع التركيز على الدعوة الواضحة للعمل (CTA) لزيادة النقرات على الروابط التابعة.', en: 'Short visual content (like Instagram stories or TikToks) is currently the most popular. We provide you with templates and tools to create this type of content quickly, focusing on a clear Call-to-Action (CTA) to increase clicks on affiliate links.' },     
    'blog2_h4_4': { ar: 'رابعاً: الدعم والإرشاد المستمر لتحقيق النمو', en: 'Fourth: Continuous Support and Guidance for Growth' },     
    'blog2_p8': { ar: 'لا يقتصر دورنا على تقديم المنتجات والخدمات فقط, بل نوفر دعمًا متواصلاً لمساعدتك على تحقيق أقصى استفادة. سواء كنت مبتدئًا أو محترفًا, يمكنك الوصول إلى نصائح عملية, إرشادات واضحة, ودعم مباشر لحل أي مشكلة تواجهها أثناء استخدام الخدمات.', en: 'Our role is not limited to providing products and services; we also offer continuous support to help you achieve maximum benefit. Whether you are a beginner or a professional, you can access practical tips, clear guidelines, and direct support to solve any problem you encounter while using the services.' },     
    'blog2_list1_item1': { ar: 'ابدأ باختيار الخدمات التي تتوافق مع أهدافك الرقمية الحالية وتخدم هدفك الرئيسي في زيادة الأرباح.', en: 'Start by choosing services that align with your current digital goals and serve your primary objective of increasing profits.' },     
    'blog2_list1_item2': { ar: 'جرّب الأدوات والخدمات المتاحة لفترة قصيرة قبل الالتزام الكامل لتحديد الأنسب لنموذج عملك.', en: 'Try out available tools and services for a short period before full commitment to determine what best suits your business model.' },     
    'blog2_list1_item3': { ar: 'استخدم البيانات والتحليلات لاتخاذ قرارات تسويقية مستنيرة ومبنية على أرقام حقيقية وليست مجرد تخمينات.', en: 'Use data and analytics to make informed marketing decisions based on real numbers, not just guesses.' },     
    'blog2_list1_item4': { ar: 'اجعل محتوى الصفحة جذابًا مع صور ورسوم توضيحية متوافقة مع الخدمة المعروضة, فالمظهر البصري مهم جداً.', en: 'Make the page content attractive with images and illustrations that are consistent with the service offered, as visual appeal is very important.' },     
    'blog2_conclusion_title': { ar: 'خاتمة: الاستثمار في الأدوات الرقمية هو استثمار في المستقبل', en: 'Conclusion: Investing in Digital Tools is an Investment in the Future' },     
    'blog2_conclusion_text': { ar: 'باستخدام خدماتنا الرقمية المتميزة, ستتمكن من تعزيز حضورك على الإنترنت, تحسين تفاعل جمهورك, وزيادة أرباحك بشكل مستمر. كل خدمة مصممة لتكون سهلة الاستخدام وفعّالة, مما يمنحك ميزة تنافسية كبيرة في عالم التسويق الرقمي. لا تفوت الفرصة, ابدأ بالاستفادة من هذه الخدمات اليوم وارتقِ بأعمالك إلى المستوى التالي. تذكر أن الاستثمار في الأدوات الرقمية هو استثمار في المستقبل.', en: 'By using our premium digital services, you will be able to enhance your online presence, improve audience engagement, and consistently increase your profits. Every service is designed to be easy to use and effective, giving you a significant competitive edge in the digital marketing world. Don’t miss the opportunity; start benefiting from these services today and take your business to the next level. Remember that investing in digital tools is an investment in the future.' },     
};

// =======================================================================     
// 🔥 الوظائف المنطقية (Logic)     
// =======================================================================     

function updateTranslations() {
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[key]) {
            el.innerText = translations[key][currentLang];
        }
    });
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('rg1_lang', lang);
    updateTranslations();
    forceScrollToTop(); 
}

// تشغيل الترجمة عند التحميل
document.addEventListener('DOMContentLoaded', updateTranslations);
