/**
 * وظيفة تطبيق اللغة على جميع العناصر التي تحتوي على data-key
 */
function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

/**
 * وظيفة ضبط موضع الإعلان العلوي بناءً على ارتفاع الهيدر
 */
function fixTopAdPosition() {
    const nav = document.getElementById('main-categories-nav');
    const ad = document.getElementById('top-fixed-ad');

    if (nav && ad) {
        const navHeight = nav.offsetHeight;
        ad.style.top = "0";
        nav.style.top = ad.offsetHeight + "px";
    }
}

/**
 * وظيفة لإصلاح الروابط القانونية وتوجيهها للملفات الصحيحة
 */
function fixLegalLinks() {
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === '#privacy') {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showSection('privacy');
            });
        }
    });
}

// تشغيل ضبط الإعلانات عند تغيير حجم النافذة
window.addEventListener('resize', fixTopAdPosition);
