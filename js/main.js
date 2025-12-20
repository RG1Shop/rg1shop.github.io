document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'ar';
    
    const loadIncludes = async () => {
        const includes = document.querySelectorAll('[data-include]');
        for (let el of includes) {
            const file = el.getAttribute('data-include');
            try {
                const response = await fetch(`includes/${file}.html`);
                el.innerHTML = await response.text();
            } catch (err) { console.error('Error loading:', file); }
        }
        updateTexts(lang);
        // هذه الوظيفة هي التي ستظهر الكروت الآن
        renderProducts(lang);
        setupEventListeners();
    };

    const updateTexts = (currentLang) => {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) {
                el.innerText = translations[currentLang][key];
            }
        });
        document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    };

    // وظيفة رسم كروت المنتجات (تذاكر، طيران، فنادق)
    const renderProducts = (currentLang) => {
        const container = document.getElementById('products-container');
        if (!container || !translations[currentLang].products) return;
        
        container.innerHTML = translations[currentLang].products.map(p => `
            <div class="bg-zinc-900 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/40 transition-all p-6">
                <h3 class="text-xl font-bold text-gold mb-3">${p.name}</h3>
                <p class="text-gray-400 text-sm mb-6">${p.description}</p>
                <div class="flex justify-between items-center border-t border-gold/5 pt-4">
                    <span class="text-white font-bold">${p.price}</span>
                    <a href="https://wa.me/212660074196" class="bg-gold text-black px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
                        طلب الآن
                    </a>
                </div>
            </div>
        `).join('');
    };

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
