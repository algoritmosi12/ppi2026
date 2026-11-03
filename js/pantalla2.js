import { seleccionaraleatoriamente } from "./aleatorio.js"
import { recuperarDatos } from "./sessionStorage.js"
import { dir } from "./rutas.js"
import { reloj } from "./reloj.js"

const tiempototal = document.getElementById("tiempototal");
const btn = document.getElementById("btn");
const diff = document.getElementById("diff");
const dinero = document.getElementById("dinero");
const nombre = document.getElementById("nombre");
const tiempo = document.getElementById("tiempo");

const opcionA = document.getElementById("opcionA");
const opcionB = document.getElementById("opcionB");
const opcionC = document.getElementById("opcionC");

const datos = recuperarDatos()

diff.textContent = "Dificultad: " + datos.diff
dinero.textContent = "DINERO: $ " + datos.dinero
tiempototal.textContent = "TIEMPO: " + datos.tiempo
nombre.textContent = "Nombre: " + datos.nombre

reloj(tiempo);
/*if (relojactual == 0) {
    console.log("se acabo el tiempo")
}*/ //HAY QUE VER LO QUE PASA CUANDO EL RELOJ LLEGUE A 0
btn.addEventListener("click", () => {
    if (!opcionA.checked && !opcionB.checked && !opcionC.checked) {
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
});
