// Dark mode toggle functionality
(function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (!themeToggle) return; // Exit if toggle button not found

    // Check for saved preference or system preference
    const darkModePreference = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Apply saved preference
    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            if (sunIcon) sunIcon.classList.add('hidden');
            if (moonIcon) moonIcon.classList.remove('hidden');
        } else {
            htmlElement.classList.remove('dark');
            if (sunIcon) sunIcon.classList.remove('hidden');
            if (moonIcon) moonIcon.classList.add('hidden');
        }
    }

    applyTheme(darkModePreference);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.classList.contains('dark');
        applyTheme(isDark ? 'light' : 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only apply system preference if user hasn't set a preference
        if (localStorage.getItem('theme') === null) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

// Form validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('[required]');
    let isValid = true;

    inputs.forEach(input => {
        const errorElement = input.parentElement.querySelector('.form-error');
        
        if (!input.value.trim()) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'This field is required';
            }
            input.classList.add('border-red-500');
        } else if (input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'Please enter a valid email';
            }
            input.classList.add('border-red-500');
        } else {
            if (errorElement) {
                errorElement.textContent = '';
            }
            input.classList.remove('border-red-500');
        }
    });

    return isValid;
}

// Show loading skeleton
function showLoadingSkeleton(containerId, itemCount = 3) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let skeleton = '';
    for (let i = 0; i < itemCount; i++) {
        skeleton += `
            <div class="card">
                <div class="skeleton h-48 mb-4"></div>
                <div class="card-body">
                    <div class="skeleton-text mb-2"></div>
                    <div class="skeleton-text"></div>
                    <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div class="skeleton h-10"></div>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = skeleton;
}

// Hide loading skeleton
function hideLoadingSkeleton(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
}

// RTL Language Support
function initRTLSupport() {
    const htmlElement = document.documentElement;
    const supportedRTLLanguages = ['ar', 'he', 'fa', 'ur'];
    
    // Check if page language is RTL
    const pageLang = htmlElement.getAttribute('lang') || 'en';
    const isRTL = supportedRTLLanguages.includes(pageLang.substring(0, 2));
    
    if (isRTL) {
        htmlElement.setAttribute('dir', 'rtl');
        document.body.classList.add('rtl');
    }
}

// Initialize RTL on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRTLSupport);
} else {
    initRTLSupport();
}
