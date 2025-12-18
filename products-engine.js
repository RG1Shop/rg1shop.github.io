const productsData = [
    {
        id: 1,
        title: "حجوزات Booking العالمية",
        category: "tourism",
        price: "⭐⭐⭐⭐⭐",
        image: "https://r-xx.bstatic.com/xdata/images/hotel/max1280x900/123456.jpg", 
        link: "رابط_الأفلييت_الخاص_بك"
    },
    {
        id: 2,
        title: "تذاكر حفلات ومهرجانات",
        category: "events",
        price: "عروض حصرية",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        link: "رابط_الأفلييت_الخاص_بك"
    },
    {
        id: 3,
        title: "أحدث منتجات AliExpress",
        category: "shopping",
        price: "خصومات كبرى",
        image: "https://ae01.alicdn.com/kf/S...jpg",
        link: "رابط_الأفلييت_الخاص_بك"
    }
];

function renderProducts(category = 'events') {
    const container = document.getElementById('dynamic-content');
    if (!container) return;
    
    const filtered = productsData.filter(p => p.category === category);
    
    container.innerHTML = `
        <div class="products-grid">
            ${filtered.map(p => `
                <div class="product-card">
                    <img src="${p.image}" alt="${p.title}" onerror="this.src='logo.png'">
                    <h3>${p.title}</h3>
                    <p class="price-tag">${p.price}</p>
                    <a href="${p.link}" target="_blank" class="buy-btn">احجز الآن</a>
                </div>
            `).join('')}
        </div>
    `;
}

// تشغيل القسم الأول تلقائياً عند فتح الموقع
document.addEventListener('DOMContentLoaded', () => renderProducts('events'));
