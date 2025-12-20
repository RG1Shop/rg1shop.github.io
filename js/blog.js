/**
 * وظيفة عرض مقالات المدونة
 */
function renderBlog(lang = 'ar') {
    const blogGrid = document.getElementById('blog-grid');
    if (!blogGrid) return;

    // بيانات تجريبية للمدونة (يمكن نقلها لـ data.js لاحقاً)
    const articles = [
        {
            title: lang === 'ar' ? "أفضل 5 وجهات شتوية" : "Top 5 Winter Destinations",
            excerpt: lang === 'ar' ? "اكتشف الفخامة في قلب الثلوج..." : "Discover luxury in the heart of snow...",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451",
            category: lang === 'ar' ? "سياحة" : "Tourism"
        }
    ];

    blogGrid.innerHTML = articles.map(post => `
        <article class="blog-card shadow-sm border border-gray-100 rounded-3xl overflow-hidden">
            <img src="${post.image}" alt="${post.title}" class="w-full h-56 object-cover">
            <div class="p-6">
                <span class="category-tag mb-3 inline-block">${post.category}</span>
                <h3 class="text-xl font-bold mb-3">${post.title}</h3>
                <p class="text-gray-600 text-sm mb-4">${post.excerpt}</p>
                <a href="#" class="text-purple-600 font-bold text-sm">Read More</a>
            </div>
        </article>
    `).join('');
}
