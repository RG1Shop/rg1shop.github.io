const productsData = [
    { id: 1, title: "حجز حفلات ومهرجانات", category: "events", price: "متوفر الآن", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30", link: "#" },
    { id: 2, title: "فنادق عالمية - Booking", category: "tourism", price: "خصم 30%", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945", link: "#" },
    { id: 3, title: "تسوق من AliExpress", category: "shopping", price: "أفضل العروض", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", link: "#" }
];

function renderProducts(filter = 'events') {
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    const filtered = productsData.filter(p => p.category === filter);
    let html = `<div class="products-grid">`;
    filtered.forEach(p => {
        html += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.title}">
                <h3>${p.title}</h3>
                <p>${p.price}</p>
                <a href="${p.link}" class="buy-btn">عرض العرض</a>
            </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
}
// ربط أزرار القائمة بالفلترة
document.querySelectorAll('.main-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        document.querySelectorAll('.main-nav-link').forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
        const category = link.getAttribute('href').replace('-section', '').replace('#', '');
        renderProducts(category);
    });
});
document.addEventListener('DOMContentLoaded', () => renderProducts('events'));
