// المحرك الذكي لـ RG1Shop - حماية الروابط وتفعيل الصفحات
document.addEventListener('DOMContentLoaded', () => {
    console.log("RG1Shop Engine Started...");

    // 1. فك القيود عن روابط الخصوصية والشروط والمدونة
    const legalLinks = {
        'privacy': 'privacy.html',
        'terms': 'terms.html',
        'conditions': 'terms.html'
    };

    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        for (let key in legalLinks) {
            if (href && href.includes(key)) {
                link.setAttribute('href', legalLinks[key]);
                link.setAttribute('target', '_self'); // تفتح في نفس الصفحة لعدم العودة للرئيسية
            }
        }
    });
});
