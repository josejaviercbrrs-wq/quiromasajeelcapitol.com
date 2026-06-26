// Scroll reveal tipo Apple
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Parallax suave HERO
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});
