/**
 * Veloura Coffee - Shared Navbar and Footer Injector
 * Ensures uniform header and footer layouts across all pages with functional theme and navigation logic.
 */

(function () {
    // Identify current page filename
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // Standalone pages (dashboards, auth) that should skip global header/footer injection
    const isStandalone = ['admin.html', 'user.html', 'login.html', 'signup.html'].includes(currentFile);

    // Determine path prefix to assets and root pages based on folder depth
    const isSub = window.location.pathname.includes('/pages/');
    const prefix = isSub ? '../' : './';

    // Helper to get active styles for desktop navigation links
    function getActiveNavClass(pageName) {
        let isActive = false;

        if (pageName === 'index.html' && currentFile === 'index.html') {
            isActive = true;
        } else if (pageName === 'home.html' && currentFile === 'home.html') {
            isActive = true;
        } else if (pageName === 'about.html' && currentFile === 'about.html') {
            isActive = true;
        } else if (pageName === 'service.html' && currentFile.startsWith('service')) {
            isActive = true;
        } else if (pageName === 'blog.html' && currentFile.startsWith('blog')) {
            isActive = true;
        } else if (pageName === 'contact.html' && currentFile === 'contact.html') {
            isActive = true;
        }

        return isActive 
            ? 'text-amber-600 font-semibold' 
            : 'text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 transition font-medium';
    }

    // Helper to get active styles for mobile navigation links
    function getActiveMobileClass(pageName) {
        let isActive = false;

        if (pageName === 'index.html' && currentFile === 'index.html') {
            isActive = true;
        } else if (pageName === 'home.html' && currentFile === 'home.html') {
            isActive = true;
        } else if (pageName === 'about.html' && currentFile === 'about.html') {
            isActive = true;
        } else if (pageName === 'service.html' && currentFile.startsWith('service')) {
            isActive = true;
        } else if (pageName === 'blog.html' && currentFile.startsWith('blog')) {
            isActive = true;
        } else if (pageName === 'contact.html' && currentFile === 'contact.html') {
            isActive = true;
        }

        return isActive 
            ? 'text-amber-600 font-semibold text-sm sm:text-base' 
            : 'text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 transition';
    }

    // HTML templates for injected navbar & footer
    const headerHTML = `
        <div class="max-w-7xl mx-auto px-2 sm:px-6">
            <div class="mt-2 sm:mt-5 h-14 sm:h-20 px-2 sm:px-6 rounded-2xl glass flex items-center justify-between bg-white/75 backdrop-blur-md border border-white/30 dark:bg-slate-950/50 dark:border-white/10">
                <!-- LOGO -->
                <a href="${prefix}index.html" class="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <div class="w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-2xl flex items-center justify-center font-bold text-sm sm:text-lg shadow-lg overflow-hidden">
                        <img src="${prefix}assets/brand-logo.png" alt="brand-logo" class="w-full h-full object-cover">
                    </div>
                    <div class="sm:block">
                        <h2 class="heading-font text-xl sm:text-3xl font-bold">
                            Veloura
                        </h2>
                    </div>
                </a>

                <!-- DESKTOP NAV -->
                <nav class="hidden lg:flex items-center gap-10">
                    <a href="${prefix}index.html" class="${getActiveNavClass('index.html')}">Home</a>
                    <a href="${prefix}pages/home.html" class="${getActiveNavClass('home.html')}">Home 2</a>
                    <a href="${prefix}pages/about.html" class="${getActiveNavClass('about.html')}">About</a>
                    <a href="${prefix}pages/service.html" class="${getActiveNavClass('service.html')}">Services</a>
                    <a href="${prefix}pages/blog.html" class="${getActiveNavClass('blog.html')}">Blog</a>
                    <a href="${prefix}pages/contact.html" class="${getActiveNavClass('contact.html')}">Contact</a>
                </nav>

                <!-- RIGHT -->
                <div class="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <!-- THEME TOGGLE -->
                    <button
                        id="theme-toggle"
                        class="w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center hover:scale-105 transition"
                        aria-label="Toggle theme"
                    >
                        <i id="theme-toggle-icon" data-lucide="moon" class="w-4 sm:w-5 h-4 sm:h-5 text-slate-800 dark:text-white"></i>
                    </button>

                    <!-- PROFILE -->
                    <div class="relative">
                        <button
                            id="profile-btn"
                            class="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-lg"
                            aria-label="User profile"
                        >
                            <i data-lucide="user" class="w-4 sm:w-5 h-4 sm:h-5"></i>
                        </button>

                        <!-- DROPDOWN -->
                        <div
                            id="profile-menu"
                            class="hidden absolute right-0 mt-2 sm:mt-4 w-44 sm:w-56 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50"
                        >
                            <a href="${prefix}pages/login.html"
                                class="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition">
                                <i data-lucide="log-in" class="w-4 sm:w-5 h-4 sm:h-5"></i>
                                Login
                            </a>
                            <a href="${prefix}pages/signup.html"
                                class="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition">
                                <i data-lucide="user-plus" class="w-4 sm:w-5 h-4 sm:h-5"></i>
                                Signup
                            </a>
                            <a href="${prefix}pages/user.html"
                                class="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition">
                                <i data-lucide="layout-dashboard" class="w-4 sm:w-5 h-4 sm:h-5"></i>
                                User Dashboard
                            </a>
                            <a href="${prefix}pages/admin.html"
                                class="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition">
                                <i data-lucide="shield" class="w-4 sm:w-5 h-4 sm:h-5"></i>
                                Admin Dashboard
                            </a>
                        </div>
                    </div>

                    <!-- MOBILE BUTTON -->
                    <button
                        id="mobile-btn"
                        class="lg:hidden w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center"
                        aria-label="Toggle mobile menu"
                    >
                        <i data-lucide="menu" class="w-4 sm:w-5 h-4 sm:h-5 text-slate-800 dark:text-white"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- MOBILE MENU -->
        <div
            id="mobile-menu"
            class="hidden lg:hidden mt-2 sm:mt-4 mx-2 sm:mx-6 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 p-3 sm:p-6"
        >
            <div class="flex flex-col gap-3 sm:gap-5">
                <a href="${prefix}index.html" class="${getActiveMobileClass('index.html')}">Home</a>
                <a href="${prefix}pages/home.html" class="${getActiveMobileClass('home.html')}">Home 2</a>
                <a href="${prefix}pages/about.html" class="${getActiveMobileClass('about.html')}">About</a>
                <a href="${prefix}pages/service.html" class="${getActiveMobileClass('service.html')}">Services</a>
                <a href="${prefix}pages/blog.html" class="${getActiveMobileClass('blog.html')}">Blog</a>
                <a href="${prefix}pages/contact.html" class="${getActiveMobileClass('contact.html')}">Contact</a>
            </div>
        </div>
    `;

    const footerHTML = `
        <!-- Main Footer Content -->
        <div class="py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                    <!-- Brand Column -->
                    <div>
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg overflow-hidden shadow-md">
                                <img src="${prefix}assets/brand-logo.png" alt="brand-logo" class="w-full h-full object-cover">
                            </div>
                            <h3 class="heading-font text-2xl font-bold text-slate-900 dark:text-white">Veloura</h3>
                        </div>
                        <p class="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base mb-6">
                            Premium specialty coffee roasted in small batches, sourced ethically, and delivered fresh to your door.
                        </p>
                        <div class="flex gap-3">
                            <a href="#" class="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-amber-600 dark:hover:bg-amber-600 hover:text-white dark:hover:text-white transition flex items-center justify-center">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-amber-600 dark:hover:bg-amber-600 hover:text-white dark:hover:text-white transition flex items-center justify-center">
                                <i class="bi bi-twitter-x"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-amber-600 dark:hover:bg-amber-600 hover:text-white dark:hover:text-white transition flex items-center justify-center">
                                <i class="bi bi-linkedin"></i>
                            </a>
                            <a href="#" class="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-amber-600 dark:hover:bg-amber-600 hover:text-white dark:hover:text-white transition flex items-center justify-center">
                                <i class="bi bi-facebook"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-semibold text-lg mb-6 text-slate-900 dark:text-white">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="${prefix}index.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Home</a></li>
                            <li><a href="${prefix}pages/service.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Services</a></li>
                            <li><a href="${prefix}pages/about.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">About Us</a></li>
                            <li><a href="${prefix}pages/blog.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Blog</a></li>
                            <li><a href="${prefix}pages/contact.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Contact</a></li>
                        </ul>
                    </div>

                    <!-- Products -->
                    <div>
                        <h4 class="font-semibold text-lg mb-6 text-slate-900 dark:text-white">Our Products</h4>
                        <ul class="space-y-3">
                            <li><a href="${prefix}pages/product1.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Whole Beans</a></li>
                            <li><a href="${prefix}pages/product2.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Ground Coffee</a></li>
                            <li><a href="${prefix}pages/product3.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Subscriptions</a></li>
                            <li><a href="${prefix}pages/booking.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Reservations</a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="font-semibold text-lg mb-6 text-slate-900 dark:text-white">Get In Touch</h4>
                        <ul class="space-y-4">
                            <li class="flex gap-3 text-sm sm:text-base">
                                <i data-lucide="map-pin" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
                                <span class="text-slate-500 dark:text-slate-400">123 Coffee Street, Brew City, BC 12345</span>
                            </li>
                            <li class="flex gap-3 text-sm sm:text-base">
                                <i data-lucide="phone" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
                                <a href="tel:+1234567890" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-600 transition">+1 (234) 567-8900</a>
                            </li>
                            <li class="flex gap-3 text-sm sm:text-base">
                                <i data-lucide="mail" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
                                <a href="mailto:info@veloura.com" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-600 transition">info@veloura.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Footer -->
        <div class="py-8 border-t border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p class="text-sm text-slate-500 dark:text-slate-400">
                        © 2026 Veloura Coffee. All rights reserved.
                    </p>
                    <div class="flex gap-3">
                        <img src="https://img.shields.io/badge/Visa-1A1F71?style=flat-square&logo=visa&logoColor=white" alt="Visa" class="h-6">
                        <img src="https://img.shields.io/badge/Mastercard-EB001B?style=flat-square&logo=mastercard&logoColor=white" alt="Mastercard" class="h-6">
                        <img src="https://img.shields.io/badge/PayPal-003087?style=flat-square&logo=paypal&logoColor=white" alt="PayPal" class="h-6">
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to run when the DOM is ready to inject header and footer
    function injectElements() {
        if (isStandalone) {
            // For login, signup, admin, and user dashboards, just ensure Lucide icons are initialized
            if (window.lucide) {
                window.lucide.createIcons();
            }
            return;
        }

        // Find or create header element
        let headerEl = document.querySelector('header');
        if (!headerEl) {
            headerEl = document.createElement('header');
            document.body.insertBefore(headerEl, document.body.firstChild);
        }
        headerEl.className = 'fixed top-0 left-0 w-full z-50';
        headerEl.innerHTML = headerHTML;

        // Find or create footer element
        let footerEl = document.querySelector('footer');
        if (!footerEl) {
            footerEl = document.createElement('footer');
            document.body.appendChild(footerEl);
        }
        footerEl.className = 'py-auto bg-[#f3ede7] dark:bg-slate-900 text-slate-800 dark:text-slate-100';
        footerEl.innerHTML = footerHTML;

        // Setup theme toggle icon on inject based on current class
        syncThemeIcon();

        // Register interactive behaviors
        setupInteractions();
    }

    // Function to synchronize the theme toggle button's Lucide icon
    function syncThemeIcon() {
        const isDark = document.documentElement.classList.contains("dark");
        const iconEl = document.getElementById("theme-toggle-icon");
        if (iconEl) {
            iconEl.setAttribute("data-lucide", isDark ? "sun" : "moon");
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    }

    // Function to register theme toggle, mobile nav menu, profile dropdown, and clicks outside
    function setupInteractions() {
        // 1. Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                syncThemeIcon();
            });
        }

        // 2. Profile Dropdown
        const profileBtn = document.getElementById('profile-btn');
        const profileMenu = document.getElementById('profile-menu');
        if (profileBtn && profileMenu) {
            profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                profileMenu.classList.toggle('hidden');
            });
        }

        // 3. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('hidden');
            });
        }

        // 4. Click outside to close menus
        document.addEventListener('click', (e) => {
            if (profileMenu && !profileMenu.classList.contains('hidden') && !profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
                profileMenu.classList.add('hidden');
            }
            if (mobileMenu && !mobileMenu.classList.contains('hidden') && !mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Ensure external resources (Bootstrap Icons & Lucide Icons) are imported if not present
    function loadStylesAndScripts() {
        // Load Bootstrap Icons if missing
        if (!document.querySelector('link[href*="bootstrap-icons"]')) {
            const biLink = document.createElement('link');
            biLink.rel = 'stylesheet';
            biLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
            document.head.appendChild(biLink);
        }

        // Load Lucide if missing
        if (!window.lucide && !document.querySelector('script[src*="lucide"]')) {
            const lucideScript = document.createElement('script');
            lucideScript.src = 'https://unpkg.com/lucide@latest';
            lucideScript.onload = () => {
                injectElements();
            };
            document.head.appendChild(lucideScript);
        } else {
            // Already loaded, just inject
            injectElements();
        }
    }

    // Pre-apply saved or preferred theme to avoid Flash of Unstyled Content (FOUC)
    const darkModePreference = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (darkModePreference === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Initialize injection
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadStylesAndScripts);
    } else {
        loadStylesAndScripts();
    }
})();
