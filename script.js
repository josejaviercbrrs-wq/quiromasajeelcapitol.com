let selectedRating = 0;

document.addEventListener("DOMContentLoaded", () => {

    const stars = document.querySelectorAll("#starRating i");

    function resetStars() {
        stars.forEach(s => s.classList.remove("active", "hovered"));
    }

    function paint(n) {
        for (let i = 0; i < n; i++) {
            stars[i].classList.add("active");
        }
    }

    stars.forEach((star, i) => {

        star.addEventListener("mouseover", () => {
            resetStars();
            for (let j = 0; j <= i; j++) stars[j].classList.add("hovered");
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

    window.loadReviews = function () {
        const container = document.getElementById("reviewsContainer");
        container.innerHTML = "";

        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        reviews.sort((a,b)=>b.time-a.time);

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

    window.sendWhatsAppBooking = function () {

        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        if (!date || !time) return alert("Completa fecha y hora");

        const today = new Date();
        today.setHours(0,0,0,0);

        const selected = new Date(date);

        if (selected < today) return alert("Fecha inválida");

        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        const full = `${date} ${time}`;

        if (bookings.find(b => b.datetime === full)) {
            return alert("Hora ocupada");
        }

        bookings.push({ datetime: full });
        localStorage.setItem("bookings", JSON.stringify(bookings));

        const msg = `Hola quiero reservar:%0A📅 ${date}%0A⏰ ${time}`;

        window.open(`https://wa.me/34675752500?text=${msg}`, "_blank");
    };

    const topBtn = document.getElementById("topBtn");

    window.scrollTopSmooth = () => window.scrollTo({top:0,behavior:"smooth"});

    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    const date = document.getElementById("date");
    const d = new Date();
    date.min = d.toISOString().split("T")[0];

    loadReviews();
});
