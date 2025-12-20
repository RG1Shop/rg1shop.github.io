/* main.js - المحرك الأساسي لتطبيق RG1Shop
   مستخرج من الكود الأصلي لـ aladdan بنسبة 100%
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. إدارة التنقل بين الأقسام (حفلات، سياحة، إلخ)
    const navLinks = document.querySelectorAll('.main-nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // تحديث الحالة النشطة للأزرار
            navLinks.forEach(nl => nl.classList.remove('active-link'));
            link.classList.add('active-link');

            // إظهار القسم المطلوب وإخفاء الباقي بسلاسة
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                    // تمرير الصفحة للأعلى عند التغيير
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            });
        });
    });

    // 2. إدارة الوضع الليلي (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        
        // تغيير الأيقونة
        themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
        
        // حفظ التفضيلات
        localStorage.setItem('theme', newTheme);
    });

    // 3. إدارة اللغات (AR/EN)
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', () => {
        const currentLang = langToggle.getAttribute('data-lang');
        const nextLang = currentLang === 'ar' ? 'en' : 'ar';
        
        langToggle.setAttribute('data-lang', nextLang);
        langToggle.textContent = nextLang.toUpperCase();
        document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = nextLang;
        
        // استدعاء دالة الترجمة من utils.js مستقبلاً
        console.log(`Language changed to: ${nextLang}`);
    });

    // 4. إصلاح مواقع الإعلانات العلوية
    function fixAdLayout() {
        const nav = document.getElementById('main-categories-nav');
        const ad = document.getElementById('top-fixed-ad');
        if (nav && ad) {
            ad.style.marginTop = `${nav.offsetHeight}px`;
        }
    }

    window.addEventListener('load', fixAdLayout);
    window.addEventListener('resize', fixAdLayout);

    // 5. تهيئة المكونات الأولية (مثل الكوكيز)
    if (!localStorage.getItem('cookies-accepted')) {
        const footer = document.querySelector('footer');
        footer.insertAdjacentHTML('beforebegin', Components.createCookieBanner());
        
        document.getElementById('accept-cookies')?.addEventListener('click', () => {
            document.getElementById('cookie-banner').remove();
            localStorage.setItem('cookies-accepted', 'true');
        });
    }
});
