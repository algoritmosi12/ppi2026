import { seleccionarAletoriamente } from "./aleatorio.js"
import { recuperarDatos } from "./sessionStorage.js"
import { dir } from "./rutas.js"
import { reloj } from "./reloj.js"

const opcionA = document.getElementById("opcionA")
const opcionB = document.getElementById("opcionB")
const opcionC = document.getElementById("opcionC")

const tiempo = document.getElementById("tiempo")

const btn = document.getElementById("btn")

tiempo.textContent = reloj()


const diff=document.getElementById("diff");
const dinero=document.getElementById("dinero");
const tiempo=document.getElementById("tiempo");
const nombre=document.getElementById("nombre");


const datos=recuperarDatos()
diff.textContent="Dificultad: " + datos.diff
dinero.textContent="DINERO: $ " + datos.dinero
tiempo.textContent= "TIEMPO: " + datos.tiempo
nombre.textContent= "Nombre: " + datos.nombre

btn.addEventListener("click", () => {
    dir(btn.value)
})


