
// =========================
// Scroll reveal tipo Apple
// =========================
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// =========================
// Parallax suave HERO
// =========================
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
    }
});

// =========================
// ⭐ RESEÑAS FUNCIONALES
// =========================

let selectedRating = 0;

const stars = document.querySelectorAll("#starRating i");

// ⭐ interacción estrellas
stars.forEach((star, index) => {

    // hover (ilumina sin fijar)
    star.addEventListener("mouseover", () => {
        resetStars();

        for (let i = 0; i <= index; i++) {
            stars[i].classList.add("hovered");
        }
    });

    // salir hover
    star.addEventListener("mouseout", () => {
        resetStars();

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }
    });

    // click fija rating
    star.addEventListener("click", () => {
        selectedRating = index + 1;

        resetStars();

        for (let i = 0; i < selectedRating; i++) {
            stars[i].classList.add("active");
        }
    });
});

// 🧼 reset visual estrellas
function resetStars() {
    stars.forEach(s => {
        s.classList.remove("hovered");
        s.classList.remove("active");
    });
}

// 💾 guardar reseña
function addReview() {
    const name = document.getElementById("reviewName").value;
    const text = document.getElementById("reviewText").value;

    if (!name || !text || selectedRating === 0) {
        alert("Completa todo y selecciona estrellas");
        return;
    }

    const review = {
        name,
        text,
        rating: selectedRating
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    loadReviews();

    // limpiar formulario
    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
    selectedRating = 0;

    resetStars();
}

// 📥 cargar reseñas
function loadReviews() {
    const container = document.getElementById("reviewsContainer");
    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

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

// inicializar
loadReviews();

function clearReviews() {
    const confirmDelete = confirm("¿Seguro que quieres borrar todas las reseñas?");
    
    if (confirmDelete) {
        localStorage.removeItem("reviews");
        loadReviews(); // recarga la lista vacía
    }
}
