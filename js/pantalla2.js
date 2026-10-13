import { seleccionaraleatoriamente } from "./aleatorio.js"
import { recuperarDatos } from "./sessionStorage.js"
import { dir } from "./rutas.js"
import { reloj } from "./reloj.js"

const opcionA = document.getElementById("opcionA");
const opcionB = document.getElementById("opcionB");
const opcionC = document.getElementById("opcionC");
const tiempo = document.getElementById("tiempo");
const tiempototal = document.getElementById("tiempototal");
const btn = document.getElementById("btn");
const diff = document.getElementById("diff");
const dinero = document.getElementById("dinero");
const nombre = document.getElementById("nombre");
const datos = recuperarDatos()
let relojactual = reloj(tiempo)

tiempo.textContent = relojactual
/*if (relojactual == 0) {
    console.log("se acabo el tiempo")
}*/ //HAY QUE VER LO QUE PASA CUANDO EL RELOJ LLEGUE A 0

diff.textContent = "Dificultad: " + datos.diff
dinero.textContent = "DINERO: $ " + datos.dinero
tiempototal.textContent = "TIEMPO: " + datos.tiempo
nombre.textContent = "Nombre: " + datos.nombre

btn.addEventListener("click", () => {
    dir(btn.value)
})


