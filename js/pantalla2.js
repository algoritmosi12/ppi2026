import {seleccionarAletoriamente} from "./aleatorio.js"
import {recuperarDatos} from "./sessionStorage.js"
import {dir} from "./rutas.js"

const btn=document.getElementById("btn")
btn.addEventListener("click", () => {
    dir(btn.value)


})
