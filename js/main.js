// ======================================================================= 
// --- الإطلاق النهائي (AUTO-INIT) --- 
// ======================================================================= 
 
// دالة لجلب وتضمين محتوى HTML 
async function loadHtmlContent(placeholderId, filePath) { 
    const placeholder = document.getElementById(placeholderId); 
    if (placeholder) { 
        try { 
            const response = await fetch(filePath); 
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`); 
            } 
            const html = await response.text(); 
            placeholder.innerHTML = html; 
        } catch (error) { 
            console.error(`Failed to load ${filePath}:`, error); 
        } 
    } 
} 
 
document.addEventListener('DOMContentLoaded', async () => { 
    // جلب وتضمين جميع أجزاء HTML 
    await loadHtmlContent('header-placeholder', 'includes/header.html'); 
    await loadHtmlContent('sidebar-placeholder', 'includes/sidebar.html'); 
    await loadHtmlContent('main-sections-placeholder', 'includes/main-sections.html'); 
    await loadHtmlContent('products-section-placeholder', 'includes/products-section.html'); 
    await loadHtmlContent('affiliates-section-placeholder', 'includes/affiliates-section.html'); 
    await loadHtmlContent('blog-section-placeholder', 'includes/blog-section.html'); 
    await loadHtmlContent('contact-section-placeholder', 'includes/contact-section.html'); 
    await loadHtmlContent('privacy-section-placeholder', 'includes/privacy-section.html'); 
    await loadHtmlContent('terms-section-placeholder', 'includes/terms-section.html'); 
    await loadHtmlContent('about-section-placeholder', 'includes/about-section.html'); 
    await loadHtmlContent('footer-placeholder', 'includes/footer.html'); 
 
    // تهيئة الوضع النهاري/الليلي واللغة عند تحميل الصفحة 
    const body = document.documentElement; 
    body.setAttribute('data-theme', currentTheme); 
    const themeIcon = document.querySelector('#themeToggle i'); 
    if (themeIcon) { 
        themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; 
    } 
 
    const langToggleBtn = document.getElementById('langToggle'); 
    if (langToggleBtn) { // التأكد من وجود الزر قبل محاولة الوصول إليه 
        langToggleBtn.setAttribute('data-lang', currentLang); 
    } 
 
    // إضافة مستمعي الأحداث لأزرار الوضع واللغة 
    const themeToggle = document.getElementById('themeToggle'); 
    if (themeToggle) { 
        themeToggle.addEventListener('click', () => { 
            const isDark = body.getAttribute('data-theme') === 'dark'; 
            currentTheme = isDark ? 'light' : 'dark'; 
            body.setAttribute('data-theme', currentTheme); 
            localStorage.setItem('rg1_theme', currentTheme); 
            if (themeIcon) { 
                themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; 
            } 
        }); 
    } 
 
    if (langToggleBtn) { 
        langToggleBtn.addEventListener('click', () => { // استخدام langToggleBtn الذي يمثل الزر الصحيح 
            currentLang = currentLang === 'ar' ? 'en' : 'ar'; 
            localStorage.setItem('rg1_lang', currentLang); 
            applyLanguage(); // 🔥 تطبيق اللغة فوراً بدون إعادة تحميل! 
            console.log(`🔄 Language switched to: ${currentLang}`); 
        }); 
    } 
 
    initializeCookieBanner(); // استدعاء وظيفة تهيئة لافتة الكوكيز 
    applyLanguage(); // 🔥 تطبيق اللغة فور تحميل الصفحة (قبل أي عمليات أخرى قد تعتمد على اللغة) 
    setPaymentLinks(); // تعيين روابط PayPal 
     
    // معالجة نموذج الاتصال 
    const contactForm = document.getElementById('contactForm'); 
    if (contactForm) { 
        contactForm.addEventListener('submit', handleContactFormSubmission); 
    } 
 
    fixLegalLinks(); // تهيئة الروابط القانونية لتحويلها إلى صفحات منفصلة 
    window.addEventListener('load', fixLegalLinks); // تشغيلها عند التحميل 
    window.addEventListener('load', fixTopAdPosition); 
    window.addEventListener('resize', fixTopAdPosition); 
 
    console.log(`RG1Shop App Initialized: All requested features applied.`); 
 
    const mainNavLinks = document.querySelectorAll('.main-categories-nav .main-nav-link'); 
    const secondaryNavLinks = document.querySelectorAll('.secondary-bottom-nav-wrapper .nav-link'); 
    const allSections = document.querySelectorAll('.section'); 
 
    const initialActiveSection = document.getElementById('events-section'); 
    if (initialActiveSection) { 
        allSections.forEach(sec => sec.classList.remove('active')); 
        initialActiveSection.classList.add('active'); 
        const initialActiveLink = document.querySelector('.main-categories-nav .main-nav-link[href="#events-section"]'); 
        if(initialActiveLink) { 
            mainNavLinks.forEach(l => l.classList.remove('active-link')); 
            initialActiveLink.classList.add('active-link'); 
        } 
    } 
 
    mainNavLinks.forEach(link => { 
        link.addEventListener('click', function(e) { 
            e.preventDefault(); 
 
            allSections.forEach(sec => sec.classList.remove('active')); 
            mainNavLinks.forEach(l => l.classList.remove('active-link')); 
            secondaryNavLinks.forEach(l => l.classList.remove('active-link')); 
 
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId); 
 
            if(targetSection) targetSection.classList.add('active'); 
            this.classList.add('active-link'); 
 
            if (targetId === 'products-section') { 
                renderProducts('all'); 
            } 
            if (targetId === 'blog-section') { 
                renderBlog(); 
            } 
 
            const topNavHeight = document.getElementById('main-categories-nav').offsetHeight; 
            const topPosition = targetSection.offsetTop - topNavHeight; 
 
            window.scrollTo({ 
                top: topPosition > 0 ? topPosition : 0, 
                behavior: 'smooth' 
            }); 
 
            if (window.dataLayer) { 
                dataLayer.push({ 
                    'event': 'section_view', 
                    'pagePath': '/' + targetId 
                }); 
            } 
        }); 
    }); 
 
    secondaryNavLinks.forEach(link => { 
        link.addEventListener('click', function(e) { 
            e.preventDefault(); 
 
            allSections.forEach(sec => sec.classList.remove('active')); 
            mainNavLinks.forEach(l => l.classList.remove('active-link')); 
            secondaryNavLinks.forEach(l => l.classList.remove('active-link')); 
 
            const targetId = this.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId); 
 
            if(targetSection) targetSection.classList.add('active'); 
            this.classList.add('active-link'); 
 
            if (targetId === 'products-section') { 
                renderProducts('all'); 
            } 
            if (targetId === 'blog-section') { 
                renderBlog(); 
            } 
 
            const topNavHeight = document.getElementById('main-categories-nav').offsetHeight; 
            const topPosition = targetSection.offsetTop - topNavHeight; 
 
            window.scrollTo({ 
                top: topPosition > 0 ? topPosition : 0, 
                behavior: 'smooth' 
            }); 
 
            if (window.dataLayer) { 
                dataLayer.push({ 
                    'event': 'section_view', 
                    'pagePath': '/' + targetId 
                }); 
            } 
        }); 
    }); 
 
    secondaryNavLinks.forEach(l => l.classList.remove('active-link')); 
}); 

