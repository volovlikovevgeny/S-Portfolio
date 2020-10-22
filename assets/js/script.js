const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// ACTVE ANDE REMOVE MENU
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // Active link
    navLink.forEach(el => el.classList.remove('active'));
    this.classList.add('active');

    // Remove menu Mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');

}

navLink.forEach(el => el.addEventListener('click', linkAction));