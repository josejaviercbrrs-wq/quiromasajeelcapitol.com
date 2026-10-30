```javascript
let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll("#starRating i");
    const topBtn = document.getElementById("topBtn");
    const currentYear = document.getElementById("currentYear");
    const nameInput = document.getElementById("reviewName");
    const textInput = document.getElementById("reviewText");
    const reviewsContainer = document.getElementById("reviewsContainer");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Gestionar la valoración por estrellas
    function paintStars(rating, className = "active") {
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
        paintStars(selectedRating);
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
            paintStars(selectedRating);
        });

        star.addEventListener("blur", () => {
            resetStars();
            paintStars(selectedRating);
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

    // Leer las reseñas guardadas en este navegador
    function getReviews() {
        try {
            const saved = localStorage.getItem("reviews");

            if (!saved) {
                return [];
            }

            const reviews = JSON.parse(saved);

            if (!Array.isArray(reviews)) {
                return [];
            }

            return reviews.filter(review =>
                review &&
                typeof review.name === "string" &&
                typeof review.text === "string" &&
                Number.isFinite(Number(review.rating)) &&
                Number(review.rating) >= 1 &&
                Number(review.rating) <= 5
            );
        } catch (error) {
            console.error("No se pudieron leer las reseñas:", error);
            return [];
        }
    }

    // Mostrar las reseñas
    window.loadReviews = function () {
        if (!reviewsContainer) {
            return;
        }

        reviewsContainer.replaceChildren();

        const reviews = getReviews().sort(
            (a, b) => (Number(b.time) || 0) - (Number(a.time) || 0)
        );

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
    };

    // Añadir una reseña
    window.addReview = function () {
        if (!nameInput || !textInput) {
            alert("No se ha encontrado el formulario de reseñas.");
            return;
        }

        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (!name || !text) {
            alert("Escribe tu nombre y tu opinión.");
            return;
        }

        if (selectedRating < 1 || selectedRating > 5) {
            alert("Selecciona una valoración de 1 a 5 estrellas.");
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
            localStorage.setItem("reviews", JSON.stringify(reviews));
        } catch (error) {
            console.error("No se pudo guardar la reseña:", error);
            alert("No se ha podido guardar la opinión en este navegador.");
            return;
        }

        nameInput.value = "";
        textInput.value = "";
        selectRating(0);

        window.loadReviews();
        alert("Tu opinión se ha guardado en este navegador.");
    };

    // Mostrar u ocultar el botón de volver arriba
    function updateTopButton() {
        if (!topBtn) {
            return;
        }

        topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    }

    window.addEventListener("scroll", updateTopButton, {
        passive: true
    });

    if (topBtn) {
        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Carga inicial
    window.loadReviews();
    updateTopButton();
});
```
