import {dir} from "./rutas.js"  
import { crearDatos } from "./sessionStorage.js";
const nombre = document.getElementById("nombre");
const diffNormal = document.getElementById("diffNormal");
const Intro = document.getElementById("Intro");
const diffDicil = document.getElementById("diffDificil");
console.log(diffDicil)
const boton = document.getElementById("btn");
 //sconsole.log(boton.value)
boton.addEventListener("click", () => {
 let datos={}
 if(diffNormal.checked==true){
    datos.dinero=1000000;
    datos.tiempo= 104 ;
    datos.diff="Normal"
 }else{
    datos.dinero=700000;
    datos.tiempo= 52 ;
    datos.diff="Dificil"
 }
datos.nombre=nombre.value;
crearDatos(datos)
    dir(boton.value)
});

diffDicil.addEventListener("change", () => {
  Intro.textContent="";
    if (diffDicil.checked) {
        Intro.textContent="Un presupuesto inicial de $700000 y un plazo de 1 año. Cada decision que tomes tendra consecuencias en tu tiempo y dinero"
    }

});
diffNormal.addEventListener("change", () => {
    Intro.textContent="";
    if (diffNormal.checked) {
        Intro.textContent="Un presupuesto inicial de $1000000 y un plazo de 2 años. Cada decision que tomes tendra consecuencias en tu tiempo y dinero"
    }       
});