```javascript
"use strict";

let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll("#starRating .star");
    const topBtn = document.getElementById("topBtn");
    const currentYear = document.getElementById("currentYear");
    const reviewForm = document.getElementById("reviewForm");
    const nameInput = document.getElementById("reviewName");
    const textInput = document.getElementById("reviewText");
    const reviewsContainer = document.getElementById("reviewsContainer");
    const reviewMessage = document.getElementById("reviewMessage");

    const STORAGE_KEY = "reviews";

    // Año actualizado automáticamente
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Animaciones al aparecer los elementos en pantalla
    const revealElements = document.querySelectorAll(".reveal");
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if ("IntersectionObserver" in window && !reduceMotion) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element => {
            element.classList.add("visible");
        });
    }

    // Valoración por estrellas
    function paintStars(rating, className) {
        stars.forEach((star, index) => {
            star.classList.toggle(className, index < rating);
        });
    }

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove("active", "hovered");
        });
    }

    function selectRating(rating) {
        selectedRating = rating;
        resetStars();
        paintStars(rating, "active");
    }

    stars.forEach((star, index) => {
        const rating = index + 1;

        star.addEventListener("mouseenter", () => {
            resetStars();
            paintStars(rating, "hovered");
        });

        star.addEventListener("focus", () => {
            resetStars();
            paintStars(rating, "hovered");
        });

        star.addEventListener("mouseleave", () => {
            resetStars();
            paintStars(selectedRating, "active");
        });

        star.addEventListener("blur", () => {
            resetStars();
            paintStars(selectedRating, "active");
        });

        star.addEventListener("click", () => {
            selectRating(rating);
        });

        star.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectRating(rating);
            }
        });
    });

    // Leer reseñas del almacenamiento local
    function getReviews() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);

            if (!saved) {
                return [];
            }

            const reviews = JSON.parse(saved);

            if (!Array.isArray(reviews)) {
                return [];
            }

            return reviews.filter(review => {
                if (!review || typeof review !== "object") {
                    return false;
                }

                const rating = Number(review.rating);

                return (
                    typeof review.name === "string" &&
                    typeof review.text === "string" &&
                    Number.isInteger(rating) &&
                    rating >= 1 &&
                    rating <= 5
                );
            });
        } catch (error) {
            console.error("No se pudieron leer las reseñas:", error);
            return [];
        }
    }

    // Mostrar las reseñas de forma segura
    function loadReviews() {
        if (!reviewsContainer) {
            return;
        }

        reviewsContainer.replaceChildren();

        const reviews = getReviews().sort(
            (a, b) => (Number(b.time) || 0) - (Number(a.time) || 0)
        );

        if (reviews.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "empty-reviews";
            emptyMessage.textContent =
                "Todavía no hay opiniones guardadas en este navegador.";
            reviewsContainer.appendChild(emptyMessage);
            return;
        }

        reviews.forEach(review => {
            const card = document.createElement("article");
            card.className = "review-card";

            const title = document.createElement("h4");
            title.textContent = review.name;

            const rating = document.createElement("div");
            rating.className = "review-stars";
            rating.setAttribute(
                "aria-label",
                `${Number(review.rating)} de 5 estrellas`
            );
            rating.textContent = "★".repeat(Number(review.rating));

            const paragraph = document.createElement("p");
            paragraph.textContent = review.text;

            card.append(title, rating, paragraph);
            reviewsContainer.appendChild(card);
        });
    }

    // Mensajes del formulario
    function showMessage(message) {
        if (reviewMessage) {
            reviewMessage.textContent = message;
        }
    }

    // Publicar una opinión
    if (reviewForm) {
        reviewForm.addEventListener("submit", event => {
            event.preventDefault();

            if (!nameInput || !textInput) {
                showMessage("No se ha encontrado el formulario.");
                return;
            }

            const name = nameInput.value.trim();
            const text = textInput.value.trim();

            if (!name || !text) {
                showMessage("Completa tu nombre y tu opinión.");
                return;
            }

            if (selectedRating < 1 || selectedRating > 5) {
                showMessage("Selecciona una valoración de 1 a 5 estrellas.");
                return;
            }

            const reviews = getReviews();

            reviews.push({
                name: name.slice(0, 60),
                text: text.slice(0, 1000),
                rating: selectedRating,
                time: Date.now()
            });

            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
            } catch (error) {
                console.error("No se pudo guardar la opinión:", error);
                showMessage(
                    "No se pudo guardar la opinión en este navegador."
                );
                return;
            }

            reviewForm.reset();
            selectRating(0);
            loadReviews();

            showMessage(
                "Opinión guardada en este navegador. No se ha publicado en Google."
            );
        });
    }

    // Botón para volver arriba
    function updateTopButton() {
        if (!topBtn) {
            return;
        }

        topBtn.style.display = window.scrollY > 350 ? "flex" : "none";
    }

    window.addEventListener("scroll", updateTopButton, {
        passive: true
    });

    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: reduceMotion ? "auto" : "smooth"
            });
        });
    }

    // Carga inicial
    loadReviews();
    updateTopButton();
});
```
