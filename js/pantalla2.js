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

reloj(tiempo);
