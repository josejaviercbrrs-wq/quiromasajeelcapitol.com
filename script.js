document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     MENÚ MÓVIL
  ========================================== */

  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("nav");

  if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

      nav.classList.toggle("open");
      menuButton.classList.toggle("active");

      const expanded = menuButton.classList.contains("active");

      menuButton.setAttribute("aria-expanded", expanded);

    });

    nav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");

      });

    });
  }


  /* ==========================================
     HEADER AL HACER SCROLL
  ========================================== */

  const header = document.getElementById("header");

  function updateHeader() {

    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();


  /* ==========================================
     BOTÓN SUBIR
  ========================================== */

  const topButton = document.getElementById("topButton");

  if (topButton) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 500) {
        topButton.classList.add("show");
      } else {
        topButton.classList.remove("show");
      }

    });

    topButton.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    });

  }


  /* ==========================================
     ANIMACIONES AL APARECER
  ========================================== */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("visible");
    });

  }


  /* ==========================================
     ESTRELLAS DE RESEÑAS
  ========================================== */

  const stars = document.querySelectorAll("#starRating button");

  let selectedRating = 0;


  function paintStars(rating) {

    stars.forEach(star => {

      const value = Number(star.dataset.rating);

      if (value <= rating) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }

    });

  }


  stars.forEach(star => {

    star.addEventListener("mouseenter", () => {

      paintStars(Number(star.dataset.rating));

    });


    star.addEventListener("click", () => {

      selectedRating = Number(star.dataset.rating);

      paintStars(selectedRating);

    });

  });


  const starContainer = document.getElementById("starRating");

  if (starContainer) {

    starContainer.addEventListener("mouseleave", () => {
      paintStars(selectedRating);
    });

  }


  /* ==========================================
     RESEÑAS
  ========================================== */

  const reviewName = document.getElementById("reviewName");
  const reviewText = document.getElementById("reviewText");
  const reviewSubmit = document.getElementById("reviewSubmit");
  const reviewStatus = document.getElementById("reviewStatus");
  const reviewsContainer = document.getElementById("reviewsContainer");


  function getReviews() {

    try {

      const saved = localStorage.getItem("reviews");

      if (!saved) return [];

      const reviews = JSON.parse(saved);

      if (!Array.isArray(reviews)) return [];

      return reviews;

    } catch (error) {

      console.error("No se pudieron cargar las reseñas:", error);

      return [];

    }

  }


  function saveReviews(reviews) {

    try {

      localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
      );

      return true;

    } catch (error) {

      console.error("No se pudieron guardar las reseñas:", error);

      return false;

    }

  }


  function createStars(rating) {

    let html = "";

    for (let i = 1; i <= 5; i++) {

      if (i <= rating) {
        html += "★";
      } else {
        html += "☆";
      }

    }

    return html;

  }


  function renderReviews() {

    if (!reviewsContainer) return;

    const reviews = getReviews();

    reviewsContainer.innerHTML = "";


    if (reviews.length === 0) {

      reviewsContainer.innerHTML = `
        <div class="no-reviews">
          <i class="fa-regular fa-comment"></i>
          <span>Aún no hay opiniones publicadas.</span>
        </div>
      `;

      return;

    }


    reviews
      .sort((a, b) => b.date - a.date)
      .forEach(review => {

        const article = document.createElement("article");

        article.className = "review-card";


        const top = document.createElement("div");

        top.className = "review-top";


        const name = document.createElement("strong");

        name.textContent = review.name;


        const starsElement = document.createElement("span");

        starsElement.className = "review-stars";

        starsElement.textContent = createStars(review.rating);


        top.appendChild(name);
        top.appendChild(starsElement);


        const text = document.createElement("p");

        text.textContent = review.text;


        const date = document.createElement("small");

        date.textContent = new Date(review.date).toLocaleDateString(
          "es-ES",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          }
        );


        article.appendChild(top);
        article.appendChild(text);
        article.appendChild(date);


        reviewsContainer.appendChild(article);

      });

  }


  function showStatus(message, type = "") {

    if (!reviewStatus) return;

    reviewStatus.textContent = message;
    reviewStatus.className = "review-status " + type;

  }


  function addReview() {

    const name = reviewName
      ? reviewName.value.trim()
      : "";

    const text = reviewText
      ? reviewText.value.trim()
      : "";


    if (!name || !text || selectedRating === 0) {

      showStatus(
        "Completa tu nombre, opinión y valoración.",
        "error"
      );

      return;

    }


    const reviews = getReviews();


    reviews.push({
      name: name,
      text: text,
      rating: selectedRating,
      date: Date.now()
    });


    const saved = saveReviews(reviews);


    if (!saved) {

      showStatus(
        "No se pudo guardar la opinión.",
        "error"
      );

      return;

    }


    if (reviewName) {
      reviewName.value = "";
    }

    if (reviewText) {
      reviewText.value = "";
    }


    selectedRating = 0;

    paintStars(0);

    renderReviews();


    showStatus(
      "Tu opinión se ha publicado correctamente.",
      "success"
    );

  }


  if (reviewSubmit) {

    reviewSubmit.addEventListener("click", addReview);

  }


  /* Compatibilidad con tu código anterior */

  window.addReview = addReview;
  window.loadReviews = renderReviews;


  renderReviews();


  /* ==========================================
     CERRAR MENÚ CON ESC
  ========================================== */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (nav) {
        nav.classList.remove("open");
      }

      if (menuButton) {
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      }

    }

  });


  /* ==========================================
     SCROLL SUAVE
  ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});
