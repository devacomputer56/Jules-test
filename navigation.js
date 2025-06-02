document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (!navToggle || !navMenu) {
        console.error('Navigation toggle button or menu container not found.');
        return;
    }

    const pages = [
        { name: "Home", href: "index.html" },
        { name: "About Jules", href: "product.html" },
        { name: "AI Coding Dangers", href: "dangers-of-ai-coding.html" }
    ];

    // Populate the navigation menu
    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page.href;
        link.textContent = page.name;
        // To highlight the current page (optional, requires knowing current page)
        // if (window.location.pathname.endsWith('/' + page.href) || (window.location.pathname === '/' && page.href === 'index.html')) {
        //    link.classList.add('active-nav-link'); // Needs CSS for .active-nav-link
        // }
        navMenu.appendChild(link);
    });

    // Toggle menu visibility
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('nav-menu-visible');

        // Optional: Change button text/icon (e.g., to 'X')
        if (navMenu.classList.contains('nav-menu-visible')) {
            navToggle.innerHTML = '&times;'; // 'X' symbol
        } else {
            navToggle.innerHTML = '☰'; // Hamburger icon
        }
    });

    // Optional: Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('nav-menu-visible')) {
            navMenu.classList.remove('nav-menu-visible');
            navToggle.innerHTML = '☰'; // Reset hamburger icon
        }
    });
});
