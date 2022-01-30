function onNavButtonClicked() {
    toggleNavMenu();
    updateAnimationDirection();
}

let isOpen = false;

function toggleNavMenu() {
    const navMenu = document.getElementById('site-nav-menu');
    isOpen = !isOpen;
    navMenu.classList.toggle('shown', isOpen);
    navMenu.setAttribute('aria-hidden', !isOpen);
}

function updateAnimationDirection() {
    const navMenuIcon = document.querySelector('#nav-menu-button .ellipsis-icon');
    navMenuIcon.classList.remove('animate-right', 'animate-left');
    setTimeout(() => {
        navMenuIcon.classList.add(isOpen ? 'animate-right' : 'animate-left');
    }, 0);
}
