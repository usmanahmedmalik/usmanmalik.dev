// Theme Management
const toggleThemeBtn = document.getElementById('toggleTheme');
const htmlEl = document.documentElement;

// Check Local Storage or System Preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlEl.classList.add('dark');
} else {
    htmlEl.classList.remove('dark');
}

// Toggle Function
if (toggleThemeBtn) {
    toggleThemeBtn.onclick = () => {
        if (htmlEl.classList.contains('dark')) {
            htmlEl.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            htmlEl.classList.add('dark');
            localStorage.theme = 'dark';
        }
    }
}
