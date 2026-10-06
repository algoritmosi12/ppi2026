import {seleccionarAleatoriamente} from "./aleatorio.js"

const reloj=document.getElementById("reloj")
let seg=30


const Timer=setInterval(()=>{
    seg--
 reloj.textContent=seg
   
   if(seg<10)
    seg= "0" + seg
if(seg==0){
    clearInterval(Timer)
    
seleccionarAleatoriamente();
}
},1000)
