let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {

const stars = document.querySelectorAll("#starRating i");
const topBtn = document.getElementById("topBtn");

/* ⭐ ESTRELLAS */
stars.forEach((star, i) => {

    star.addEventListener("mouseover", () => {
        stars.forEach(s => s.classList.remove("active"));
        for (let j = 0; j <= i; j++) {
            stars[j].classList.add("active");
        }
    });

    star.addEventListener("click", () => {
        selectedRating = i + 1;
    });
});

document.getElementById("starRating").addEventListener("mouseleave", () => {
    stars.forEach(s => s.classList.remove("active"));
    for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add("active");
    }
});

/* BOTÓN ARRIBA */
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

window.scrollTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

/* RESEÑAS */
window.addReview = () => {

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
        rating: selectedRating
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    name.value = "";
    text.value = "";
    selectedRating = 0;

    loadReviews();
};

/* CARGAR RESEÑAS */
window.loadReviews = () => {

    const container = document.getElementById("reviewsContainer");
    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(r => {
        container.innerHTML += `
        <div class="review-card">
            <h4>${r.name}</h4>
            <div>${"⭐".repeat(r.rating)}</div>
            <p>${r.text}</p>
        </div>`;
    });
};

loadReviews();
});
