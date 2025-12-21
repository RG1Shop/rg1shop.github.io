// الكود الكامل لربط الأقسام في مشروع aladdan
const app = {
    // جلب البيانات من data.js
    data: window.siteData || {},

    // وظيفة تحميل الأجزاء من مجلد includes
    async init() {
        const sections = [
            { id: 'header-root', file: 'header.html' },
            { id: 'sidebar-root', file: 'sidebar.html' },
            { id: 'footer-root', file: 'footer.html' },
            { id: 'dynamic-sections', file: 'main-sections.html' },
            { id: 'blog-posts-container', file: 'blog-section.html' }
        ];

        for (const section of sections) {
            const el = document.getElementById(section.id);
            if (el) {
                try {
                    const response = await fetch(`includes/${section.file}`);
                    if (response.ok) {
                        el.innerHTML = await response.text();
                    }
                } catch (err) {
                    console.error("Error loading:", section.file, err);
                }
            }
        }
        this.applyTranslations();
    },

    // حل مشكلة undefined عبر توزيع البيانات
    applyTranslations() {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (this.data[key]) {
                el.textContent = this.data[key];
            }
        });
    }
};

// تشغيل النظام فور جاهزية الصفحة
document.addEventListener('DOMContentLoaded', () => app.init());
