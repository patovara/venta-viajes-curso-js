//hacemos la importación de la hoja de ciudades.js llamado desestructuración de datos.
import{barcelona, roma, paris, londres} from './ciudades.js';

let enlaces = document.querySelectorAll('a');

let titutloElemento = document.getElementById('titulo');
let subtitutloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//Agregar el evento clic a los enlaces 
enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function() {
        enlaces.forEach(function(enlace){
            //Remover la etiqueta active de todos los elementos a
            enlace.classList.remove('active')
        });
        //Agregar la etiqueta active al elemento seleccionado, This marca cual es el elemento seleccionado
        this.classList.add('active');
        //Declaramos una variable para traer los datos de la función, this hace referencia a la ciudad activa
        let contenido = traerCiudades(this.textContent)
        // Se publica dentro del html los datos de ciudades.js 
        titutloElemento.innerHTML = contenido.titulo
        subtitutloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
});

function traerCiudades (enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres': londres
    }
    return contenido[enlace];   
}