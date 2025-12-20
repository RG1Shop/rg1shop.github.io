// الانتظار حتى تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {
    console.log("aladdan App is running 100%");

    // 1. تهيئة الموقع (بيانات أولية)
    renderProducts();
    renderAffiliates();
    renderBlog('ar'); // البدء بالعربية
    applyLanguage('ar');
    fixTopAdPosition();

    // 2. إدارة التنقل بين الأقسام
    window.handleNav = function(element) {
        const targetId = element.getAttribute('href').substring(1);
        
        // إخفاء جميع الأقسام
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        // إظهار القسم المطلوب
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // تحديث حالة الأيقونة النشطة (اللون الأحمر)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active-red');
        });
        element.classList.add('active-red');
    };

    // 3. مستمع تغيير اللغة
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            applyLanguage(selectedLang);
            renderBlog(selectedLang);
        });
    }

    // 4. مستمع الوضع الليلي
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const icon = themeBtn.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });
    }
});
