/* components.js - بناء عناصر واجهة المستخدم ديناميكياً
   مستخرج من الكود الأصلي لـ aladdan بنسبة 100%
*/

const Components = {
    // بناء بطاقة المنتج (فنادق، طيران، إلخ)
    createProductCard(product) {
        return `
            <div class="product-card fade-in">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                    <a href="${product.link}" target="_blank" class="product-link">احجز الآن</a>
                </div>
            </div>
        `;
    },

    // بناء بطاقة المقال في المدونة
    createBlogCard(post) {
        return `
            <article class="blog-card fade-in">
                <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <button onclick="Blog.showFullPost('${post.id}')" class="read-more-btn">اقرأ المزيد</button>
                </div>
            </article>
        `;
    },

    // بناء نموذج التواصل
    createContactForm() {
        return `
            <div class="contact-container fade-in">
                <form class="contact-form" id="main-contact-form">
                    <div class="form-group">
                        <label>الاسم بالكامل</label>
                        <input type="text" name="user_name" required placeholder="أدخل اسمك هنا">
                    </div>
                    <div class="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" name="user_email" required placeholder="example@gmail.com">
                    </div>
                    <div class="form-group">
                        <label>الرسالة</label>
                        <textarea name="message" rows="5" required placeholder="كيف يمكننا مساعدتك؟"></textarea>
                    </div>
                    <button type="submit" class="submit-btn">إرسال الرسالة</button>
                </form>
                <div class="contact-info">
                    <div class="contact-info-block">
                        <i class="fas fa-phone"></i>
                        <span>+966 5XX XXX XXX</span>
                    </div>
                    <div class="contact-info-block">
                        <i class="fas fa-envelope"></i>
                        <span>contact@rg1shop.com</span>
                    </div>
                </div>
            </div>
        `;
    },

    // بناء بنر ملفات تعريف الارتباط
    createCookieBanner() {
        return `
            <div id="cookie-banner" class="glass-effect">
                <p>نحن نستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة على موقعنا.</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="submit-btn">موافق</button>
                    <a href="privacy.html" class="legal-link">سياسة الخصوصية</a>
                </div>
            </div>
        `;
    }
};
