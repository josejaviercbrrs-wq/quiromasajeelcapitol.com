document.addEventListener("DOMContentLoaded", () => {

let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");

/* ⭐ ESTRELLAS */
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
        time: Date.now()
    });

    localStorage.setItem("reviews", JSON.stringify(reviews));

    name.value = "";
    text.value = "";
    selectedRating = 0;
    resetStars();

    loadReviews();
}

/* 📥 RESEÑAS */
function loadReviews() {
    const container = document.getElementById("reviewsContainer");
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
}

/* 📲 WHATSAPP */
window.sendWhatsAppBooking = function () {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (!date || !time) {
        alert("Selecciona fecha y hora");
        return;
    }

    const message =
        `Hola quiero reservar:%0A` +
        `📅 Fecha: ${date}%0A` +
        `⏰ Hora: ${time}`;

    window.open(`https://wa.me/34675752500?text=${message}`, "_blank");
};

/* ⬆️ TOP BUTTON */
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

window.scrollTopSmooth = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

/* INIT */
loadReviews();

});
