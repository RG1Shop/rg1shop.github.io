const productsData = [
    {
        id: 1,
        title: "حجوزات فنادق فاخرة - Booking",
        category: "tourism",
        price: "أفضل سعر",
        image: "https://r-xx.bstatic.com/xdata/images/hotel/max1280x900/123456.jpg", 
        link: "رابط_الأفلييت_الخاص_بك"
    },
    {
        id: 2,
        title: "عروض AliExpress الحصرية",
        category: "shopping",
        price: "خصم 70%",
        image: "https://ae01.alicdn.com/kf/S...jpg",
        link: "رابط_الأفلييت_الخاص_بك"
    }
];

function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = productsData.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <a href="${product.link}" target="_blank" class="buy-btn">احجز الآن</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProducts);
