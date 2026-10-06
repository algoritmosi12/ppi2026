let seg = 30

<<<<<<< HEAD
const reloj=document.getElementById("reloj");
let seg=30
=======
export function reloj() {
    const Timer = setInterval(() => {
        seg--
        reloj.textContent = seg
>>>>>>> b02f1a42ca533056fd73c917158920ead99f9e12

        if (seg < 10)
            seg = "0" + seg
        if (seg == 0) {
            clearInterval(Timer)
        }
    }, 1000)
    return seg;
}
