import { seleccionaraleatoriamente } from "./aleatorio.js"
import { dir } from "./rutas";

export function reloj(tiempo) {

    let seg = 30;
    tiempo.textContent = seg;

    const btn = document.getElementById("btn");
    const opcionA = document.getElementById("opcionA");
    const opcionB = document.getElementById("opcionB");
    const opcionC = document.getElementById("opcionC");

    const Timer = setInterval(() => {
        seg--;

        if (seg <= 0) {
            clearInterval(Timer);
            tiempo.textContent = "00";
                if (!opcionA.checked && !opcionB.checked && !opcionC.checked) {
                    switch (seleccionaraleatoriamente()) {
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

                return;
            };

            if (seg < 10) {
                tiempo.textContent = "0" + seg;
            } else {
                tiempo.textContent = seg;
            }

        }, 1000);

        btn.addEventListener("click", () => {
            clearInterval(Timer);
            dir(btn.value);
        });
    return seg;
}


