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

btn.addEventListener("click", () => {
    if (reloj === 0) {
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
    })
