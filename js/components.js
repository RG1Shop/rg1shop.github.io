// ======================================================================= 
// --- وظائف عرض المنتجات والروابط التابعة (محدثة لدعم الترجمة) --- 
// ======================================================================= 
 
function renderProducts(filterCategory) { 
    const container = document.getElementById('products-container'); 
    if (!container) return; 
    container.innerHTML = ''; 
 
    const actualFilter = (filterCategory === 'all') ? null : filterCategory; 
    products.forEach(product => { 
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
 
    affiliatePlatforms.forEach(platform => { 
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

