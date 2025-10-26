const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'light') {
    document.body.classList.add('theme--light');
    updateThemeIcon('light');
} else {
    updateThemeIcon('dark');
}

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('theme--light');
    
    const theme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    if (theme === 'light') {
        themeIcon.textContent = '☀️';
        themeToggle.title = 'Switch to dark theme';
    } else {
        themeIcon.textContent = '🌙';
        themeToggle.title = 'Switch to light theme';
    }
}