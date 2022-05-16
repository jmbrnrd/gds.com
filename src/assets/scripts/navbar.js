export default function() {

    const main = document.querySelector('main')
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
