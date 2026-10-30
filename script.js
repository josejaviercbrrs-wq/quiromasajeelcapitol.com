
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#17110e">
  <meta name="description" content="El Capitol Bienestar. Quiromasaje con Miguel Villalonga Clar en Palma de Mallorca. Reserva tu sesión por WhatsApp.">
  <title>El Capitol Bienestar | Quiromasaje en Palma</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=Great+Vibes&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main" data-i18n="skip">Saltar al contenido</a>
  <header class="site-header" id="top">
    <div class="header-inner">
      <a class="brand-mini" href="#inicio" aria-label="El Capitol Bienestar, inicio">
        <span class="brand-mark" aria-hidden="true">EC</span>
        <span><strong>El Capitol</strong><small>Bienestar</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" data-i18n-aria="menuOpen" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
      <nav class="primary-nav" id="primary-nav" aria-label="Navegación principal">
        <a href="#inicio" data-i18n="navHome">Inicio</a>
        <a href="#servicios" data-i18n="navServices">Servicios</a>
        <a href="#sobre-mi" data-i18n="navAbout">Sobre mí</a>
        <a href="#ubicacion" data-i18n="navLocation">Ubicación</a>
        <a href="#preguntas" data-i18n="navFaq">Preguntas</a>
        <a href="#galeria" data-i18n="navGallery">Galería</a>
        <a href="#contacto" data-i18n="navContact">Contacto</a>
      </nav>
      <div class="header-actions">
        <label class="sr-only" for="language-select" data-i18n="languageLabel">Seleccionar idioma</label>
        <select id="language-select" class="language-select" aria-label="Seleccionar idioma">
          <option value="es">ES</option><option value="ca">CA</option><option value="en">EN</option><option value="fr">FR</option><option value="de">DE</option>
        </select>
        <a class="button button-small button-gold header-book" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="book">Reservar cita</a>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="hero section" id="inicio">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <p class="eyebrow" data-i18n="heroEyebrow">UN ESPACIO PARA VOLVER A TI</p>
        <h1 data-i18n="heroTitle">El bienestar empieza<br><em>cuando te escuchas.</em></h1>
        <p class="hero-copy" data-i18n="heroText">Un momento de calma, cuidado y atención personal a través del quiromasaje, en el corazón de Palma.</p>
        <div class="hero-buttons">
          <a class="button button-gold" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="heroCta">Reserva tu momento</a>
          <a class="text-link" href="#servicios" data-i18n="heroMore">Descubrir tratamientos <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-note"><span class="note-line"></span><span data-i18n="heroNote">Atención personal · Palma de Mallorca</span></div>
      </div>
      <div class="hero-art" aria-label="Logotipo de El Capitol Bienestar">
        <div class="logo-frame">
          <svg class="main-logo" viewBox="0 0 520 560" role="img" aria-labelledby="logo-title logo-desc" xmlns="http://www.w3.org/2000/svg">
            <title id="logo-title">Quiromasaje El Capitol Bienestar</title>
            <desc id="logo-desc">Logotipo con marco crema, sol dorado, edificio blanco con cúpula sostenido por dos manos y el nombre Miguel Villalonga Clar.</desc>
            <defs>
              <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff0bd"/><stop offset=".45" stop-color="#d9a84d"/><stop offset="1" stop-color="#9c6228"/></linearGradient>
              <linearGradient id="cream" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff8e8"/><stop offset="1" stop-color="#d8c8a9"/></linearGradient>
              <filter id="logoGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <rect x="12" y="12" width="496" height="536" rx="5" fill="none" stroke="#f4e8cb" stroke-width="3"/>
            <rect x="21" y="21" width="478" height="518" rx="3" fill="none" stroke="#b77a35" stroke-width="1.2"/>
            <text x="260" y="78" text-anchor="middle" fill="#f3e5c7" font-family="Great Vibes,cursive" font-size="47">Quiromasaje</text>
            <g transform="translate(260 190)" filter="url(#logoGlow)">
              <circle r="54" fill="url(#gold)" opacity=".92"/>
              <g stroke="#e7bd69" stroke-width="5" stroke-linecap="round">
                <path d="M0 -91V-72 M0 72V91 M-91 0H-72 M72 0H91 M-64 -64L-51 -51 M51 51L64 64 M64 -64L51 -51 M-51 51L-64 64"/>
                <path d="M-35 -83L-27 -65 M35 83L27 65 M83 -35L65 -27 M-83 35L-65 27"/>
              </g>
              <path d="M-110 52 Q-100 25 -74 23 L-55 23 L-55 -3 Q-55 -13 -45 -13 Q-35 -13 -35 -3 L-35 12 L-27 -27 Q-25 -38 -15 -36 Q-5 -34 -8 -23 L-15 15 L-5 -41 Q-2 -53 9 -49 Q19 -46 15 -34 L7 13 L18 -28 Q22 -40 32 -35 Q42 -31 37 -19 L27 18 L43 -3 Q50 -13 59 -5 Q68 3 60 13 L37 45 Q26 60 4 60 L-78 60 Q-100 60 -110 52Z" fill="#fffaf0" stroke="#d9c9aa" stroke-width="2"/>
              <path d="M110 52 Q100 25 74 23 L55 23 L55 -3 Q55 -13 45 -13 Q35 -13 35 -3 L35 12 L27 -27 Q25 -38 15 -36 Q5 -34 8 -23 L15 15 L5 -41 Q2 -53 -9 -49 Q-19 -46 -15 -34 L-7 13 L-18 -28 Q-22 -40 -32 -35 Q-42 -31 -37 -19 L-27 18 L-43 -3 Q-50 -13 -59 -5 Q-68 3 -60 13 L-37 45 Q-26 60 -4 60 L78 60 Q100 60 110 52Z" fill="#fffaf0" stroke="#d9c9aa" stroke-width="2"/>
            </g>
            <g transform="translate(260 220)">
              <path d="M-79 27 Q-75 -5 0 -34 Q75 -5 79 27Z" fill="url(#cream)" stroke="#b8a27c" stroke-width="2"/>
              <path d="M-88 28H88V42H-88Z" fill="#f7eedc" stroke="#b8a27c" stroke-width="2"/>
              <path d="M-72 43H72V94H-72Z" fill="#f7eedc" stroke="#b8a27c" stroke-width="2"/>
              <path d="M-88 94H88V106H-88Z" fill="#e5d7bd" stroke="#b8a27c" stroke-width="2"/>
              <path d="M-18 -32Q0 -49 18 -32 M-7 -45V-54H7V-45" fill="none" stroke="#f8edda" stroke-width="4"/>
              <g fill="#a98c60"><path d="M-58 52h10v28h-10z M-32 52h10v28h-10z M-5 52h10v28h-10z M22 52h10v28h-10z M48 52h10v28h-10z"/></g>
              <path d="M-94 108Q-48 125 0 116Q48 125 94 108" fill="none" stroke="#d5a24c" stroke-width="3"/>
            </g>
            <text x="260" y="390" text-anchor="middle" fill="#fff4dd" font-family="Cormorant Garamond,serif" font-size="59" letter-spacing="3">El Capitol</text>
            <path d="M115 405H405" stroke="url(#gold)" stroke-width="1.5"/>
            <text x="260" y="447" text-anchor="middle" fill="#dcb76d" font-family="Cormorant Garamond,serif" font-size="34" letter-spacing="8">BIENESTAR</text>
            <text x="260" y="493" text-anchor="middle" fill="#e8dcc4" font-family="DM Sans,sans-serif" font-size="15" letter-spacing="3">MIGUEL VILLALONGA CLAR</text>
          </svg>
        </div>
        <span class="art-caption" data-i18n="logoCaption">Cuidado personal · Equilibrio · Bienestar</span>
      </div>
      <a class="scroll-cue" href="#servicios" aria-label="Desplazarse a servicios"><span></span></a>
    </section>

    <section class="intro-strip">
      <p data-i18n="stripText">Un trato cercano. Un espacio acogedor. Un tiempo dedicado a tu bienestar.</p>
    </section>

    <section class="section services-section" id="servicios">
      <div class="section-heading">
        <p class="eyebrow" data-i18n="servicesEyebrow">ELIGE TU MOMENTO</p>
        <h2 data-i18n="servicesTitle">Tiempo para <em>cuidarte</em></h2>
        <p data-i18n="servicesText">Sesiones de quiromasaje adaptadas al tiempo que quieras dedicarte.</p>
      </div>
      <div class="service-grid">
        <article class="service-card">
          <span class="service-number">01</span><div class="service-rule"></div>
          <p class="service-duration" data-i18n="duration30">30 minutos</p>
          <h3 data-i18n="service30">Pausa renovadora</h3>
          <p class="service-description" data-i18n="desc30">Un primer espacio para desconectar y dedicarte atención.</p>
          <p class="price"><span>30</span><small>€</small></p>
          <a class="text-link service-book" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="bookWhatsApp">Consultar por WhatsApp ↗</a>
        </article>
        <article class="service-card featured">
          <span class="featured-label" data-i18n="popular">Una opción equilibrada</span>
          <span class="service-number">02</span><div class="service-rule"></div>
          <p class="service-duration" data-i18n="duration60">60 minutos</p>
          <h3 data-i18n="service60">Tiempo de bienestar</h3>
          <p class="service-description" data-i18n="desc60">Una sesión más amplia para disfrutar de un cuidado pausado.</p>
          <p class="price"><span>50</span><small>€</small></p>
          <a class="text-link service-book" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="bookWhatsApp">Consultar por WhatsApp ↗</a>
        </article>
        <article class="service-card">
          <span class="service-number">03</span><div class="service-rule"></div>
          <p class="service-duration" data-i18n="duration90">90 minutos</p>
          <h3 data-i18n="service90">Ritual completo</h3>
          <p class="service-description" data-i18n="desc90">Más tiempo para regalarte una experiencia de cuidado sin prisas.</p>
          <p class="price"><span>70</span><small>€</small></p>
          <a class="text-link service-book" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="bookWhatsApp">Consultar por WhatsApp ↗</a>
        </article>
      </div>
      <p class="small-note" data-i18n="priceNote">Las sesiones se acuerdan previamente. Consulta disponibilidad y detalles al reservar.</p>
    </section>

    <section class="about-section section" id="sobre-mi">
      <div class="about-visual">
        <div class="about-visual-inner"><span class="about-monogram">M</span><span class="about-visual-caption" data-i18n="aboutVisual">Atención cercana y personalizada</span></div>
      </div>
      <div class="about-copy">
        <p class="eyebrow" data-i18n="aboutEyebrow">QUIÉN TE ACOMPAÑA</p>
        <h2 data-i18n="aboutTitle">Hola, soy <em>Miguel.</em></h2>
        <p data-i18n="aboutP1">En El Capitol Bienestar quiero ofrecerte un espacio tranquilo donde puedas parar, respirar y dedicar un tiempo a cuidarte.</p>
        <p data-i18n="aboutP2">Cada persona y cada día son diferentes. Por eso, antes de comenzar, hablamos de lo que necesitas y de tus preferencias para orientar la sesión con atención y respeto.</p>
        <p class="signature">Miguel Villalonga Clar</p>
        <a class="button button-outline" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="aboutCta">Hablemos de tu sesión</a>
      </div>
    </section>

    <section class="section location-section" id="ubicacion">
      <div class="section-heading">
        <p class="eyebrow" data-i18n="locationEyebrow">ESTAMOS EN PALMA</p>
        <h2 data-i18n="locationTitle">Un rincón de calma <em>en la ciudad</em></h2>
      </div>
      <div class="location-grid">
        <div class="location-info">
          <div class="info-item"><span class="info-icon">⌖</span><div><h3 data-i18n="addressLabel">Dirección</h3><p>Plaça d'Alexander Fleming, 12<br>Nord, 07004 Palma, Illes Balears, España</p></div></div>
          <div class="info-item"><span class="info-icon">◷</span><div><h3 data-i18n="hoursLabel">Horario orientativo</h3><p data-i18n="hoursText">10:00–20:00. Confirma la disponibilidad al reservar.</p></div></div>
          <a class="button button-gold" href="https://www.google.com/maps/search/?api=1&query=Pla%C3%A7a+d%27Alexander+Fleming%2C+12%2C+07004+Palma" target="_blank" rel="noopener noreferrer" data-i18n="mapCta">Abrir ubicación en Maps ↗</a>
        </div>
        <div class="map-wrap">
          <iframe title="Mapa de El Capitol Bienestar en Palma de Mallorca" src="https://www.google.com/maps?q=Pla%C3%A7a%20d%27Alexander%20Fleming%2C%2012%2C%2007004%20Palma&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="section faq-section" id="preguntas">
      <div class="section-heading">
        <p class="eyebrow" data-i18n="faqEyebrow">ANTES DE TU VISITA</p>
        <h2 data-i18n="faqTitle">Preguntas <em>frecuentes</em></h2>
      </div>
      <div class="faq-list">
        <details class="faq-item"><summary data-i18n="faqQ1">¿Cómo puedo reservar una sesión?</summary><p data-i18n="faqA1">Puedes escribir directamente por WhatsApp. Acordaremos el día, la hora y la duración según disponibilidad.</p></details>
        <details class="faq-item"><summary data-i18n="faqQ2">¿Qué duración puedo elegir?</summary><p data-i18n="faqA2">Hay sesiones de 30, 60 y 90 minutos. Consulta cuál encaja mejor con lo que buscas.</p></details>
        <details class="faq-item"><summary data-i18n="faqQ3">¿Qué debo hacer antes de la sesión?</summary><p data-i18n="faqA3">Ven con ropa cómoda y comenta antes de empezar cualquier preferencia, molestia o circunstancia relevante para adaptar la sesión con prudencia.</p></details>
        <details class="faq-item"><summary data-i18n="faqQ4">¿El quiromasaje sustituye un tratamiento médico?</summary><p data-i18n="faqA4">No. El quiromasaje es una práctica de bienestar y no sustituye el diagnóstico ni el tratamiento de profesionales sanitarios. Si tienes dudas de salud, consulta con tu profesional sanitario.</p></details>
        <details class="faq-item"><summary data-i18n="faqQ5">¿Cuál es el horario?</summary><p data-i18n="faqA5">El horario orientativo es de 10:00 a 20:00. Es necesario confirmar la disponibilidad al solicitar cita.</p></details>
      </div>
    </section>

    <section class="reviews-section section" id="opiniones">
      <div class="reviews-inner">
        <p class="eyebrow" data-i18n="reviewsEyebrow">TU EXPERIENCIA CUENTA</p>
        <h2 data-i18n="reviewsTitle">Opiniones <em>reales</em></h2>
        <p data-i18n="reviewsText">Este espacio está preparado para compartir las experiencias de clientes que quieran dejar su opinión. Próximamente podrás leer aquí reseñas verificadas.</p>
        <span class="review-placeholder" data-i18n="reviewsPlaceholder">Las opiniones de clientes se publicarán con su autorización.</span>
      </div>
    </section>

    <section class="section gallery-section" id="galeria">
      <div class="section-heading">
        <p class="eyebrow" data-i18n="galleryEyebrow">EL ESPACIO</p>
        <h2 data-i18n="galleryTitle">Un ambiente para <em>desconectar</em></h2>
        <p data-i18n="galleryText">Próximamente, fotografías reales de El Capitol Bienestar.</p>
      </div>
      <div class="gallery-grid">
        <figure class="gallery-tile gallery-one"><div class="photo-placeholder"><span>01</span><p data-i18n="gallerySpace">El espacio</p></div></figure>
        <figure class="gallery-tile gallery-two"><div class="photo-placeholder"><span>02</span><p data-i18n="galleryRoom">La sala</p></div></figure>
        <figure class="gallery-tile gallery-three"><div class="photo-placeholder"><span>03</span><p data-i18n="galleryDetails">Los detalles</p></div></figure>
      </div>
      <p class="small-note" data-i18n="galleryNote">Los paneles son espacios reservados para tus fotografías; no son imágenes de stock.</p>
    </section>

    <section class="section tips-section" id="consejos">
      <div class="section-heading">
        <p class="eyebrow" data-i18n="tipsEyebrow">PEQUEÑOS GESTOS, GRANDES PAUSAS</p>
        <h2 data-i18n="tipsTitle">Consejos para tu <em>bienestar</em></h2>
      </div>
      <div class="tips-grid">
        <article class="tip-card"><span>01 / RESPIRA</span><h3 data-i18n="tip1Title">Haz una pausa</h3><p data-i18n="tip1Text">Reserva unos minutos para respirar con calma y apartarte de las pantallas.</p></article>
        <article class="tip-card"><span>02 / MUÉVETE</span><h3 data-i18n="tip2Title">Cambia de postura</h3><p data-i18n="tip2Text">Si pasas mucho tiempo sentado, levántate y mueve suavemente el cuerpo de vez en cuando.</p></article>
        <article class="tip-card"><span>03 / ESCÚCHATE</span><h3 data-i18n="tip3Title">Respeta tu ritmo</h3><p data-i18n="tip3Text">Descansa, hidrátate y adapta tus actividades a cómo te encuentras cada día.</p></article>
      </div>
      <p class="disclaimer" data-i18n="tipsDisclaimer">Estos consejos son generales y no sustituyen recomendaciones médicas individualizadas.</p>
    </section>

    <section class="contact-cta section" id="contacto">
      <p class="eyebrow" data-i18n="contactEyebrow">TU MOMENTO TE ESPERA</p>
      <h2 data-i18n="contactTitle">Regálate un momento <em>para ti.</em></h2>
      <p data-i18n="contactText">Escríbeme y buscamos el momento que mejor te venga.</p>
      <a class="button button-gold button-large" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" data-i18n="contactCta">Reservar por WhatsApp ↗</a>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <a class="brand-mini footer-brand" href="#inicio"><span class="brand-mark">EC</span><span><strong>El Capitol</strong><small>Bienestar</small></span></a>
      <p data-i18n="footerPhrase">Quiromasaje y cuidado personal en Palma de Mallorca.</p>
      <div class="social-links" aria-label="Redes sociales">
        <a href="https://www.instagram.com/el_capitol_bienestar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
        <a href="https://www.facebook.com/people/El-capitol-bienestar/61591450350809/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
        <a href="https://www.tiktok.com/@miguel.villalonga21" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="current-year"></span> El Capitol Bienestar · Miguel Villalonga Clar</span>
      <a href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer">+34 675 75 25 00</a>
      <a href="#top" data-i18n="backTop">Volver arriba ↑</a>
    </div>
  </footer>

  <a class="whatsapp-float" href="https://wa.me/34675752500" target="_blank" rel="noopener noreferrer" aria-label="Contactar con El Capitol Bienestar por WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 .8A15.1 15.1 0 0 0 3.05 23.7L1 31l7.5-1.97A15.1 15.1 0 1 0 16 .8Zm0 27.5c-2.3 0-4.55-.62-6.5-1.8l-.47-.28-4.45 1.17 1.19-4.34-.3-.49A12.4 12.4 0 1 1 16 28.3Zm6.8-9.3c-.37-.19-2.2-1.08-2.54-1.2-.34-.13-.59-.19-.83.18-.25.37-.96 1.2-1.17 1.45-.22.25-.43.28-.8.1-.37-.19-1.56-.58-2.98-1.85-1.1-.98-1.85-2.2-2.07-2.57-.22-.37-.02-.57.16-.75.17-.16.37-.43.56-.65.18-.22.24-.37.37-.62.12-.25.06-.47-.03-.65-.1-.19-.83-2-1.14-2.74-.3-.72-.6-.62-.83-.63h-.7c-.25 0-.65.1-.99.47-.34.37-1.3 1.27-1.3 3.08s1.33 3.57 1.52 3.82c.18.25 2.61 3.99 6.32 5.59.88.38 1.57.61 2.1.78.88.28 1.68.24 2.31.15.7-.1 2.2-.9 2.5-1.77.31-.87.31-1.62.22-1.77-.1-.15-.34-.25-.71-.43Z"/></svg>
  </a>
</body>
</html>
