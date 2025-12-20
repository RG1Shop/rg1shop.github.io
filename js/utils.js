/* utils.js - الأدوات المساعدة والوظائف العامة
   مستخرج من الكود الأصلي لـ aladdan بنسبة 100%
*/

const Utils = {
    // 1. إدارة التخزين المحلي (LocalStorage) لضمان السرعة
    storage: {
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error("Error saving to localStorage", e);
            }
        },
        get(key) {
            const value = localStorage.getItem(key);
            try {
                return value ? JSON.parse(value) : null;
            } catch (e) {
                return value;
            }
        }
    },

    // 2. معالجة النصوص (تنسيق العناوين أو اختصار النصوص الطويلة)
    truncateText(text, limit) {
        if (text.length <= limit) return text;
        return text.slice(0, limit) + "...";
    },

    // 3. التحقق من صحة البيانات (إيميل، أرقام)
    isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // 4. دالة التحويل بين اللغات للأجزاء الثابتة
    translations: {
        ar: {
            home: "الرئيسية",
            contact: "تواصل معنا",
            loading: "جاري التحميل..."
        },
        en: {
            home: "Home",
            contact: "Contact Us",
            loading: "Loading..."
        }
    },

    getTranslation(key, lang) {
        return this.translations[lang] ? this.translations[lang][key] : key;
    },

    // 5. محرك التأثيرات البصرية البسيطة (Smooth Scroll)
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};
