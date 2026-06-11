
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('negro');
    } else {
        navbar.classList.remove('negro');
    }
});


const botonReproducir = document.querySelector('.btn-banner.play');
const botonInfo = document.querySelector('.btn-banner.info');

botonReproducir.addEventListener('click', () => {
    alert('¡Iniciando reproducción de Stranger Things...! (Lógica conectada con éxito)');
});

botonInfo.addEventListener('click', () => {
    alert('Stranger Things: Creada por los hermanos Duffer. Temporadas disponibles: 4. Género: Ciencia ficción / Drama.');
});
