// المحرك المطور لـ RG1Shop - نسخة الحماية القصوى
document.addEventListener('DOMContentLoaded', () => {
    console.log("RG1Shop Pro-Engine Active...");

    // 1. تفعيل نظام اللغات والترجمة آلياً
    const lang = document.documentElement.lang || 'ar';
    if (typeof translations !== 'undefined' && translations[lang]) {
        const content = translations[lang];
        // تحديث النصوص الأساسية في الصفحة إذا وجدت
        const loadingText = document.getElementById('loading-spinner');
        if (loadingText) loadingText.innerText = content.loading;
    }

    // 2. نظام حماية الروابط القانونية ومنع "قفزة الصفحة"
    const protectLinks = () => {
        document.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                // توجيه روابط الخصوصية والشروط للملفات المستقلة
                if (href.includes('privacy')) link.href = 'privacy.html';
                if (href.includes('terms') || href.includes('الشروط')) link.href = 'terms.html';
                
                // منع الروابط الميتة من إعادة تحميل الصفحة الرئيسية
                if (href === '#' || href === '') {
                    link.addEventListener('click', (e) => e.preventDefault());
                }
            }
        });
    };

    protectLinks();
    console.log("Links Secured 100%");
});
