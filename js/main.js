document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'ar';
    
    const loadIncludes = async () => {
        const includes = document.querySelectorAll('[data-include]');
        for (let el of includes) {
            const file = el.getAttribute('data-include');
            try {
                const response = await fetch(`includes/${file}.html`);
                el.innerHTML = await response.text();
            } catch (err) { console.error('Error:', file); }
        }
        updateTexts(lang);
        // هذه الوظيفة هي التي ستظهر المنتجات الآن
        renderProducts(lang);
        setupEventListeners();
    };

    const updateTexts = (currentLang) => {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[currentLang][key]) el.innerText = translations[currentLang][key];
        });
        document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    };

    // وظيفة رسم كروت المنتجات من data.js
    const renderProducts = (currentLang) => {
        const container = document.getElementById('products-container');
        if (!container) return;
        
        container.innerHTML = translations[currentLang].products.map(p => `
            <div class="bg-dark-accent rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/50 transition-all">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gold mb-2">${p.name}</h3>
                    <p class="text-gray-400 text-sm mb-4">${p.description}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-white font-bold">${p.price}</span>
                        <a href="https://wa.me/212660074196" class="bg-gold/10 text-gold px-4 py-2 rounded-lg text-sm border border-gold/20 hover:bg-gold hover:text-black transition-all">طلب الآن</a>
                    </div>
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
