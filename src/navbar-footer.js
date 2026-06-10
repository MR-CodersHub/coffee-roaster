/**
 * Veloura Coffee - Shared Navbar, Footer, and Cart Drawer Injector
 * Ensures uniform header, footer, and cart layouts across all pages.
 */

(function () {
    // Pre-apply saved or preferred theme/RTL to avoid Flash of Unstyled Content (FOUC)
    const darkModePreference = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (darkModePreference === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const savedRtl = localStorage.getItem('rtl') || 'ltr';
    document.documentElement.setAttribute('dir', savedRtl);

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
        } else if (pageName === 'shop.html' && (currentFile.startsWith('shop') || currentFile.startsWith('product'))) {
            isActive = true;
        } else if (pageName === 'blog.html' && currentFile.startsWith('blog')) {
            isActive = true;
        } else if (pageName === 'contact.html' && currentFile === 'contact.html') {
            isActive = true;
        }

        return isActive 
            ? 'text-amber-600 font-semibold border-b-2 border-amber-600 pb-1' 
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
        } else if (pageName === 'shop.html' && (currentFile.startsWith('shop') || currentFile.startsWith('product'))) {
            isActive = true;
        } else if (pageName === 'blog.html' && currentFile.startsWith('blog')) {
            isActive = true;
        } else if (pageName === 'contact.html' && currentFile === 'contact.html') {
            isActive = true;
        }

        return isActive 
            ? 'text-amber-600 font-semibold text-sm sm:text-base bg-amber-50 dark:bg-slate-800/50 px-4 py-2 rounded-xl' 
            : 'text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-500 transition px-4 py-2 rounded-xl';
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
                        <h2 class="heading-font text-xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                            Veloura
                        </h2>
                    </div>
                </a>

                <!-- DESKTOP NAV -->
                <nav class="hidden lg:flex items-center gap-10">
                    <a href="${prefix}index.html" class="${getActiveNavClass('index.html')}">Home</a>
                    <a href="${prefix}pages/home.html" class="${getActiveNavClass('home.html')}">Home 2</a>
                    <a href="${prefix}pages/about.html" class="${getActiveNavClass('about.html')}">About</a>
                    <a href="${prefix}pages/shop.html" class="${getActiveNavClass('shop.html')}">Shop</a>
                    <a href="${prefix}pages/blog.html" class="${getActiveNavClass('blog.html')}">Blog</a>
                    <a href="${prefix}pages/contact.html" class="${getActiveNavClass('contact.html')}">Contact</a>
                </nav>

                <!-- RIGHT -->
                <div class="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <!-- RTL TOGGLE -->
                    <button
                        id="rtl-toggle"
                        class="w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center hover:scale-105 transition border border-slate-200 dark:border-slate-800"
                        aria-label="Toggle language direction"
                    >
                        <span id="rtl-toggle-text" class="text-xs sm:text-sm font-bold text-slate-800 dark:text-white select-none">A↔</span>
                    </button>

                    <!-- THEME TOGGLE -->
                    <button
                        id="theme-toggle"
                        class="w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center hover:scale-105 transition border border-slate-200 dark:border-slate-800"
                        aria-label="Toggle theme"
                    >
                        <i id="theme-toggle-icon" data-lucide="moon" class="w-4 sm:w-5 h-4 sm:h-5 text-slate-800 dark:text-white"></i>
                    </button>

                    <!-- CART TOGGLE -->
                    <button
                        id="cart-toggle-btn"
                        class="relative w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center hover:scale-105 transition border border-slate-200 dark:border-slate-800"
                        aria-label="Open cart"
                    >
                        <i data-lucide="shopping-cart" class="w-4 sm:w-5 h-4 sm:h-5 text-slate-800 dark:text-white"></i>
                        <span id="cart-badge" class="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full bg-amber-600 text-white text-[10px] font-bold flex items-center justify-center transition-transform scale-0 shadow-sm">0</span>
                    </button>

                    <!-- PROFILE -->
                    <div class="relative">
                        <button
                            id="profile-btn"
                            class="w-8 sm:w-11 h-8 sm:h-11 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
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
                        class="lg:hidden w-8 sm:w-11 h-8 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center border border-slate-200 dark:border-slate-800"
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
            <div class="flex flex-col gap-2">
                <a href="${prefix}index.html" class="${getActiveMobileClass('index.html')}">Home</a>
                <a href="${prefix}pages/home.html" class="${getActiveMobileClass('home.html')}">Home 2</a>
                <a href="${prefix}pages/about.html" class="${getActiveMobileClass('about.html')}">About</a>
                <a href="${prefix}pages/shop.html" class="${getActiveMobileClass('shop.html')}">Shop</a>
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
                            <li><a href="${prefix}pages/shop.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Shop</a></li>
                            <li><a href="${prefix}pages/about.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">About Us</a></li>
                            <li><a href="${prefix}pages/blog.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Blog</a></li>
                            <li><a href="${prefix}pages/contact.html" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Contact</a></li>
                        </ul>
                    </div>

                    <!-- Products -->
                    <div>
                        <h4 class="font-semibold text-lg mb-6 text-slate-900 dark:text-white">Our Products</h4>
                        <ul class="space-y-3">
                            <li><a href="${prefix}pages/product.html?id=yirgacheffe-reserve" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Whole Beans</a></li>
                            <li><a href="${prefix}pages/product.html?id=highland-blend" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Ground Coffee</a></li>
                            <li><a href="${prefix}pages/product.html?id=nightowl-espresso" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition text-sm sm:text-base">Subscriptions</a></li>
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
                                <a href="tel:+1234567890" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-650 transition">+1 (234) 567-8900</a>
                            </li>
                            <li class="flex gap-3 text-sm sm:text-base">
                                <i data-lucide="mail" class="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5"></i>
                                <a href="mailto:info@veloura.com" class="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-650 transition">info@veloura.com</a>
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

    const cartDrawerHTML = `
        <div id="cart-drawer" class="fixed inset-0 z-[9999] hidden">
            <!-- Backdrop -->
            <div id="cart-drawer-overlay" class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-0"></div>
            <!-- Drawer Panel -->
            <div id="cart-drawer-panel" class="absolute top-0 right-0 h-full w-full sm:max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-850 flex flex-col transition-transform duration-300 translate-x-full text-slate-900 dark:text-white">
                <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <i data-lucide="shopping-cart" class="w-5 h-5 text-amber-600"></i>
                        <h3 class="heading-font text-2xl font-bold">Your Cart</h3>
                    </div>
                    <button id="cart-drawer-close" class="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" aria-label="Close cart">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>

                <div id="cart-drawer-items" class="flex-1 overflow-y-auto p-6 space-y-4">
                    <!-- Dynamic Cart Items Injected Here -->
                </div>

                <div class="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                            <span>Subtotal</span>
                            <span id="cart-drawer-subtotal">₹0</span>
                        </div>
                        <div class="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                            <span>Estimated Shipping</span>
                            <span id="cart-drawer-shipping">₹0</span>
                        </div>
                        <div class="flex justify-between text-lg font-bold pt-3 border-t border-slate-200 dark:border-slate-800">
                            <span>Total</span>
                            <span id="cart-drawer-total">₹0</span>
                        </div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <a id="cart-drawer-checkout-btn" href="${prefix}pages/booking.html" class="w-full h-14 rounded-2xl bg-amber-700 hover:bg-amber-600 transition text-white font-semibold flex items-center justify-center shadow-lg">
                            Proceed to Checkout
                        </a>
                        <button id="cart-drawer-continue" class="w-full py-3 text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-250 transition">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Function to run when the DOM is ready to inject header, footer, and cart drawer
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

        // Inject Cart Drawer
        const drawerDiv = document.createElement('div');
        drawerDiv.innerHTML = cartDrawerHTML;
        document.body.appendChild(drawerDiv.firstElementChild);

        // Setup theme toggle icon on inject based on current class
        syncThemeIcon();

        // Register interactive behaviors
        setupInteractions();

        // Initial cart load and update
        window.updateCartBadgeAndDrawer();
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

    // Open Cart Drawer
    window.openCartDrawer = function () {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-drawer-overlay');
        const panel = document.getElementById('cart-drawer-panel');
        if (drawer && overlay && panel) {
            drawer.classList.remove('hidden');
            // Force reflow
            drawer.offsetHeight;
            overlay.classList.remove('opacity-0');
            overlay.classList.add('opacity-100');
            panel.classList.remove('translate-x-full');
            panel.classList.add('translate-x-0');
        }
    };

    // Close Cart Drawer
    window.closeCartDrawer = function () {
        const drawer = document.getElementById('cart-drawer');
        const overlay = document.getElementById('cart-drawer-overlay');
        const panel = document.getElementById('cart-drawer-panel');
        if (drawer && overlay && panel) {
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0');
            panel.classList.remove('translate-x-0');
            panel.classList.add('translate-x-full');
            setTimeout(() => {
                drawer.classList.add('hidden');
            }, 300);
        }
    };

    // Add Coffee to Cart Global Handler
    window.addCoffeeToCart = function(product) {
        const cart = JSON.parse(localStorage.getItem('velouraCart') || '[]');
        const existingIndex = cart.findIndex(item => item.id === product.id && item.size === product.size);
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += (product.quantity || 1);
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: product.quantity || 1,
                size: product.size || '250g',
                image: product.image
            });
        }
        localStorage.setItem('velouraCart', JSON.stringify(cart));
        window.updateCartBadgeAndDrawer();
        window.openCartDrawer();
    };

    // Update Cart Badge and Drawer Content
    window.updateCartBadgeAndDrawer = function () {
        const cart = JSON.parse(localStorage.getItem('velouraCart') || '[]');
        const badge = document.getElementById('cart-badge');
        const itemsContainer = document.getElementById('cart-drawer-items');
        const subtotalEl = document.getElementById('cart-drawer-subtotal');
        const shippingEl = document.getElementById('cart-drawer-shipping');
        const totalEl = document.getElementById('cart-drawer-total');
        const checkoutBtn = document.getElementById('cart-drawer-checkout-btn');

        // Total count logic
        const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (badge) {
            badge.textContent = totalQty;
            if (totalQty > 0) {
                badge.classList.remove('scale-0');
                badge.classList.add('scale-100');
            } else {
                badge.classList.remove('scale-100');
                badge.classList.add('scale-0');
            }
        }

        if (!itemsContainer) return;

        if (cart.length === 0) {
            itemsContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full text-center p-6 mt-10">
                    <i data-lucide="shopping-bag" class="w-16 h-16 text-slate-300 dark:text-slate-700 mb-4"></i>
                    <p class="text-slate-500 dark:text-slate-400 mb-6">Your cart is empty. Add some premium roasts to get started!</p>
                    <a href="${prefix}pages/shop.html" class="px-6 py-3 rounded-xl bg-amber-700 text-white font-semibold hover:bg-amber-600 transition">Shop Our Coffees</a>
                </div>
            `;
            subtotalEl.textContent = '₹0';
            shippingEl.textContent = '₹0';
            totalEl.textContent = '₹0';
            if (checkoutBtn) {
                checkoutBtn.classList.add('opacity-50', 'pointer-events-none');
            }
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        // Enable checkout button
        if (checkoutBtn) {
            checkoutBtn.classList.remove('opacity-50', 'pointer-events-none');
        }

        let subtotal = 0;
        itemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const itemHTML = `
                <div class="flex items-center gap-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-150 dark:border-slate-800">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover">
                    <div class="flex-1">
                        <h4 class="font-semibold text-sm line-clamp-1">${item.name}</h4>
                        <p class="text-xs text-slate-500 mb-1">Size: ${item.size}</p>
                        <div class="flex items-center gap-2">
                            <button class="w-6 h-6 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 transition flex items-center justify-center text-xs font-bold" onclick="window.changeCartQty(${index}, -1)">-</button>
                            <span class="text-sm font-semibold">${item.quantity}</span>
                            <button class="w-6 h-6 rounded-md bg-slate-200 dark:bg-slate-800 hover:bg-slate-350 dark:hover:bg-slate-700 transition flex items-center justify-center text-xs font-bold" onclick="window.changeCartQty(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-2 shrink-0">
                        <span class="font-bold text-sm">₹${itemTotal.toLocaleString('en-IN')}</span>
                        <button class="text-red-500 hover:text-red-600 transition" onclick="window.removeCartItem(${index})" aria-label="Remove item">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            `;
            itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
        });

        // Shipping and totals
        const shipping = subtotal > 1500 ? 0 : 150;
        const total = subtotal + shipping;

        subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
        shippingEl.textContent = shipping === 0 ? 'Free' : `₹${shipping}`;
        totalEl.textContent = `₹${total.toLocaleString('en-IN')}`;

        if (window.lucide) {
            window.lucide.createIcons();
        }
    };

    // Change Cart Item Quantity
    window.changeCartQty = function (index, change) {
        const cart = JSON.parse(localStorage.getItem('velouraCart') || '[]');
        if (cart[index]) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            localStorage.setItem('velouraCart', JSON.stringify(cart));
            window.updateCartBadgeAndDrawer();
            // Sync with reservation page if open
            if (typeof window.syncBookingSummary === 'function') {
                window.syncBookingSummary();
            }
        }
    };

    // Remove Cart Item
    window.removeCartItem = function (index) {
        const cart = JSON.parse(localStorage.getItem('velouraCart') || '[]');
        cart.splice(index, 1);
        localStorage.setItem('velouraCart', JSON.stringify(cart));
        window.updateCartBadgeAndDrawer();
        // Sync with reservation page if open
        if (typeof window.syncBookingSummary === 'function') {
            window.syncBookingSummary();
        }
    };

    // Function to register theme toggle, mobile nav menu, profile dropdown, and clicks outside
    function setupInteractions() {
        // 1. RTL Toggle
        const rtlToggle = document.getElementById('rtl-toggle');
        if (rtlToggle) {
            rtlToggle.addEventListener('click', () => {
                const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
                const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
                document.documentElement.setAttribute('dir', newDir);
                localStorage.setItem('rtl', newDir);
                window.dispatchEvent(new Event('rtl-toggle-event'));
            });
        }

        // 2. Theme Toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                const isDark = document.documentElement.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                syncThemeIcon();
                window.dispatchEvent(new Event('theme-toggle-event'));
            });
        }

        // 3. Cart Drawer Toggle
        const cartBtn = document.getElementById('cart-toggle-btn');
        const cartClose = document.getElementById('cart-drawer-close');
        const cartOverlay = document.getElementById('cart-drawer-overlay');
        const cartContinue = document.getElementById('cart-drawer-continue');

        if (cartBtn) {
            cartBtn.addEventListener('click', window.openCartDrawer);
        }
        if (cartClose) {
            cartClose.addEventListener('click', window.closeCartDrawer);
        }
        if (cartOverlay) {
            cartOverlay.addEventListener('click', window.closeCartDrawer);
        }
        if (cartContinue) {
            cartContinue.addEventListener('click', window.closeCartDrawer);
        }

        // 4. Profile Dropdown
        const profileBtn = document.getElementById('profile-btn');
        const profileMenu = document.getElementById('profile-menu');
        if (profileBtn && profileMenu) {
            profileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                profileMenu.classList.toggle('hidden');
            });
        }

        // 5. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileMenu.classList.toggle('hidden');
            });
        }

        // 6. Click outside to close menus
        document.addEventListener('click', (e) => {
            if (profileMenu && !profileMenu.classList.contains('hidden') && !profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
                profileMenu.classList.add('hidden');
            }
            if (mobileMenu && !mobileMenu.classList.contains('hidden') && !mobileBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Ensure external resources (Bootstrap & Lucide Icons) are imported if not present
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

    // Initialize injection
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadStylesAndScripts);
    } else {
        loadStylesAndScripts();
    }
})();
