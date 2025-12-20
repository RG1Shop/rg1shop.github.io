// ======================================================================= 
// 🔥 دالة الترجمة المُحسّنة والكاملة 
// ======================================================================= 
function applyLanguage() { 
    // 1️⃣ تغيير اتجاه الصفحة و lang attribute 
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr'); 
    document.documentElement.setAttribute('lang', currentLang); 
    document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr'; // تحديث لـ body أيضاً 
 
    // 2️⃣ ترجمة جميع العناصر التي تحتوي على data-key 
    document.querySelectorAll('[data-key]').forEach(element => { 
        const key = element.getAttribute('data-key'); 
        if (translations[key] && translations[key][currentLang]) { 
            const text = translations[key][currentLang]; 
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') { 
                 // استخدم data-placeholder-key للـ placeholders 
                 const placeholderKey = element.getAttribute('data-placeholder-key'); 
                 if (placeholderKey && translations[placeholderKey]) { 
                    element.placeholder = translations[placeholderKey][currentLang]; 
                 } 
            } else if (element.matches('.main-categories-nav span') || element.matches('.secondary-bottom-nav-wrapper .nav-link span') || element.matches('.subcategory-card span')) { 
                // حالة خاصة لـ span داخل الروابط (Main Nav & Subcategory Cards) 
                element.textContent = text; 
            } 
            else if (element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4') { 
                // معالجة عناوين الأقسام الرئيسية والأقسام الفرعية للحفاظ على الإيموجي أو الأيقونات 
                const originalContent = element.innerHTML; 
                const emojiMatch = originalContent.match(/^((\p{Emoji}|\p{Emoji_Modifier_Base}|\p{Emoji_Modifier}|\p{Emoji_Component}|\p{Extended_Pictographic})\s*)+/u); // Unicode emoji regex 
                const emojiPrefix = emojiMatch ? emojiMatch[0] : ''; 
                     
                const iconMatch = originalContent.match(/<i[^>]*><\/i>/i); 
                const iconPrefix = iconMatch ? iconMatch[0] : ''; 
 
                element.innerHTML = emojiPrefix + iconPrefix + ' ' + text; 
            } 
            else if (element.tagName === 'SMALL' && key === 'blog_date_prefix') { // معالجة خاصة لـ small في المدونة 
                element.textContent = text + '2025-11-25'; // التاريخ ثابت 
            } 
            else if (element.matches('strong[data-key="important_note"]')) { 
                // هذا الـ strong سيكون فارغاً والنص في الـ span المجاور 
                // لا تفعل شيئاً هنا، الـ span المجاور سيتولى الترجمة 
            } 
            else { 
                element.textContent = text; 
            } 
        } 
    }); 
         
    // 5️⃣ إعادة رسم المنتجات والشركاء باللغة الجديدة 
    renderProducts('all'); 
    renderAffiliates(); 
    translateBlogContent(); // 🔥 استدعاء دالة ترجمة المدونة 
    // renderBlog(); // لم نعد بحاجة لهذه لأن translateBlogContent ستتكفل بالترجمة 
 
    // 6️⃣ تحديث أيقونة اللغة 
    document.getElementById('langToggle').setAttribute('data-lang', currentLang); 
    console.log(`✅ Language applied: ${currentLang}`); 
} 
 
// ======================================================================= 
// --- وظائف الكوكيز (Cookie Banner) --- 
// ======================================================================= 
function initializeCookieBanner() { 
    const banner = document.getElementById('cookie-banner'); 
    const acceptButton = document.getElementById('accept-cookies'); 
    const rejectButton = document.getElementById('reject-cookies'); 
 
    if (localStorage.getItem('rg1_cookie_consent') === 'accepted') { 
        if (banner) banner.style.display = 'none'; 
    } else if (localStorage.getItem('rg1_cookie_consent') === 'rejected') { 
        if (banner) banner.style.display = 'none'; 
    } else { 
        if (banner) banner.style.display = 'flex'; 
    } 
 
    if (acceptButton) { 
        acceptButton.addEventListener('click', () => { 
            localStorage.setItem('rg1_cookie_consent', 'accepted'); 
            if (banner) banner.style.display = 'none'; 
        }); 
    } 
 
    if (rejectButton) { 
        rejectButton.addEventListener('click', () => { 
            localStorage.setItem('rg1_cookie_consent', 'rejected'); 
            if (banner) banner.style.display = 'none'; 
        }); 
    } 
} 
 
// الدالة المسؤولة عن تحويل الروابط 
function fixLegalLinks() { 
    // نحدد جميع الروابط في الصفحة 
    const allLinks = document.querySelectorAll('a[href]'); 
     
    allLinks.forEach(link => { 
        const href = link.getAttribute('href'); 
         
        // إذا كان الرابط هو #privacy أو #policy 
        if (href && (href.includes('#privacy') || href.includes('#policy'))) { 
            link.setAttribute('href', 'privacy.html'); 
            link.classList.remove('nav-link'); // نلغي كود التنقل الداخلي الخاص بك 
            // لا حاجة لإزالة event listener هنا إذا لم يكن قد تم إضافته 
        } 
         
        // إذا كان الرابط هو #terms أو #conditions 
        if (href && (href.includes('#terms') || href.includes('#conditions'))) { 
            link.setAttribute('href', 'terms.html'); 
            link.classList.remove('nav-link'); // نلغي كود التنقل الداخلي 
            // لا حاجة لإزالة event listener هنا إذا لم يكن قد تم إضافته 
        } 
    }); 
} 
 
function fixTopAdPosition() { 
    const nav = document.getElementById('main-categories-nav'); 
    const ad = document.getElementById('top-fixed-ad'); 
 
    if (nav && ad) { 
        const navHeight = nav.offsetHeight; 
        ad.style.marginTop = navHeight + "px"; 
    } 
} 

