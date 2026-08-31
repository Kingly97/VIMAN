/* =========================================
   VIMAN — JAVASCRIPT
========================================= */


/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MENU MOBILE
========================================= */

const mobileMenu =
    document.getElementById("mobile-menu");

const navLinks =
    document.querySelector(".nav-links");


if (mobileMenu && navLinks) {

    mobileMenu.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        mobileMenu.classList.toggle("active");

    });


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                mobileMenu.classList.remove("active");

            });

        });

}


/* =========================================
   WHATSAPP COMMANDES
========================================= */

const numeroWhatsApp = "242069269364";

const boutonsCommander =
    document.querySelectorAll(".btn-commander");


boutonsCommander.forEach(bouton => {

    bouton.addEventListener("click", event => {

        event.preventDefault();


        const nomProduit =
            bouton.getAttribute("data-product");


        const texte =
            `Bonjour VIMAN, je suis intéressé par : ${nomProduit}.`;


        const message =
            encodeURIComponent(texte);


        const lienWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${message}`;


        window.open(
            lienWhatsApp,
            "_blank",
            "noopener,noreferrer"
        );

    });

});


/* =========================================
   FILTRE PAR MARQUE
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productCards =
    document.querySelectorAll(".product-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        /* bouton actif */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");


        /* filtre */

        const filter =
            button.dataset.filter;


        productCards.forEach(card => {

            const brand =
                card.dataset.brand;


            if (
                filter === "all" ||
                brand === filter
            ) {

                card.style.display = "";

                setTimeout(() => {

                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";

                }, 10);

            } else {

                card.style.opacity = "0";
                card.style.transform =
                    "translateY(10px)";

                setTimeout(() => {

                    card.style.display = "none";

                }, 200);

            }

        });

    });

});


/* =========================================
   ANIMATION AU SCROLL
========================================= */

const observer =
    new IntersectionObserver(

        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    obs.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================================
   ANIMATION DES CARTES MARQUES
========================================= */

const brandBlocks =
    document.querySelectorAll(".brand-block");


brandBlocks.forEach((block, index) => {

    block.style.transitionDelay =
        `${index * 100}ms`;

});


/* =========================================
   PROTECTION CONTRE LES IMAGES QUI NE
   CHARGENT PAS
========================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener("error", () => {

            image.classList.add("image-error");

            console.warn(
                `Image introuvable : ${image.getAttribute("src")}`
            );

        });

    });
