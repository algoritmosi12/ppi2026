import { recuperarDatos } from "./sessionStorage.js";
import { reloj } from "./reloj.js";
import { dir } from "./rutas.js";

const tiempototal = document.getElementById("tiempototal");
const diff = document.getElementById("diff");
const dinero = document.getElementById("dinero");
const nombre = document.getElementById("nombre");
const tiempo = document.getElementById("tiempo");
const btn = document.getElementById("btn");

const opcionA = document.getElementById("opcionA");
const opcionB = document.getElementById("opcionB");
const opcionC = document.getElementById("opcionC");

const datos = recuperarDatos();

diff.textContent = "Dificultad: " + datos.diff;
dinero.textContent = "DINERO: $ " + datos.dinero;
tiempototal.textContent = "TIEMPO: " + datos.tiempo;
nombre.textContent = "Nombre: " + datos.nombre;

reloj(tiempo);

function leerNumero(id) {
    let dato = document.getElementById(id);

    if (dato == null) {
        return 0;
    }

    let valorTexto = dato.getAttribute("value");

    if (valorTexto == null || valorTexto == "") {
        return 0;
    }

    let num = Number(valorTexto);

    if (num == 0) {
        return 0;
    }

    if (num < 0 || num > 0) {
        return num;
    }

    return 0;
}

btn.addEventListener("click", () => {
    let cambioTiempo = 0;
    let cambioDinero = 0;

    if (opcionA.checked) {
        cambioTiempo = leerNumero("semanaA");
        cambioDinero = leerNumero("presupuestoA");
    } else if (opcionB.checked) {
        cambioTiempo = leerNumero("semanaB");
        cambioDinero = leerNumero("presupuestoB");
    } else if (opcionC.checked) {
        cambioTiempo = leerNumero("semanaC");
        cambioDinero = leerNumero("presupuestoC");
    }

    datos.tiempo = datos.tiempo + cambioTiempo;
    datos.dinero = datos.dinero + cambioDinero;

    sessionStorage.setItem("usuario", JSON.stringify(datos));
    dir(btn.value);
});