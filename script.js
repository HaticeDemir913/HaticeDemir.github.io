
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        updateThemeIcon(true);
    }
});

const themeBtn = document.getElementById('theme-btn');
const themeIcon = themeBtn.querySelector('i');


themeBtn.addEventListener('click', () => {
    const isLightNow = document.body.classList.toggle('light-theme');
    
    localStorage.setItem('site-theme', isLightNow ? 'light' : 'dark');
    
    updateThemeIcon(isLightNow);
});

function updateThemeIcon(isLight) {
    if (isLight) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;

            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        navbar.style.background = 'var(--bg)';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.background = 'transparent';
    }
});