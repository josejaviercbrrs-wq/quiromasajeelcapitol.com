// Pequeño efecto de aparición suave al cargar
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});

// Opcional: recarga automática cada X minutos (descomenta si lo quieres)
/*
setTimeout(() => {
  location.reload();
}, 5 * 60 * 1000); // cada 5 minutos
*/
