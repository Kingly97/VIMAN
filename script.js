// 1. Navbar (fond qui s'accentue légèrement au scroll — géré en CSS, rien à faire ici sauf si besoin plus tard)

// 2. Menu Mobile Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// 3. Générateur dynamique de liens WhatsApp pour les commandes
const numeroWhatsApp = "242069269364";
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

// 4. Animation au scroll
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
