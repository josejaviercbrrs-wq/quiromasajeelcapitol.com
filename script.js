/* EL CAPITOL BIENESTAR — Funciones de la web */

(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  // Menú adaptable a móviles
  if (menuToggle && nav) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Abrir menú" : "Cerrar menú"
      );

      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    // Cerrar el menú al elegir una sección
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar el menú con Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    // Cerrar el menú al pulsar fuera de él
    document.addEventListener("click", (event) => {
      if (
        nav.classList.contains("is-open") &&
        !nav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });
  }

  // Actualizar automáticamente el año del copyright
  const year = document.querySelector("#current-year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // Animaciones de entrada al desplazarse por la página
  const revealItems = document.querySelectorAll(".reveal");

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });
  } else {
    // Mostrar el contenido aunque el navegador no admita
    // IntersectionObserver o el usuario reduzca el movimiento.
    revealItems.forEach((item) => {
      item.classList.add("is-visible");
    });
  }
})();
