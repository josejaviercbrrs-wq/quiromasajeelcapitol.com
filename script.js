let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {

const stars = document.querySelectorAll("#starRating i");
const topBtn = document.getElementById("topBtn");

/* =========================
   ⭐ ESTRELLAS PRO
========================= */

function resetStars() {
    stars.forEach(s => {
        s.classList.remove("active", "hovered");
    });
}

function paint(n) {
    stars.forEach((s, i) => {
        if (i < n) {
            s.classList.add("active");
        }
    });
}

stars.forEach((star, i) => {

    star.addEventListener("mouseenter", () => {
        resetStars();
        for (let j = 0; j <= i; j++) {
            stars[j].classList.add("hovered");
        }
    });

    star.addEventListener("click", () => {
        selectedRating = i + 1;
        resetStars();
        paint(selectedRating);
    });
});

const starContainer = document.getElementById("starRating");

if (starContainer) {
    starContainer.addEventListener("mouseleave", () => {
        resetStars();
        paint(selectedRating);
    });
}

/* =========================
   🔝 BOTÓN SUBIR PRO
========================= */

function updateTopButton() {
    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
        topBtn.style.opacity = "1";
        topBtn.style.transform = "scale(1)";
    } else {
        topBtn.style.opacity = "0";
        topBtn.style.transform = "scale(0.8)";
        setTimeout(() => {
            if (window.scrollY <= 300) {
                topBtn.style.display = "none";
            }
        }, 150);
    }
}

window.addEventListener("scroll", updateTopButton);

window.scrollTopSmooth = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

/* =========================
   📝 RESEÑAS PRO
========================= */

window.addReview = function () {

    const name = document.getElementById("reviewName");
    const text = document.getElementById("reviewText");

    if (!name.value.trim() || !text.value.trim() || selectedRating === 0) {
        alert("Completa nombre, reseña y valoración");
        return;
    }

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
        name: name.value.trim(),
        text: text.value.trim(),
        rating: selectedRating,
        time: Date.now()
    };

    reviews.unshift(newReview);

    localStorage.setItem("reviews", JSON.stringify(reviews));

    name.value = "";
    text.value = "";
    selectedRating = 0;

    resetStars();
    loadReviews();
};

/* =========================
   📦 CARGAR RESEÑAS PRO
========================= */

window.loadReviews = function () {

    const container = document.getElementById("reviewsContainer");
    if (!container) return;

    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    if (reviews.length === 0) {
        container.innerHTML = `<p style="opacity:0.6">Todavía no hay reseñas</p>`;
        return;
    }

    reviews.forEach(r => {

        const stars = "⭐".repeat(r.rating);

        container.innerHTML += `
        <div class="review-card">
            <h4>${escapeHtml(r.name)}</h4>
            <div>${stars}</div>
            <p>${escapeHtml(r.text)}</p>
        </div>`;
    });
};

/* =========================
   🛡️ SEGURIDAD BÁSICA
========================= */

function escapeHtml(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

/* =========================
   🚀 INIT
========================= */

loadReviews();
updateTopButton();

});
