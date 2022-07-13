export default function() {

    const navMenu = document.getElementById('navMenu');
    const navBtn = document.getElementById('navBtn');
    const mobile = document.querySelector('[data-mobile]');
    let navIsClosed = true;

    // Hero navigation
    navMenu.addEventListener('click', () => {
        console.log(navIsClosed);
        if (navIsClosed) {
            // activate
            navBtn.classList.add('is-active');
            navMenu.classList.add('nav-active');
            mobile.classList.add('active');
            navIsClosed = false;
        } else {
            // deactivate
            navBtn.classList.remove('is-active');
            navMenu.classList.remove('nav-active');
            mobile.classList.remove('active');
            navIsClosed = true;
        }
    });
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');

    // when hero section is no longer in the viewport reveal global nav
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log(entry.isIntersecting);
            entry.isIntersecting ? header.classList.remove('open') : header.classList.add('open');
        });
    });
    observer.observe(hero);
}
