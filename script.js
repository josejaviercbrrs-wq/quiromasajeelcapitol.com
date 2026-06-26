// =====================
// SCROLL REVEAL APPLE
// =====================
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(el => {
if (el.getBoundingClientRect().top < window.innerHeight - 80) {
el.classList.add("active");
}
});
});

// =====================
// BOTÓN TOP
// =====================
const topBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => window.scrollTo({top:0,behavior:"smooth"});

// =====================
// RESERVA WHATSAPP + CALENDARIO
// =====================
document.getElementById("whatsappBtn").onclick = () => {
const name = document.getElementById("name").value;
const date = document.getElementById("date").value;
const msg = document.getElementById("msg").value;

const text = `Hola, soy ${name}. Quiero reservar para el ${date}. ${msg}`;
window.open(`https://wa.me/34675752500?text=${encodeURIComponent(text)}`);
};

// =====================
// RESEÑAS PRO + FECHA + LIKES
// =====================
let selectedRating = 0;

const stars = document.querySelectorAll("#starRating i");

stars.forEach((star, i) => {
star.onclick = () => {
selectedRating = i + 1;
stars.forEach((s, j) => s.classList.toggle("active", j < selectedRating));
};
});

function addReview() {
const name = document.getElementById("reviewName").value;
const text = document.getElementById("reviewText").value;

if(!name || !text || !selectedRating) return;

let reviews = JSON.parse(localStorage.getItem("reviews") || "[]");

reviews.unshift({
name,
text,
rating:selectedRating,
date:new Date().toLocaleDateString(),
likes:0
});

localStorage.setItem("reviews", JSON.stringify(reviews));
renderReviews();
}

function likeReview(i){
let reviews = JSON.parse(localStorage.getItem("reviews"));
reviews[i].likes++;
localStorage.setItem("reviews", JSON.stringify(reviews));
renderReviews();
}

function renderReviews(){
const box = document.getElementById("reviewsContainer");
let reviews = JSON.parse(localStorage.getItem("reviews") || "[]");

box.innerHTML = "";

reviews.forEach((r,i)=>{
box.innerHTML += `
<div class="review-card">
<b>${r.name}</b> · ${r.date}<br>
${"⭐".repeat(r.rating)}
<p>${r.text}</p>
<button onclick="likeReview(${i})">👍 ${r.likes}</button>
</div>`;
});
}

renderReviews();
