document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-bar li');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});