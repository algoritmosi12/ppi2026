const reloj=document.getElementById("reloj")
    const opa=document.getElementById(opcionA);
    const opb=document.getElementById(opcionB);

export function seleccionarAletoriamente(){
   let num=Math.floor(Math.random()*2)+1
    switch (num){
        case (1):
            opa.click()
            break;
        case (2):
            opb.click()
            break;
        case (3):
            opc.click();
            break;
    }
}