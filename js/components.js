/**
 * وظيفة عرض المنتجات في الشبكة
 */
function renderProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${product.name}</h3>
                    <p class="text-purple-600 font-bold text-lg">${product.price}</p>
                </div>
                <a href="${product.link}" target="_blank" class="mt-4 block w-full text-center bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-purple-600 transition-colors no-underline">
                    Book Now
                </a>
            </div>
        </div>
    `).join('');
}

/**
 * وظيفة عرض شعارات الشركاء
 */
function renderAffiliates() {
    const slider = document.getElementById('affiliates-slider');
    if (!slider) return;

    slider.innerHTML = affiliatePlatforms.map(partner => `
        <div class="flex-shrink-0 group">
            <img src="${partner.logo}" alt="${partner.name}" class="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100">
        </div>
    `).join('');
}
