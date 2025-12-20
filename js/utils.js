// 🔥 دالة تضمين ملفات HTML خارجية (لـ GitHub Pages) 
function includeHTML() { 
  const elements = document.querySelectorAll('[data-include]'); 
  elements.forEach(element => { 
    const file = element.getAttribute('data-include'); 
    fetch(file) 
      .then(response => response.text()) 
      .then(data => { 
        element.outerHTML = data; 
        // إعادة تشغيل التهيئة بعد التضمين 
        setTimeout(initializeApp, 100); 
      }) 
      .catch(err => console.error('Error loading include:', file, err)); 
  }); 
} 
 
// دالة الترجمة المُحسّنة 
function applyLanguage() { 
  document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr'); 
  document.documentElement.setAttribute('lang', currentLang); 
  document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr'; 
 
  document.querySelectorAll('[data-key]').forEach(element => { 
    const key = element.getAttribute('data-key'); 
    if (translations[key] && translations[key][currentLang]) { 
      element.textContent = translations[key][currentLang]; 
    } 
  }); 
} 
 
// إصلاح روابط الخصوصية والشروط 
function fixLegalLinks() { 
  const allLinks = document.querySelectorAll('a[href]'); 
  allLinks.forEach(link => { 
    const href = link.getAttribute('href'); 
    if (href && (href.includes('#privacy') || href.includes('#policy'))) { 
      link.setAttribute('href', 'privacy.html'); 
    } 
    if (href && (href.includes('#terms') || href.includes('#conditions'))) { 
      link.setAttribute('href', 'terms.html'); 
    } 
  }); 
} 
 
// تهيئة لافتة الكوكيز 
function initializeCookieBanner() { 
  const banner = document.getElementById('cookie-banner'); 
  if (localStorage.getItem('rg1_cookie_consent') !== null) { 
    banner.style.display = 'none'; 
  } else { 
    banner.style.display = 'flex'; 
  } 
} 
 
// إصلاح موضع الإعلان العلوي 
function fixTopAdPosition() { 
  const nav = document.getElementById('main-categories-nav'); 
  const ad = document.getElementById('top-fixed-ad'); 
  if (nav && ad) { 
    ad.style.marginTop = nav.offsetHeight + "px"; 
  } 
} 

