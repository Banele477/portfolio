const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        icon.className = 'fa-solid fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.className = 'fa-solid fa-sun';
    }
});
