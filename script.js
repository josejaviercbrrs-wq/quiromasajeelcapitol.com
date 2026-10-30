
let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll("#starRating i");
    const topBtn = document.getElementById("topBtn");

    /* RESET ESTRELLAS */
    function resetStars() {
        stars.forEach(star => {
            star.classList.remove("active", "hovered");
        });
    }

    /* PINTAR ESTRELLAS */
    function paint(rating) {
        for (let i = 0; i < rating; i++) {
            if (stars[i]) {
                stars[i].classList.add("active");
            }
        }
    }

    /* ESTRELLAS */
    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => {
            resetStars();

            for (let j = 0; j <= index; j++) {
                if (stars[j]) {
                    stars[j].classList.add("hovered");
                }
            }
        });

        star.addEventListener("mouseout", () => {
            resetStars();
            paint(selectedRating);
        });

        star.addEventListener("click", () => {
            selectedRating = index + 1;
            resetStars();
            paint(selectedRating);
        });
    });

    /* LEER RESEÑAS GUARDADAS */
    function getReviews() {
        try {
            const savedReviews = localStorage.getItem("reviews");
            const reviews = savedReviews ? JSON.parse(savedReviews) : [];

            return Array.isArray(reviews) ? reviews : [];
        } catch (error) {
            console.error("No se pudieron leer las reseñas:", error);
            return [];
        }
    }

    /* AÑADIR RESEÑA */
    window.addReview = function () {
        const nameInput = document.getElementById("reviewName");
        const textInput = document.getElementById("reviewText");

        if (!nameInput || !textInput) {
            console.error("No se encuentran los campos de las reseñas.");
            return;
        }

        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (!name || !text || selectedRating === 0) {
            alert("Completa todo");
            return;
        }

        const reviews = getReviews();

        reviews.push({
            name: name,
            text: text,
            rating: selectedRating,
            time: Date.now()
        });

        try {
            localStorage.setItem("reviews", JSON.stringify(reviews));
        } catch (error) {
            console.error("No se pudo guardar la reseña:", error);
            alert("No se ha podido guardar la reseña en este navegador.");
            return;
        }

        nameInput.value = "";
        textInput.value = "";
        selectedRating = 0;

        resetStars();
        window.loadReviews();
    };

    /* CARGAR RESEÑAS */
    window.loadReviews = function () {
        const container = document.getElementById("reviewsContainer");

        if (!container) return;

        container.replaceChildren();

        const reviews = getReviews();
        reviews.sort((a, b) => (b.time || 0) - (a.time || 0));

        reviews.forEach(review => {
            const card = document.createElement("div");
            card.className = "review-card";

            const title = document.createElement("h4");
            title.textContent = review.name || "";

            const rating = document.createElement("div");
            const validRating = Math.max(
                0,
                Math.min(5, Number(review.rating) || 0)
            );
            rating.textContent = "⭐".repeat(validRating);

            const paragraph = document.createElement("p");
            paragraph.textContent = review.text || "";

            card.append(title, rating, paragraph);
            container.appendChild(card);
        });
    };

    /* BOTÓN SUBIR */
    window.scrollTopSmooth = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", () => {
        if (!topBtn) return;

        topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    /* INICIALIZACIÓN */
    window.loadReviews();
});
