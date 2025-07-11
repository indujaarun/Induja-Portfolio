const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
    toggle.textContent = document.body.dataset.theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});