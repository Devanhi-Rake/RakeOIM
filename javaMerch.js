const pista = document.querySelector('.pista-carrusel');
const recuadros = document.querySelectorAll('.recuadro-carrusel');
const botonAnterior = document.querySelector('.anterior');
const botonSiguiente = document.querySelector('.siguiente');

const estiloRecuadro = window.getComputedStyle(recuadros[0]);
const anchoRecuadro = recuadros[0].offsetWidth;
const margen = parseInt(estiloRecuadro.marginLeft) + parseInt(estiloRecuadro.marginRight);
const anchoTotal = anchoRecuadro + margen;

let indiceActual = 0;

function actualizarRecuadrosVisibles() {
    const anchoPantalla = window.innerWidth;
    if (anchoPantalla < 600) return 1;
    if (anchoPantalla < 900) return 2;
    return 3;
}

let recuadrosVisibles = actualizarRecuadrosVisibles();

window.addEventListener('resize', () => {
    recuadrosVisibles = actualizarRecuadrosVisibles();
    if (indiceActual > recuadros.length - recuadrosVisibles) {
        indiceActual = recuadros.length - recuadrosVisibles;
        actualizarCarrusel();
    }
});

botonSiguiente.addEventListener('click', () => {
    if (indiceActual < recuadros.length - recuadrosVisibles) {
        indiceActual++;
        actualizarCarrusel();
    }
});

botonAnterior.addEventListener('click', () => {
    if (indiceActual > 0) {
        indiceActual--;
        actualizarCarrusel();
    }
});

function actualizarCarrusel() {
    pista.style.transform = `translateX(-${anchoTotal * indiceActual}px)`;
}
