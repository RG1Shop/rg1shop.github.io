// دالة تبديل الأقسام وتحديث المحتوى
function switchCategory(category) {
    // 1. تحديث شكل الأزرار (Active State)
    document.querySelectorAll('.main-nav-link').forEach(link => {
        link.classList.remove('active-link');
        if(link.getAttribute('onclick').includes(category)) {
            link.classList.add('active-link');
        }
    });

    // 2. استدعاء المحرك لعرض منتجات هذا القسم فقط
    if (typeof renderProducts === 'function') {
        renderProducts(category);
    }
}

// دالة تغيير اللغة (للمستقبل)
function changeLanguage(lang) {
    localStorage.setItem('lang', lang);
    location.reload();
}

// تنفيذ الإجراءات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    console.log("RG1Shop Engine Started...");
    // التأكد من ظهور قسم الحفلات كأول قسم تلقائياً
    if (typeof renderProducts === 'function') {
        renderProducts('events');
    }
});
