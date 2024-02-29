// Script for hamburger button functionality and opening/closing sidebar
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerBtn = document.querySelector('.hamburger');
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
    const mainContent = document.querySelector('.main-content');

    hamburgerBtn.addEventListener('click', toggleSidebar);

    mainContent.addEventListener('click', closeSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    function toggleSidebar() {
        sidebar.classList.toggle('open');
    }

    function closeSidebar() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

// JavaScript for moving the hamburger button while scrolling
window.addEventListener('scroll', function() {
    const hamburgerContainer = document.querySelector('.hamburger-container');
    const scrollPosition = window.scrollY;

    // Adjust top position of hamburger container based on scroll position
    hamburgerContainer.style.top = (20 + scrollPosition) + 'px';
});
