export default function() {

    const navBtn = document.getElementById('navBtn');
    let navIsClosed = true;

    // Hero navigation
    navBtn.addEventListener('click', () => {
        console.log(navIsClosed);
        if (navIsClosed) {
            // activate
            navBtn.classList.add('is-active');
            navBar.classList.add('nav-active');
            navIsClosed = false;
        } else {
            // deactivate
            navBtn.classList.remove('is-active');
            //navBar.classList.remove('nav-active');
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
