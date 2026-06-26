let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");

if (stars.length > 0) {

    stars.forEach((star, index) => {

        star.addEventListener("mouseover", () => {
            resetStars();
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("hovered");
            }
        });

        star.addEventListener("mouseout", () => {
            resetStars();
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });

        star.addEventListener("click", () => {
            selectedRating = index + 1;
            resetStars();

            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });
}

function resetStars() {
    stars.forEach(s => {
        s.classList.remove("hovered");
        s.classList.remove("active");
    });
}

// GUARDAR RESEÑA
function addReview() {
    const name = document.getElementById("reviewName");
    const text = document.getElementById("reviewText");

    if (!name || !text) return;

    if (!name.value || !text.value || selectedRating === 0) {
        alert("Completa todo");
        return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
        name: name.value,
        text: text.value,
        rating: selectedRating,
        time: Date.now()
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    name.value = "";
    text.value = "";
    selectedRating = 0;
    resetStars();

    loadReviews();
}

// CARGAR RESEÑAS
function loadReviews() {
    const container = document.getElementById("reviewsContainer");
    if (!container) return;

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    container.innerHTML = "";

    reviews.forEach(r => {
        container.innerHTML += `
        <div class="review-card">
            <h4>${r.name}</h4>
            <div>${"⭐".repeat(r.rating)}</div>
            <p>${r.text}</p>
        </div>
        `;
    });
}

// MAPA ANIMACIÓN
const map = document.querySelector(".map-card");

if (map) {
    map.style.opacity = "0";
    map.style.transform = "translateY(30px)";
    map.style.transition = "0.8s ease";

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = "1";
                e.target.style.transform = "translateY(0)";
            }
        });
    });

    obs.observe(map);
}

// INIT
loadReviews();
