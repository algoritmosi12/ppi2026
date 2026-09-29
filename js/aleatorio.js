const reloj=document.getElementById("reloj")
    const opa=document.getElementByID(opcionA);
    const opb=document.getElementByID(opcionB);

function seleccionaraleatoriamente {
    num=Math.floor(Math.random()*2)+1
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