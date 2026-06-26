// SCROLL ANIMATION
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(e=>{
if(e.getBoundingClientRect().top<window.innerHeight-100){
e.style.opacity="1";
e.style.transform="translateY(0)";
}
});
});

// SCROLL TOP
function scrollTopSmooth(){
window.scrollTo({top:0,behavior:"smooth"});
}

// STARS
let selectedRating=0;
const stars=document.querySelectorAll("#starRating i");

stars.forEach((star,i)=>{
star.onclick=()=>{
selectedRating=i+1;
stars.forEach(s=>s.classList.remove("active"));
for(let x=0;x<selectedRating;x++){
stars[x].classList.add("active");
}
};
});

// REVIEWS
function addReview(){
const n=document.getElementById("reviewName").value;
const t=document.getElementById("reviewText").value;

if(!n||!t||!selectedRating)return;

let r=JSON.parse(localStorage.getItem("reviews")||"[]");

r.unshift({
name:n,
text:t,
rating:selectedRating,
date:new Date().toLocaleDateString()
});

localStorage.setItem("reviews",JSON.stringify(r));
loadReviews();
}

function loadReviews(){
let r=JSON.parse(localStorage.getItem("reviews")||"[]");
let c=document.getElementById("reviewsContainer");
c.innerHTML="";

r.forEach(x=>{
c.innerHTML+=`
<div>
<h4>${x.name} ⭐${x.rating}</h4>
<small>${x.date}</small>
<p>${x.text}</p>
</div>`;
});
}

loadReviews();

// MAP ANIMATION
const map=document.querySelector(".map-card");
if(map){
map.style.opacity=0;
map.style.transform="translateY(40px)";
map.style.transition="1s";
new IntersectionObserver(e=>{
e.forEach(i=>{
if(i.isIntersecting){
map.style.opacity=1;
map.style.transform="translateY(0)";
}
});
}).observe(map);
}

// LANGUAGE SWITCH
let lang="es";

function toggleLang(){
lang=lang==="es"?"ca":"es";
document.querySelectorAll("[data-es]").forEach(el=>{
el.innerText=el.getAttribute("data-"+lang);
});

document.getElementById("flag").src=
lang==="es"
?"https://flagcdn.com/es.svg"
:"https://flagcdn.com/ad.svg";
}
