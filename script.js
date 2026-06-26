let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");

/* ⭐ ESTRELLAS PRO */
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
    stars.forEach(s => s.classList.remove("active", "hovered"));
}

/* 💾 RESEÑAS */
function addReview() {
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
        time: Date.now(),
        likes: 0
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    name.value = "";
    text.value = "";
    selectedRating = 0;
    resetStars();

    loadReviews();
}

/* 📥 CARGAR RESEÑAS */
function loadReviews() {
    const container = document.getElementById("reviewsContainer");
    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.sort((a,b) => b.time - a.time);

    reviews.forEach((r, i) => {
        container.innerHTML += `
        <div class="review-card">
            <h4>${r.name}</h4>
            <div>${"⭐".repeat(r.rating)}</div>
            <p>${r.text}</p>
            <button onclick="likeReview(${i})">❤️ ${r.likes}</button>
        </div>
        `;
    });
}

/* ❤️ LIKE */
function likeReview(i) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews[i].likes++;
    localStorage.setItem("reviews", JSON.stringify(reviews));
    loadReviews();
}

/* ⬆️ VOLVER ARRIBA */
function scrollTopSmooth() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* INIT */
loadReviews();
