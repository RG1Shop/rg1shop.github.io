const productsData = [
    {
        id: 1,
        title: "حجوزات Booking الفاخرة",
        category: "tourism",
        price: "خصومات حصرية",
        image: "https://r-xx.bstatic.com/xdata/images/hotel/max1280x900/123456.jpg", 
        link: "https://www.booking.com/index.html?aid=YOUR_ID"
    },
    {
        id: 2,
        title: "عروض الطيران العالمية",
        category: "flights",
        price: "أفضل سعر",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c055",
        link: "رابط_افلييت_الطيران"
    }
    // يمكنك إضافة كل منتجاتك هنا بنفس النمط
];

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = productsData.map(p => `
        <div class="product-card">
            <div class="gold-stars">⭐⭐⭐⭐⭐</div>
            <img src="${p.image}" alt="${p.title}" onerror="this.src='logo.png'">
            <h3>${p.title}</h3>
            <p class="price">${p.price}</p>
            <a href="${p.link}" target="_blank" class="buy-btn">احجز الآن</a>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', renderProducts);
