// ======================================================================= 
// 🔥 دالة ترجمة محتوى المدونة والصفحات الثابتة 
// ======================================================================= 
function translateBlogContent() { 
    // ترجمة محتوى المدونة 
    for (let i = 1; i <= 10; i++) { // بما أن لدينا 10 مقالات 
        const blogCard = document.querySelector(`.blog-card[data-blog-id="${i}"]`); 
        if (blogCard) { 
            // العناوين 
            const titleElement = blogCard.querySelector(`h3[data-key="blog${i}_title"]`); 
            if (titleElement && translations[`blog${i}_title`]) titleElement.textContent = translations[`blog${i}_title`][currentLang]; 
                 
            // التاريخ 
            const dateElement = blogCard.querySelector(`small[data-key="blog_date_prefix"]`); 
            if (dateElement && translations['blog_date_prefix']) dateElement.textContent = translations['blog_date_prefix'][currentLang] + '2025-11-25'; 
 
            // الفقرات الرئيسية 
            const p1Element = blogCard.querySelector(`p[data-key="blog${i}_p1"]`); 
            if (p1Element && translations[`blog${i}_p1`]) p1Element.textContent = translations[`blog${i}_p1`][currentLang]; 
 
            // العناوين الفرعية h4 والفقرات المرتبطة بها 
            for (let h = 1; h <= 4; h++) { 
                const h4Element = blogCard.querySelector(`h4[data-key="blog${i}_h4_${h}"]`); 
                if (h4Element && translations[`blog${i}_h4_${h}`]) h4Element.textContent = translations[`blog${i}_h4_${h}`][currentLang]; 
                     
                const pElement1 = blogCard.querySelector(`p[data-key="blog${i}_p${(h*2)}"]`); 
                if (pElement1 && translations[`blog${i}_p${(h*2)}`]) pElement1.textContent = translations[`blog${i}_p${(h*2)}`][currentLang]; 
                     
                const pElement2 = blogCard.querySelector(`p[data-key="blog${i}_p${(h*2)+1}"]`); 
                if (pElement2 && translations[`blog${i}_p${(h*2)+1}`]) pElement2.textContent = translations[`blog${i}_p${(h*2)+1}`][currentLang]; 
            } 
 
            // ترجمة عناصر القائمة (<ul>) داخل المدونة 
            const ulElement = blogCard.querySelector('ul'); 
            if (ulElement) { 
                const listItems = ulElement.querySelectorAll('li span'); // استهدف الـ span داخل الـ li 
                listItems.forEach((span, index) => { 
                    const key = `blog${i}_list1_item${index + 1}`; 
                    if (translations[key] && translations[key][currentLang]) { 
                        span.textContent = translations[key][currentLang]; 
                    } 
                }); 
            } 
                 
            // الخلاصة 
            const conclusionTitleElement = blogCard.querySelector(`h4[data-key="blog${i}_conclusion_title"]`); 
            if (conclusionTitleElement && translations[`blog${i}_conclusion_title`]) conclusionTitleElement.textContent = translations[`blog${i}_conclusion_title`][currentLang]; 
                 
            const conclusionTextElement = blogCard.querySelector(`p[data-key="blog${i}_conclusion_text"]`); 
            if (conclusionTextElement && translations[`blog${i}_conclusion_text`]) conclusionTextElement.textContent = translations[`blog${i}_conclusion_text`][currentLang]; 
        } 
    } 
} 
 
// دالة عرض المدونة (المقالات) 
function renderBlog() { 
    translateBlogContent(); 
} 

