// خزان منتجات RG1Shop - AliExpress & Booking
const productsData = [
    {
        id: 1,
        title: "عرض AliExpress المميز",
        category: "shopping",
        price: "10.00$",
        image: "logo.png",
        link: "https://s.click.aliexpress.com/e/..." // ضع رابط الأفلييت هنا
    },
    {
        id: 2,
        title: "فنادق Booking الفاخرة",
        category: "tourism",
        price: "إبتداءً من 50$",
        image: "logo.png",
        link: "https://www.booking.com/index.html?aid=..." // ضع رابط الأفلييت هنا
    }
];

// وظيفة عرض المنتجات تلقائياً
function renderProducts() {
    const container = document.getElementById('dynamic-content');
    if (!container) return;

    let html = '<div class="products-grid">';
    productsData.forEach(product => {
        html += `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">${product.price}</p>
                <a href="${product.link}" target="_blank" class="buy-btn">عرض التفاصيل</a>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}

// تشغيل المحرك عند جاهزية الصفحة
document.addEventListener('DOMContentLoaded', renderProducts);
