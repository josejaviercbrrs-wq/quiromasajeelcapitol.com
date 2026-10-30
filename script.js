"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mainNav = document.getElementById("main-nav");
  const languageSelect = document.getElementById("language-select");

  // Año automático del pie de página
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Menú móvil
  function closeMenu() {
    if (!menuToggle || !mainNav) return;

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    mainNav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Abrir menú" : "Cerrar menú"
      );

      mainNav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (
        mainNav.classList.contains("is-open") &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }

  // Animaciones de entrada al desplazarse
  const revealElements = document.querySelectorAll(".reveal");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
  }

  // Traducciones
  const translations = {
    es: {
      announcement: "Tu momento de calma te espera en Palma",
      bookTop: "Reserva tu cita",
      navAbout: "Filosofía",
      navMassages: "Masajes",
      navPrices: "Tarifas",
      navVisit: "Encuéntranos",
      navBook: "Reservar",
      languageLabel: "Idioma",
      heroEyebrow: "PALMA · BIENESTAR PERSONAL",
      heroTitle: "El arte de<br><em>sentirte bien.</em>",
      heroText: "Una pausa del mundo exterior. Un espacio para reconectar contigo, soltar tensiones y recuperar tu equilibrio.",
      heroButton: "Reserva tu momento",
      discover: "Descubre el espacio",
      heroBottom: "TU BIENESTAR, SIN PRISAS",
      introSide: "UNA FORMA DE CUIDARTE",
      introEyebrow: "BIENVENIDO A EL CAPITOL",
      introTitle: "El lujo no es hacer más.<br><em>Es poder parar.</em>",
      introText: "Entre las prisas del día a día, regalarte un momento de atención puede marcar la diferencia. En El Capitol Bienestar queremos ofrecerte un espacio donde bajar el ritmo y dedicar tiempo a ti.",
      introLink: "Encuentra tu momento",
      manifestoEyebrow: "VUELVE A TI",
      manifestoTitle: "Respira.<br><em>Desconecta.</em><br>Reconecta.",
      manifestoText: "A veces, lo que necesitas es darte permiso para parar.",
      massageEyebrow: "NUESTROS TRATAMIENTOS",
      massageTitle: "Encuentra tu <em>ritmo.</em>",
      massageIntro: "Cada persona necesita algo distinto. Elige el tiempo que quieres dedicarte y consulta con nosotros qué opción encaja contigo.",
      relaxTitle: "Masaje relajante",
      relaxText: "Un momento para bajar el ritmo, descansar y dedicarte atención.",
      sportTitle: "Masaje deportivo",
      sportText: "Una opción orientada a quienes practican deporte y desean cuidar su recuperación y movilidad.",
      decontractTitle: "Masaje descontracturante",
      decontractText: "Un masaje enfocado en zonas con tensión muscular y sobrecarga.",
      askTreatment: "Consultar tratamiento",
      treatmentNote: "Consulta por WhatsApp la disponibilidad y el tratamiento más adecuado para ti.",
      priceEyebrow: "TU TIEMPO, TU ELECCIÓN",
      priceTitle: "Regálate un<br><em>momento.</em>",
      priceIntro: "Elige la duración que mejor se adapte a tu día.",
      price30: "30 minutos",
      price30desc: "Una pausa breve",
      price60: "60 minutos",
      price60desc: "Tiempo para desconectar",
      price90: "90 minutos",
      price90desc: "Una experiencia más larga",
      priceButton: "Consultar disponibilidad",
      priceNote: "Reserva previa por WhatsApp. Consulta los detalles antes de tu visita.",
      quote: "Dedicarte tiempo no es un lujo. Es una manera de cuidarte.",
      faqEyebrow: "ANTES DE TU VISITA",
      faqTitle: "¿Tienes alguna <em>duda?</em>",
      faqIntro: "Aquí tienes algunas respuestas útiles.",
      faqQ1: "¿Cómo puedo reservar?",
      faqA1: "Puedes escribirnos por WhatsApp para consultar disponibilidad y acordar el día y la hora de tu cita.",
      faqQ2: "¿Cuáles son los precios?",
      faqA2: "Las sesiones cuestan 30 € por 30 minutos, 50 € por 60 minutos y 70 € por 90 minutos.",
      faqQ3: "¿Dónde está El Capitol Bienestar?",
      faqA3: "Estamos en Plaça d'Alexander Fleming 12, Nord, 07004 Palma, Illes Balears. Puedes abrir el mapa desde la sección de contacto.",
      faqQ4: "¿Cuál es el horario?",
      faqA4: "Nuestro horario indicado es de 10:00 a 20:00. Contacta con nosotros para confirmar la disponibilidad de tu cita.",
      visitEyebrow: "ESTAMOS EN PALMA",
      visitTitle: "Tu próximo momento<br><em>empieza aquí.</em>",
      visitText: "Escríbenos para consultar disponibilidad o encontrar el mejor momento para visitarnos.",
      addressLabel: "DIRECCIÓN",
      hoursLabel: "HORARIO",
      hoursValue: "Todos los días · 10:00–20:00",
      hoursNote: "Consulta disponibilidad antes de acudir.",
      visitBook: "Hablar por WhatsApp",
      openMap: "Cómo llegar",
      mapCaption: "EL CAPITOL BIENESTAR · PALMA",
      closingEyebrow: "TU MOMENTO HA LLEGADO",
      closingTitle: "Vuelve a ti.<br><em>Te lo mereces.</em>",
      closingButton: "Reserva tu cita",
      footerMantra: "Un espacio para parar, respirar y cuidarte.",
      backTop: "VOLVER ARRIBA ↑",
      footerLocation: "PALMA DE MALLORCA"
    },

    ca: {
      announcement: "El teu moment de calma t'espera a Palma",
      bookTop: "Reserva la teva cita",
      navAbout: "Filosofia",
      navMassages: "Massatges",
      navPrices: "Tarifes",
      navVisit: "Troba'ns",
      navBook: "Reservar",
      languageLabel: "Idioma",
      heroEyebrow: "PALMA · BENESTAR PERSONAL",
      heroTitle: "L'art de<br><em>sentir-te bé.</em>",
      heroText: "Una pausa del món exterior. Un espai per reconnectar amb tu, alliberar tensions i recuperar el teu equilibri.",
      heroButton: "Reserva el teu moment",
      discover: "Descobreix l'espai",
      heroBottom: "EL TEU BENESTAR, SENSE PRESSES",
      introSide: "UNA MANERA DE CUIDAR-TE",
      introEyebrow: "BENVINGUT A EL CAPITOL",
      introTitle: "El luxe no és fer més.<br><em>És poder aturar-se.</em>",
      introText: "Entre les presses del dia a dia, regalar-te un moment d'atenció pot marcar la diferència. A El Capitol Bienestar volem oferir-te un espai on abaixar el ritme i dedicar-te temps.",
      introLink: "Troba el teu moment",
      manifestoEyebrow: "TORNA A TU",
      manifestoTitle: "Respira.<br><em>Desconnecta.</em><br>Reconnecta.",
      manifestoText: "De vegades, el que necessites és donar-te permís per aturar-te.",
      massageEyebrow: "ELS NOSTRES TRACTAMENTS",
      massageTitle: "Troba el teu <em>ritme.</em>",
      massageIntro: "Cada persona necessita una cosa diferent. Tria el temps que et vols dedicar i consulta'ns quina opció s'adapta millor a tu.",
      relaxTitle: "Massatge relaxant",
      relaxText: "Un moment per abaixar el ritme, descansar i dedicar-te atenció.",
      sportTitle: "Massatge esportiu",
      sportText: "Una opció per a persones que practiquen esport i volen cuidar la seva recuperació i mobilitat.",
      decontractTitle: "Massatge descontracturant",
      decontractText: "Un massatge centrat en zones amb tensió muscular i sobrecàrrega.",
      askTreatment: "Consultar tractament",
      treatmentNote: "Consulta per WhatsApp la disponibilitat i el tractament més adequat per a tu.",
      priceEyebrow: "EL TEU TEMPS, LA TEVA ELECCIÓ",
      priceTitle: "Regala't un<br><em>moment.</em>",
      priceIntro: "Tria la durada que millor s'adapti al teu dia.",
      price30: "30 minuts",
      price30desc: "Una pausa breu",
      price60: "60 minuts",
      price60desc: "Temps per desconnectar",
      price90: "90 minuts",
      price90desc: "Una experiència més llarga",
      priceButton: "Consultar disponibilitat",
      priceNote: "Reserva prèvia per WhatsApp. Consulta els detalls abans de la visita.",
      quote: "Dedicar-te temps no és un luxe. És una manera de cuidar-te.",
      faqEyebrow: "ABANS DE LA VISITA",
      faqTitle: "Tens algun <em>dubte?</em>",
      faqIntro: "Aquí tens algunes respostes útils.",
      faqQ1: "Com puc reservar?",
      faqA1: "Ens pots escriure per WhatsApp per consultar la disponibilitat i acordar el dia i l'hora de la cita.",
      faqQ2: "Quins són els preus?",
      faqA2: "Les sessions costen 30 € per 30 minuts, 50 € per 60 minuts i 70 € per 90 minuts.",
      faqQ3: "On és El Capitol Bienestar?",
      faqA3: "Som a Plaça d'Alexander Fleming 12, Nord, 07004 Palma, Illes Balears. Pots obrir el mapa des de la secció de contacte.",
      faqQ4: "Quin és l'horari?",
      faqA4: "L'horari indicat és de 10:00 a 20:00. Contacta amb nosaltres per confirmar la disponibilitat de la cita.",
      visitEyebrow: "SOM A PALMA",
      visitTitle: "El teu pròxim moment<br><em>comença aquí.</em>",
      visitText: "Escriu-nos per consultar la disponibilitat o trobar el millor moment per visitar-nos.",
      addressLabel: "ADREÇA",
      hoursLabel: "HORARI",
      hoursValue: "Cada dia · 10:00–20:00",
      hoursNote: "Consulta la disponibilitat abans de venir.",
      visitBook: "Parlar per WhatsApp",
      openMap: "Com arribar-hi",
      mapCaption: "EL CAPITOL BIENESTAR · PALMA",
      closingEyebrow: "EL TEU MOMENT HA ARRIBAT",
      closingTitle: "Torna a tu.<br><em>T'ho mereixes.</em>",
      closingButton: "Reserva la teva cita",
      footerMantra: "Un espai per aturar-te, respirar i cuidar-te.",
      backTop: "TORNAR A DALT ↑",
      footerLocation: "PALMA DE MALLORCA"
    },

    en: {
      announcement: "Your moment of calm awaits you in Palma",
      bookTop: "Book your appointment",
      navAbout: "Our philosophy",
      navMassages: "Massages",
      navPrices: "Prices",
      navVisit: "Find us",
      navBook: "Book now",
      languageLabel: "Language",
      heroEyebrow: "PALMA · PERSONAL WELLBEING",
      heroTitle: "The art of<br><em>feeling well.</em>",
      heroText: "A pause from the outside world. A space to reconnect with yourself, release tension and find your balance.",
      heroButton: "Book your moment",
      discover: "Discover our space",
      heroBottom: "YOUR WELLBEING, WITHOUT THE RUSH",
      introSide: "A DIFFERENT WAY TO CARE FOR YOURSELF",
      introEyebrow: "WELCOME TO EL CAPITOL",
      introTitle: "Luxury isn't doing more.<br><em>It's being able to pause.</em>",
      introText: "Amid the rush of everyday life, giving yourself a moment of care can make a difference. At El Capitol Bienestar, we want to offer you a space to slow down and spend time on yourself.",
      introLink: "Find your moment",
      manifestoEyebrow: "RETURN TO YOURSELF",
      manifestoTitle: "Breathe.<br><em>Disconnect.</em><br>Reconnect.",
      manifestoText: "Sometimes, all you need is permission to slow down.",
      massageEyebrow: "OUR TREATMENTS",
      massageTitle: "Find your <em>rhythm.</em>",
      massageIntro: "Everyone needs something different. Choose how much time you would like for yourself and ask us which option might suit you.",
      relaxTitle: "Relaxing massage",
      relaxText: "A moment to slow down, rest and give yourself some attention.",
      sportTitle: "Sports massage",
      sportText: "An option for people who exercise and want to care for their recovery and mobility.",
      decontractTitle: "Decontracting massage",
      decontractText: "A massage focused on areas experiencing muscle tension and overload.",
      askTreatment: "Ask about this treatment",
      treatmentNote: "Contact us on WhatsApp to check availability and discuss the most suitable treatment.",
      priceEyebrow: "YOUR TIME, YOUR CHOICE",
      priceTitle: "Give yourself a<br><em>moment.</em>",
      priceIntro: "Choose the duration that best fits your day.",
      price30: "30 minutes",
      price30desc: "A short pause",
      price60: "60 minutes",
      price60desc: "Time to unwind",
      price90: "90 minutes",
      price90desc: "A longer experience",
      priceButton: "Check availability",
      priceNote: "Advance booking via WhatsApp. Please confirm the details before your visit.",
      quote: "Making time for yourself isn't a luxury. It's a way to care for yourself.",
      faqEyebrow: "BEFORE YOUR VISIT",
      faqTitle: "Have any <em>questions?</em>",
      faqIntro: "Here are a few helpful answers.",
      faqQ1: "How can I book?",
      faqA1: "Message us on WhatsApp to check availability and arrange the day and time of your appointment.",
      faqQ2: "How much do the sessions cost?",
      faqA2: "Sessions cost €30 for 30 minutes, €50 for 60 minutes and €70 for 90 minutes.",
      faqQ3: "Where is El Capitol Bienestar?",
      faqA3: "We are at Plaça d'Alexander Fleming 12, Nord, 07004 Palma, Illes Balears. You can open the map in the contact section.",
      faqQ4: "What are the opening hours?",
      faqA4: "The listed opening hours are 10:00–20:00. Please contact us to confirm appointment availability.",
      visitEyebrow: "WE ARE IN PALMA",
      visitTitle: "Your next moment<br><em>starts here.</em>",
      visitText: "Get in touch to check availability or find the best time to visit us.",
      addressLabel: "ADDRESS",
      hoursLabel: "OPENING HOURS",
      hoursValue: "Daily · 10:00–20:00",
      hoursNote: "Please check availability before visiting.",
      visitBook: "Message us on WhatsApp",
      openMap: "Get directions",
      mapCaption: "EL CAPITOL BIENESTAR · PALMA",
      closingEyebrow: "YOUR MOMENT HAS ARRIVED",
      closingTitle: "Come back to yourself.<br><em>You deserve it.</em>",
      closingButton: "Book your appointment",
      footerMantra: "A space to pause, breathe and care for yourself.",
      backTop: "BACK TO TOP ↑",
      footerLocation: "PALMA DE MALLORCA"
    }
  };

  // Aplica un idioma sin interpretar el texto como HTML arbitrario.
  function setLanguage(language) {
    const dictionary = translations[language] || translations.es;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        // Las traducciones contienen <br> y <em> controlados por el código.
        element.innerHTML = dictionary[key];
      }
    });

    // Actualiza el texto accesible del menú móvil en el idioma elegido.
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      const menuLabels = {
        es: { open: "Abrir menú", close: "Cerrar menú" },
        ca: { open: "Obrir menú", close: "Tancar menú" },
        en: { open: "Open menu", close: "Close menu" }
      };

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? menuLabels[language].close : menuLabels[language].open
      );
    }

    // Actualiza los títulos y textos alternativos del mapa y del menú.
    const mapTitle = document.querySelector(".visit-map iframe");
    if (mapTitle) {
      const mapTitles = {
        es: "Mapa de El Capitol Bienestar en Palma",
        ca: "Mapa d'El Capitol Bienestar a Palma",
        en: "Map of El Capitol Bienestar in Palma"
      };

      mapTitle.title = mapTitles[language] || mapTitles.es;
    }

    try {
      localStorage.setItem("capitol-language", language);
    } catch (error) {
      // La web sigue funcionando aunque el almacenamiento esté bloqueado.
    }
  }

  if (languageSelect) {
    let initialLanguage = "es";

    try {
      const savedLanguage = localStorage.getItem("capitol-language");

      if (savedLanguage && translations[savedLanguage]) {
        initialLanguage = savedLanguage;
      }
    } catch (error) {
      // Si no se puede leer el almacenamiento, se usa español.
    }

    languageSelect.value = initialLanguage;
    setLanguage(initialLanguage);

    languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
  }
});
