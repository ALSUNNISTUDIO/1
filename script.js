const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// تعيين الوضع المظلم كافتراضي إذا لم يكن هناك تفضيل مسبق
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark');
}

// تحقق من تفضيل الوضع المظلم
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// تبديل الوضع المظلم/الفاتح
themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}); 