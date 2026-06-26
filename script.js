let selectedRating = 0;
const stars = document.querySelectorAll("#starRating i");

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

function resetStars(){
    stars.forEach(s=>{
        s.classList.remove("hovered");
        s.classList.remove("active");
    });
}

// REVIEWS
function addReview(){
const name=document.getElementById("reviewName").value;
const text=document.getElementById("reviewText").value;

if(!name||!text||selectedRating===0){
alert("Completa todo");
return;
}

let reviews=JSON.parse(localStorage.getItem("reviews")||"[]");

reviews.unshift({
name,
text,
rating:selectedRating
});

localStorage.setItem("reviews",JSON.stringify(reviews));

loadReviews();

document.getElementById("reviewName").value="";
document.getElementById("reviewText").value="";
selectedRating=0;
resetStars();
}

function loadReviews(){
let reviews=JSON.parse(localStorage.getItem("reviews")||"[]");
let container=document.getElementById("reviewsContainer");

container.innerHTML="";

reviews.forEach(r=>{
container.innerHTML+=`
<div class="review-card">
<strong>${r.name}</strong>
<div>${"⭐".repeat(r.rating)}</div>
<p>${r.text}</p>
</div>`;
});
}

loadReviews();
