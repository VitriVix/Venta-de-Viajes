import { barcelona, roma, paris, londres } from "./ciudades.js";

const enlaces = document.querySelectorAll('a');
const tituloElemento = document.getElementById('titulo');
const precioElemento = document.getElementById('precio');
const subtituloElemento = document.getElementById('subtitulo');
const parrafoElemento = document.getElementById("parrafo");

enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active');
        });
        //AGREGAR LA CLASE ACTIVE EN EL ENLASE ACTUAL
        this.classList.add("active");
        //OBTENER EL CONTENIDO CORRESPONDIENTE SEGUN EL ENLASE
        let contenidoObtenido = obtenerContenido(this.textContent);
        //SETEANDO LOS VALORES
        tituloElemento.innerHTML = contenidoObtenido.titulo;
        precioElemento.innerHTML = contenidoObtenido.precio;
        subtituloElemento.innerHTML = contenidoObtenido.subtitulo;
        parrafoElemento.innerHTML = contenidoObtenido.parrafo;
    });
});

function obtenerContenido(enlace) {
    const contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace]
}