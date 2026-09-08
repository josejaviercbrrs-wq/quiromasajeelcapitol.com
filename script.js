```javascript
/* =====================================================
   EL CAPITOL BIENESTAR
   SCRIPT PRINCIPAL
===================================================== */

let selectedRating = 0;


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const stars = document.querySelectorAll("#starRating i");
    const topBtn = document.getElementById("topBtn");
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    const reviewName = document.getElementById("reviewName");
    const reviewText = document.getElementById("reviewText");
    const reviewsCount = document.getElementById("reviewsCount");
    const emptyReviews = document.getElementById("emptyReviews");


    /* =================================================
       NAVBAR — CAMBIO AL HACER SCROLL
    ================================================= */

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateNavbar);

    updateNavbar();


    /* =================================================
       MENÚ MOBILE
    ================================================= */

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            mobileMenu.classList.toggle("active");

            document.body.classList.toggle("menu-open");

        });

    }


    /* CERRAR MENÚ AL HACER CLICK */

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle?.classList.remove("active");
            mobileMenu?.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });


    /* =================================================
       ESTRELLAS
    ================================================= */

    function resetStars() {

        stars.forEach(star => {

            star.classList.remove("active");
            star.classList.remove("hovered");

        });

    }


    function paintStars(number) {

        stars.forEach((star, index) => {

            if (index < number) {
                star.classList.add("active");
            }

        });

    }


    stars.forEach((star, index) => {

        star.addEventListener("mouseenter", () => {

            resetStars();

            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("hovered");
            }

        });


        star.addEventListener("mouseleave", () => {

            resetStars();
            paintStars(selectedRating);

        });


        star.addEventListener("click", () => {

            selectedRating = index + 1;

            resetStars();
            paintStars(selectedRating);

        });

    });


    /* =================================================
       AÑADIR RESEÑA
    ================================================= */

    window.addReview = function () {

        const name = reviewName?.value.trim();
        const text = reviewText?.value.trim();


        if (!name || !text || selectedRating === 0) {

            showNotification(
                "Completa tu nombre, valoración y opinión."
            );

            return;

        }


        let reviews =
            JSON.parse(localStorage.getItem("reviews")) || [];


        reviews.push({

            name: name,
            text: text,
            rating: selectedRating,
            time: Date.now()

        });


        localStorage.setItem(
            "reviews",
            JSON.stringify(reviews)
        );


        reviewName.value = "";
        reviewText.value = "";

        selectedRating = 0;

        resetStars();

        loadReviews();


        showNotification(
            "Gracias por compartir tu experiencia."
        );

    };


    /* =================================================
       CARGAR RESEÑAS
    ================================================= */

    window.loadReviews = function () {

        const container =
            document.getElementById("reviewsContainer");


        if (!container) return;


        let reviews =
            JSON.parse(localStorage.getItem("reviews")) || [];


        reviews.sort((a, b) => b.time - a.time);


        container.innerHTML = "";


        if (reviewsCount) {
            reviewsCount.textContent = reviews.length;
        }


        if (emptyReviews) {

            emptyReviews.style.display =
                reviews.length === 0
                    ? "flex"
                    : "none";

        }


        reviews.forEach(review => {

            const card =
                document.createElement("article");

            card.className = "review-card";


            const header =
                document.createElement("div");

            header.className = "review-card-header";


            const name =
                document.createElement("h4");

            name.textContent = review.name;


            const starsContainer =
                document.createElement("div");

            starsContainer.className =
                "review-stars";


            for (let i = 0; i < 5; i++) {

                const star =
                    document.createElement("i");

                star.className =
                    i < review.rating
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star";

                starsContainer.appendChild(star);

            }


            header.appendChild(name);
            header.appendChild(starsContainer);


            const paragraph =
                document.createElement("p");

            paragraph.textContent = review.text;


            const date =
                document.createElement("span");

            date.className = "review-date";

            date.textContent = formatDate(review.time);


            card.appendChild(header);
            card.appendChild(paragraph);
            card.appendChild(date);


            container.appendChild(card);

        });

    };


    /* =================================================
       FORMATO DE FECHA
    ================================================= */

    function formatDate(timestamp) {

        const date = new Date(timestamp);

        return date.toLocaleDateString(
            "es-ES",
            {
                day: "2-digit",
                month: "2-digit",
                year: "numeric"
            }
        );

    }


    /* =================================================
       NOTIFICACIÓN
    ================================================= */

    function showNotification(message) {

        const existing =
            document.querySelector(".site-notification");

        if (existing) {
            existing.remove();
        }


        const notification =
            document.createElement("div");

        notification.className =
            "site-notification";


        notification.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <span>${escapeHTML(message)}</span>
        `;


        document.body.appendChild(notification);


        setTimeout(() => {

            notification.classList.add("show");

        }, 20);


        setTimeout(() => {

            notification.classList.remove("show");

            setTimeout(() => {
                notification.remove();
            }, 400);

        }, 3000);

    }


    /* =================================================
       PROTECCIÓN DE TEXTO
    ================================================= */

    function escapeHTML(text) {

        const div = document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =================================================
       BOTÓN VOLVER ARRIBA
    ================================================= */

    window.scrollTopSmooth = function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };


    window.addEventListener("scroll", () => {

        if (!topBtn) return;


        if (window.scrollY > 500) {

            topBtn.classList.add("visible");

        } else {

            topBtn.classList.remove("visible");

        }

    });


    /* =================================================
       ANIMACIONES AL ENTRAR EN PANTALLA
    ================================================= */

    const animatedElements =
        document.querySelectorAll(
            ".treatment-card, .price-card, .intro-copy, .booking-content, .booking-card, .review-form-card, .location-heading"
        );


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "in-view"
                            );

                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        animatedElements.forEach(element => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        animatedElements.forEach(element => {

            element.classList.add("in-view");

        });

    }


    /* =================================================
       EFECTO PARALLAX MUY SUAVE EN HERO
    ================================================= */

    const hero =
        document.querySelector(".hero");


    if (hero && window.innerWidth > 768) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;

                if (scroll < window.innerHeight) {

                    hero.style.setProperty(
                        "--hero-offset",
                        `${scroll * 0.18}px`
                    );

                }

            },
            { passive: true }
        );

    }


    /* =================================================
       CARGA INICIAL
    ================================================= */

    loadReviews();

});
```
