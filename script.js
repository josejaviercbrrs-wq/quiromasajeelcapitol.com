// =========================
// ⭐ RESEÑAS + ESTRELLAS
// =========================

let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");

// hover + click
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

function resetStars() {
    stars.forEach(s => {
        s.classList.remove("hovered");
        s.classList.remove("active");
    });
}

// =========================
// 💾 GUARDAR RESEÑA
// =========================

function addReview() {
    const name = document.getElementById("reviewName").value;
    const text = document.getElementById("reviewText").value;

    if (!name || !text || selectedRating === 0) {
        alert("Completa todo");
        return;
    }

    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.push({
        name,
        text,
        rating: selectedRating,
        time: Date.now()
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    loadReviews();

    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
    selectedRating = 0;
    resetStars();
}

// =========================
// 📥 CARGAR RESEÑAS + FILTRO
// =========================

function loadReviews() {
    const container = document.getElementById("reviewsContainer");
    const filter = document.getElementById("reviewFilter")?.value || "newest";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if (filter === "newest") {
        reviews.sort((a,b) => b.time - a.time);
    }

    if (filter === "highest") {
        reviews.sort((a,b) => b.rating - a.rating);
    }

    if (filter === "lowest") {
        reviews.sort((a,b) => a.rating - b.rating);
    }

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

// =========================
// 🧹 BORRAR TODO
// =========================

function clearReviews() {
    localStorage.removeItem("reviews");
    loadReviews();
}

// =========================
// 📍 MAPA ANIMACIÓN
// =========================

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
