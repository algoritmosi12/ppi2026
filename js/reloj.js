export function reloj(tiempo) {
     
    let seg = 30;
    tiempo.textContent = seg;

    const Timer = setInterval(() => {
        seg--;
        
        if (seg <= 0) {
            clearInterval(Timer);
            tiempo.textContent = "00";
            alert("Se acabó el tiempo");
            return;
        }

        if (seg < 10){
            tiempo.textContent = "0" + seg;
        } else {
            tiempo.textContent = seg;
        }
        
    }, 1000);
    return seg;
}
