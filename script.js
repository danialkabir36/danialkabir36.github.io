// Dark mode settings
let isDarkMode = false;

// Theme toggle function
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    
    // Update button text
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Add click event to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has a theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Light Mode';
    }
}); 