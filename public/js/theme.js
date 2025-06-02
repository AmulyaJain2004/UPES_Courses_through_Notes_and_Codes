// Function to setup dark mode toggle
export function setupDarkModeToggle() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const darkModeLabel = document.getElementById('darkModeLabel');

    if (!darkModeToggle || !body || !darkModeLabel) return;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
        darkModeLabel.textContent = 'Dark Mode';
    } else {
        darkModeLabel.textContent = 'Light Mode';
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            darkModeLabel.textContent = 'Dark Mode';
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            darkModeLabel.textContent = 'Light Mode';
        }
    });
} 