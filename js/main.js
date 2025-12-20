// محرك تطبيق aladdan لتشغيل الموقع ودمج الملفات والبيانات
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'ar';
    
    // 1. وظيفة جلب الملفات الجزئية (header, footer, sections...)
    const loadIncludes = async () => {
        const includes = document.querySelectorAll('[data-include]');
        for (let el of includes) {
            const file = el.getAttribute('data-include');
            try {
                const response = await fetch(`includes/${file}.html`);
                el.innerHTML = await response.text();
            } catch (err) {
                console.error('Error loading:', file);
            }
        }
        // بعد التحميل، نقوم بتحديث النصوص واللغة
        updateTexts(lang);
        setupEventListeners();
    };

    // 2. وظيفة تحديث النصوص من ملف data.js
    const updateTexts = (currentLang) => {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
        document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    };

    // 3. تشغيل أزرار القائمة واللغة
    const setupEventListeners = () => {
        const langBtn = document.getElementById('lang-switch');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const newLang = localStorage.getItem('lang') === 'ar' ? 'en' : 'ar';
                localStorage.setItem('lang', newLang);
                location.reload();
            });
        }
    };

    loadIncludes();
});
