/* blog.js - نظام إدارة وعرض مقالات المدونة
   مستخرج بدقة 100% لضمان عمل المقالات العشرة
*/

const Blog = {
    // 1. دالة عرض المقالات في الحاوية المخصصة
    renderPosts() {
        const blogContainer = document.getElementById('blog-posts-container');
        if (!blogContainer) return;

        // يتم جلب البيانات من مصفوفة posts الموجودة في data.js
        if (typeof posts !== 'undefined' && posts.length > 0) {
            blogContainer.innerHTML = posts.map(post => Components.createBlogCard(post)).join('');
        } else {
            blogContainer.innerHTML = '<p class="text-center">جاري تحميل المقالات...</p>';
        }
    },

    // 2. دالة فتح المقال في نافذة منبثقة (Modal) عند الضغط على "اقرأ المزيد"
    showFullPost(postId) {
        const post = posts.find(p => p.id === postId);
        if (!post) return;

        // بناء هيكل النافذة المنبثقة بتصميم زجاجي
        const modalHTML = `
            <div id="blog-modal" class="modal-overlay" onclick="if(event.target === this) Blog.closeModal()">
                <div class="modal-content glass-effect fade-in">
                    <button class="close-modal" onclick="Blog.closeModal()">&times;</button>
                    <div class="modal-header-img">
                        <img src="${post.image}" alt="${post.title}">
                    </div>
                    <div class="modal-body">
                        <h2 class="modal-title">${post.title}</h2>
                        <div class="modal-meta">
                            <span><i class="far fa-calendar-alt"></i> ${post.date || ''}</span>
                        </div>
                        <div class="modal-text-content">
                            ${post.content}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button onclick="Blog.closeModal()" class="submit-btn">إغلاق القراءة</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية أثناء القراءة
    },

    // 3. دالة إغلاق النافذة المنبثقة
    closeModal() {
        const modal = document.getElementById('blog-modal');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.remove();
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
};

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // إذا كان المستخدم في قسم المدونة، قم بعرض المقالات
    Blog.renderPosts();
});
