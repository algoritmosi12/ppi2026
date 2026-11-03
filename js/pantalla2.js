import { recuperarDatos } from "./sessionStorage.js";
import { reloj } from "./reloj.js";

const tiempototal = document.getElementById("tiempototal");
const diff = document.getElementById("diff");
const dinero = document.getElementById("dinero");
const nombre = document.getElementById("nombre");
const tiempo = document.getElementById("tiempo");

const datos = recuperarDatos();

diff.textContent = "Dificultad: " + datos.diff;
dinero.textContent = "DINERO: $ " + datos.dinero;
tiempototal.textContent = "TIEMPO: " + datos.tiempo;
nombre.textContent = "Nombre: " + datos.nombre;

<<<<<<< HEAD
let auxreloj = reloj(tiempo);

    if (auxreloj=="00") {
        switch (seleccionarAletoriamente()) {
            case (1):
                opcionA.checked = true;
                break;
            case (2):
                opcionB.checked = true;
                break;
            case (3):
                opcionC.checked = true;
                break;
        }
    }
        dir(btn.value);
=======
reloj(tiempo);
>>>>>>> ee1ab16cd4eadcc1a5700671ca993c303cb5e270
