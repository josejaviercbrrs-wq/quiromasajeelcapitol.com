# quiromasajeelcapitol.com
Quiromasaje El Capitol  Bienestar Miguel Villalonga Clar  Masaje terapéutico · Deportivo · Relajante  Palma de Mallorca

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>QuiroMasaje Studio</title>

<link rel="stylesheet" href="style.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>

<!-- NAV -->
<header class="navbar">
    <div class="logo">QuiroStudio</div>
    <nav>
        <a href="#inicio">Inicio</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicios">Tratamientos</a>
        <a href="#galeria">Centro</a>
        <a href="#contacto">Contacto</a>
    </nav>
</header>

<!-- HERO -->
<section id="inicio" class="hero">
    <div class="overlay"></div>
    <div class="hero-content reveal">
        <h1>Recupera tu bienestar</h1>
        <p>Relaja tu cuerpo. Libera tu mente.</p>
        <a href="#reserva" class="btn">Reservar sesión</a>
    </div>
</section>

<!-- SOBRE -->
<section id="sobre" class="section reveal">
    <h2>Sobre nosotros</h2>
    <p>Especialistas en quiromasaje terapéutico, relajante y deportivo. Tratamos dolores musculares, estrés y tensión acumulada.</p>
</section>

<!-- SERVICIOS -->
<section id="servicios" class="section">
    <h2 class="reveal">Tratamientos</h2>
    <div class="cards">

        <div class="card reveal">
            <i class="fas fa-spa"></i>
            <h3>Masaje relajante</h3>
            <p>Reduce el estrés y mejora tu descanso.</p>
        </div>

        <div class="card reveal">
            <i class="fas fa-dumbbell"></i>
            <h3>Masaje deportivo</h3>
            <p>Recuperación muscular y prevención de lesiones.</p>
        </div>

        <div class="card reveal">
            <i class="fas fa-heartbeat"></i>
            <h3>Terapéutico</h3>
            <p>Alivia contracturas y dolores crónicos.</p>
        </div>

    </div>
</section>

<!-- GALERÍA -->
<section id="galeria" class="section">
    <h2 class="reveal">Nuestro espacio</h2>
    <div class="gallery">
        <img class="reveal" src="https://picsum.photos/400?1">
        <img class="reveal" src="https://picsum.photos/400?2">
        <img class="reveal" src="https://picsum.photos/400?3">
        <img class="reveal" src="https://picsum.photos/400?4">
    </div>
</section>

<!-- RESERVA -->
<section id="reserva" class="section cta reveal">
    <h2>Reserva tu sesión</h2>
    <p>Tu cuerpo te lo agradecerá</p>
    <a href="#" class="btn big">Reservar ahora</a>
    <!-- CAMBIAR AQUÍ LINK CALENDLY -->
</section>

<!-- OPINIONES -->
<section class="section">
    <h2 class="reveal">Opiniones reales</h2>
    <div class="cards">

        <div class="card reveal">
            <p>"Salí como nuevo, increíble experiencia."</p>
            <strong>- Carlos</strong>
        </div>

        <div class="card reveal">
            <p>"El mejor masaje que he probado."</p>
            <strong>- Laura</strong>
        </div>

    </div>
</section>

<!-- MAPA -->
<section class="section reveal">
    <h2>Ubicación</h2>
    <iframe src="" width="100%" height="300" style="border:0;"></iframe>
    <!-- CAMBIAR AQUÍ GOOGLE MAPS -->
</section>

<!-- CONTACTO -->
<section id="contacto" class="section reveal">
    <h2>Contacto</h2>
    <form>
        <input type="text" placeholder="Nombre">
        <input type="email" placeholder="Email">
        <textarea placeholder="Mensaje"></textarea>
        <button>Enviar</button>
    </form>
</section>

<!-- FOOTER -->
<footer>
    <p>© 2026 QuiroStudio</p>

    <div class="socials">
        <a href="#"><i class="fab fa-instagram"></i></a> <!-- CAMBIAR -->
        <a href="#"><i class="fab fa-facebook"></i></a> <!-- CAMBIAR -->
        <a href="#"><i class="fab fa-tiktok"></i></a> <!-- CAMBIAR -->
        <a href="#"><i class="fab fa-whatsapp"></i></a> <!-- CAMBIAR -->
        <a href="#"><i class="fas fa-envelope"></i></a> <!-- CAMBIAR -->
    </div>
</footer>

<!-- WHATSAPP -->
<a href="https://wa.me/123456789" class="whatsapp">
<i class="fab fa-whatsapp"></i>
</a>
<!-- CAMBIAR NÚMERO -->

<script src="script.js"></script>

</body>
</html>
body {
    font-family: 'Inter', sans-serif;
    background: #f7f9f9;
    color: #1a1a1a;
}

/* NAV */
.navbar {
    position: fixed;
    width: 100%;
    backdrop-filter: blur(10px);
    background: rgba(255,255,255,0.7);
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    z-index: 1000;
}

/* HERO */
.hero {
    height: 100vh;
    background: url("https://picsum.photos/1600/900?blur=2") center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
}

.hero-content {
    color: white;
    text-align: center;
    z-index: 2;
}

.hero h1 {
    font-size: 3rem;
}

/* BOTONES */
.btn {
    background: #6ec1a6;
    padding: 12px 25px;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    transition: 0.3s;
}

.btn:hover {
    transform: scale(1.05);
}

/* CARDS */
.card {
    background: white;
    border-radius: 20px;
    padding: 25px;
    transition: 0.4s;
}

.card:hover {
    transform: translateY(-10px);
}

/* GALERÍA */
.gallery img {
    border-radius: 20px;
    transition: 0.4s;
}

.gallery img:hover {
    transform: scale(1.05);
}

/* CTA */
.cta {
    background: linear-gradient(135deg, #6ec1a6, #4a90e2);
    color: white;
}

/* ANIMACIONES */
.reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: 1s;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* WHATSAPP */
.whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #25D366;
    padding: 15px;
    border-radius: 50%;
    color: white;
}
// Scroll reveal tipo Apple
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

// Parallax suave HERO
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});
