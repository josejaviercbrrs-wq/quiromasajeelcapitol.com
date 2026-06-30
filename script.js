let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {

const stars = document.querySelectorAll("#starRating i");
const topBtn = document.getElementById("topBtn");

/* RESET ESTRELLAS */
function resetStars() {
    stars.forEach(s => s.classList.remove("active", "hovered"));
}

/* PINTAR ESTRELLAS */
function paint(n) {
    for (let i = 0; i < n; i++) {
        stars[i].classList.add("active");
    }
}

/* ⭐ ESTRELLAS */
stars.forEach((star, i) => {

    star.addEventListener("mouseover", () => {
        resetStars();
        for (let j = 0; j <= i; j++) {
            stars[j].classList.add("hovered");
        }
    });

    star.addEventListener("mouseout", () => {
        resetStars();
        paint(selectedRating);
    });

    star.addEventListener("click", () => {
        selectedRating = i + 1;
        resetStars();
        paint(selectedRating);
    });
});

/* 📝 AÑADIR RESEÑA */
window.addReview = function () {

    const name = document.getElementById("reviewName");
    const text = document.getElementById("reviewText");

    if (!name.value || !text.value || selectedRating === 0) {
        alert("Completa todo");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

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
};

/* 📥 CARGAR RESEÑAS */
window.loadReviews = function () {

    const container = document.getElementById("reviewsContainer");
    if (!container) return;

    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.sort((a, b) => b.time - a.time);

    reviews.forEach(r => {
        container.innerHTML += `
        <div class="review-card">
            <h4>${r.name}</h4>
            <div>${"⭐".repeat(r.rating)}</div>
            <p>${r.text}</p>
        </div>
        `;
    });
};

/* 🔝 BOTÓN SUBIR */
window.scrollTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("scroll", () => {
    if (!topBtn) return;
    topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

/* INIT */
loadReviews();

});
