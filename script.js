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

    // 📅 FECHA ACTUAL
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);

    // ❌ NO FECHAS PASADAS
    if (selectedDate < today) {
        alert("No puedes reservar días pasados");
        return;
    }

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const fullDateTime = `${date} ${time}`;

    // ❌ BLOQUEAR HORA YA RESERVADA
    const exists = bookings.find(b => b.datetime === fullDateTime);

    if (exists) {
        alert("Esta hora ya está reservada");
        return;
    }

    // 💾 GUARDAR RESERVA
    bookings.push({
        datetime: fullDateTime
    });

    localStorage.setItem("bookings", JSON.stringify(bookings));

    const message =
        `Hola quiero reservar:%0A` +
        `📅 Fecha: ${date}%0A` +
        `⏰ Hora: ${time}`;

    window.open(`https://wa.me/34675752500?text=${message}`, "_blank");
};
#topBtn {
    display: none;
    position: fixed;
    bottom: 25px;
    left: 25px;   /* 👈 ahora a la izquierda */
    right: auto;

    width: 55px;
    height: 55px;

    border-radius: 50%; /* totalmente redondo */

    background: linear-gradient(135deg, #ffd36a, #ffb347);
    color: black;

    border: none;
    cursor: pointer;
    z-index: 999;

    font-size: 20px;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 0 12px rgba(255, 211, 106, 0.4);
    transition: all 0.3s ease;
}

/* INIT */
loadReviews();

});
#topBtn:hover {
    transform: scale(1.15);
    box-shadow: 0 0 25px rgba(255, 211, 106, 0.7);
}
document.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    const minDate = `${yyyy}-${mm}-${dd}`;

    dateInput.min = minDate;
});
