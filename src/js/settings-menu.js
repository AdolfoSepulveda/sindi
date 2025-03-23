document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settingsButton');
    const settingsMenu = document.getElementById('settingsMenu');
    const hamburgerButton = document.getElementById('hamburgerButton');
    const sidebar = document.querySelector('.sidebar');

    // Toggle menu visibility when clicking the settings button
    settingsButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const isVisible = settingsMenu.style.display === 'block';
        settingsMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Toggle sidebar visibility when clicking the hamburger button
    hamburgerButton.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('sidebar--open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!settingsMenu.contains(e.target) && settingsMenu.style.display === 'block') {
            settingsMenu.style.display = 'none';
        }
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !hamburgerButton.contains(e.target) && sidebar.classList.contains('sidebar--open')) {
            sidebar.classList.remove('sidebar--open');
        }
    });
});