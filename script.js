// 1. Navbar Sticky Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Menu Mobile Toggle (icône hamburger -> croix)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// 3. Générateur dynamique de liens WhatsApp pour les commandes
const numeroWhatsApp = "242069269364"; // Format international sans le '+'
const boutonsCommander = document.querySelectorAll('.btn-commander');

boutonsCommander.forEach(bouton => {
    bouton.addEventListener('click', (e) => {
        e.preventDefault();
        const nomProduit = bouton.getAttribute('data-product');
        const message = encodeURIComponent(`Bonjour, je suis intéressé par : ${nomProduit}`);
        const lienWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${message}`;
        window.open(lienWhatsApp, '_blank');
    });
});

// 4. Animation au scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});
