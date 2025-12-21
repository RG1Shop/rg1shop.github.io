// المتغيرات الأساسية العامة 
let currentLang = localStorage.getItem('rg1_lang') || 'ar'; 
let currentTheme = localStorage.getItem('rg1_theme') || 'light'; 
 
// وظائف مساعدة 
function getTranslation(key) { 
    if (window.translations && window.translations[key] && window.translations[key][currentLang]) { 
        return window.translations[key][currentLang]; 
    } 
    return ''; // Return empty string if translation not found 
} 
 
function applyLanguage() { 
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr'); 
    document.documentElement.setAttribute('lang', currentLang); 
    document.body.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr'; 
 
    document.querySelectorAll('[data-key]').forEach(element => { 
        const key = element.getAttribute('data-key'); 
        if (window.translations && window.translations[key] && window.translations[key][currentLang]) { 
            const text = window.translations[key][currentLang]; 
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') { 
                const placeholderKey = element.getAttribute('data-placeholder-key'); 
                if (placeholderKey && window.translations[placeholderKey]) { 
                    element.placeholder = window.translations[placeholderKey][currentLang]; 
                } 
            } else if (element.matches('.main-categories-nav span') || element.matches('.secondary-bottom-nav-wrapper .nav-link span') || element.matches('.subcategory-card span')) { 
                element.textContent = text; 
            } else if (element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'H4') { 
                const originalContent = element.innerHTML; 
                const emojiMatch = originalContent.match(/^((\p{Emoji}|\p{Emoji_Modifier_Base}|\p{Emoji_Modifier}|\p{Emoji_Component}|\p{Extended_Pictographic})\s*)+/u); 
                const emojiPrefix = emojiMatch ? emojiMatch[0] : ''; 
                const iconMatch = originalContent.match(/<i[^>]*><\/i>/i); 
                const iconPrefix = iconMatch ? iconMatch[0] : ''; 
                element.innerHTML = emojiPrefix + iconPrefix + ' ' + text; 
            } else if (element.tagName === 'SMALL' && key === 'blog_date_prefix') { 
                element.textContent = text + '2025-11-25'; 
            } else if (element.matches('strong[data-key="important_note"]')) { 
                // Handled by adjacent span 
            } else { 
                element.textContent = text; 
            } 
        } 
    }); 
 
    renderProducts('all'); 
    renderAffiliates(); 
    translateBlogContent(); 
 
    document.getElementById('langToggle').setAttribute('data-lang', currentLang); 
    console.log(`✅ Language applied: ${currentLang}`); 
} 
 
function renderProducts(filterCategory) { 
    const container = document.getElementById('products-container'); 
    if (!container) return; 
    container.innerHTML = ''; 
 
    const actualFilter = (filterCategory === 'all') ? null : filterCategory; 
    window.products.forEach(product => { 
        if (actualFilter === null || product.category === actualFilter) { 
            const card = document.createElement('div'); 
            card.className = 'product-card'; 
            card.setAttribute('data-category', product.category); 
            card.innerHTML = `<img src="${product.image}" alt="${product.name[currentLang]}" loading="lazy" style="width:100%; height:auto; border-radius: 14px; margin-bottom: 10px;" /> 
                              <h3 style="font-size:1.1em; color: var(--accent-primary);">${product.name[currentLang]}</h3> 
                              <p style="color: var(--text-secondary); margin-bottom: 10px; font-size:0.9em;">${product.price[currentLang]}</p> 
                              <a href="${product.link}" target="_blank" class="btn" style="width:100%; text-align:center; display:block; background:var(--accent-success); text-decoration:none; font-weight: bold;">${currentLang === 'ar' ? 'عرض التفاصيل' : 'View Details'}</a>`; 
            container.appendChild(card); 
        } 
    }); 
} 
 
function renderAffiliates() { 
    const affiliatesGrid = document.getElementById('affiliates-grid'); 
    if (!affiliatesGrid) return; 
    affiliatesGrid.innerHTML = ''; 
 
    window.affiliatePlatforms.forEach(platform => { 
        const platformDiv = document.createElement('a'); 
        platformDiv.href = platform.link; 
        platformDiv.target = '_blank'; 
        platformDiv.className = 'affiliate-link-card'; 
        platformDiv.style.cssText = 'text-decoration:none; display:flex; flex-direction: column; align-items: center; justify-content: center; gap:8px;'; 
        platformDiv.innerHTML = ` 
            <img src="${platform.img}" alt="${platform.name[currentLang]}" style="width:48px; height:48px; object-fit:contain; border-radius: 14px;"> 
            <span style="font-size:1.1em; font-weight:bold; color: var(--accent-primary);">${platform.name[currentLang]}</span> 
        `; 
        affiliatesGrid.appendChild(platformDiv); 
    }); 
} 
     
function translateBlogContent() { 
    for (let i = 1; i <= 10; i++) { 
        const blogCard = document.querySelector(`.blog-card[data-blog-id="${i}"]`); 
        if (blogCard) { 
            const titleElement = blogCard.querySelector(`h3[data-key="blog${i}_title"]`); 
            if (titleElement && window.translations[`blog${i}_title`]) titleElement.textContent = window.translations[`blog${i}_title`][currentLang]; 
                 
            const dateElement = blogCard.querySelector(`small[data-key="blog_date_prefix"]`); 
            if (dateElement && window.translations['blog_date_prefix']) dateElement.textContent = window.translations['blog_date_prefix'][currentLang] + '2025-11-25'; 
 
            const p1Element = blogCard.querySelector(`p[data-key="blog${i}_p1"]`); 
            if (p1Element && window.translations[`blog${i}_p1`]) p1Element.textContent = window.translations[`blog${i}_p1`][currentLang]; 
 
            for (let h = 1; h <= 4; h++) { 
                const h4Element = blogCard.querySelector(`h4[data-key="blog${i}_h4_${h}"]`); 
                if (h4Element && window.translations[`blog${i}_h4_${h}`]) h4Element.textContent = window.translations[`blog${i}_h4_${h}`][currentLang]; 
                     
                const pElement1 = blogCard.querySelector(`p[data-key="blog${i}_p${(h*2)}"]`); 
                if (pElement1 && window.translations[`blog${i}_p${(h*2)}`]) pElement1.textContent = window.translations[`blog${i}_p${(h*2)}`][currentLang]; 
                     
                const pElement2 = blogCard.querySelector(`p[data-key="blog${i}_p${(h*2)+1}"]`); 
                if (pElement2 && window.translations[`blog${i}_p${(h*2)+1}`]) pElement2.textContent = window.translations[`blog${i}_p${(h*2)+1}`][currentLang]; 
            } 
 
            const ulElement = blogCard.querySelector('ul'); 
            if (ulElement) { 
                const listItems = ulElement.querySelectorAll('li span'); 
                listItems.forEach((span, index) => { 
                    const key = `blog${i}_list1_item${index + 1}`; 
                    if (window.translations[key] && window.translations[key][currentLang]) { 
                        span.textContent = window.translations[key][currentLang]; 
                    } 
                }); 
            } 
                 
            const conclusionTitleElement = blogCard.querySelector(`h4[data-key="blog${i}_conclusion_title"]`); 
            if (conclusionTitleElement && window.translations[`blog${i}_conclusion_title`]) conclusionTitleElement.textContent = window.translations[`blog${i}_conclusion_title`][currentLang]; 
                 
            const conclusionTextElement = blogCard.querySelector(`p[data-key="blog${i}_conclusion_text"]`); 
            if (conclusionTextElement && window.translations[`blog${i}_conclusion_text`]) conclusionTextElement.textContent = window.translations[`blog${i}_conclusion_text`][currentLang]; 
        } 
    } 
} 
 
function renderBlog() { 
    translateBlogContent(); 
} 
 
function setPaymentLinks() { 
    const paypalButtons = document.querySelectorAll('[id^="paypal-support-button"]'); 
    paypalButtons.forEach(button => { 
        button.href = 'https://www.paypal.com/ncp/payment/QTMEP82WWYHQ2'; 
    }); 
} 
 
function handleContactFormSubmission(e) { 
    e.preventDefault(); 
    const emailField = document.getElementById('contact-email-link'); 
    const targetEmail = emailField ? emailField.href.replace('mailto:', '') : 'a.laghrifi@outlook.fr'; 
 
    alert(`${currentLang === 'ar' ? 'تم استلام رسالتك بنجاح! سيتم توجيهها إلى البريد الإلكتروني: ' : 'Your message has been received successfully! It will be directed to the email: '}${targetEmail}.`); 
    this.reset(); 
} 
 
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
 
function fixLegalLinks() { 
    const allLinks = document.querySelectorAll('a[href]'); 
     
    allLinks.forEach(link => { 
        const href = link.getAttribute('href'); 
         
        if (href && (href.includes('#privacy-policy-full') || href.includes('#privacy'))) { 
            link.setAttribute('href', 'privacy.html'); 
            link.classList.remove('nav-link'); 
            link.removeEventListener('click', function(e) { 
                e.preventDefault(); 
            }); 
        } 
         
        if (href && (href.includes('#terms-conditions-full') || href.includes('#terms'))) { 
            link.setAttribute('href', 'terms.html'); 
            link.classList.remove('nav-link'); 
            link.removeEventListener('click', function(e) { 
                e.preventDefault(); 
            }); 
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
 
document.addEventListener('DOMContentLoaded', () => { 
    const body = document.documentElement; 
    body.setAttribute('data-theme', currentTheme); 
    const themeIcon = document.querySelector('#themeToggle i'); 
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; 
 
    const langToggleBtn = document.getElementById('langToggle'); 
    langToggleBtn.setAttribute('data-lang', currentLang); 
 
    document.getElementById('themeToggle').addEventListener('click', () => { 
        const isDark = body.getAttribute('data-theme') === 'dark'; 
        currentTheme = isDark ? 'light' : 'dark'; 
        body.setAttribute('data-theme', currentTheme); 
        localStorage.setItem('rg1_theme', currentTheme); 
        themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; 
    }); 
 
    langToggleBtn.addEventListener('click', () => { 
        currentLang = currentLang === 'ar' ? 'en' : 'ar'; 
        localStorage.setItem('rg1_lang', currentLang); 
        applyLanguage(); 
        console.log(`🔄 Language switched to: ${currentLang}`); 
    }); 
 
    initializeCookieBanner(); 
    applyLanguage(); // Apply language immediately on load 
    setPaymentLinks(); 
    fixLegalLinks(); // Call after DOM is ready 
 
    const contactForm = document.getElementById('contactForm'); 
    if (contactForm) { 
        contactForm.addEventListener('submit', handleContactFormSubmission); 
    } 
 
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
 
    window.addEventListener('load', fixTopAdPosition); 
    window.addEventListener('resize', fixTopAdPosition); 
}); 

