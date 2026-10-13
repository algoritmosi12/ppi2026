let seg = 30

export function reloj(tiempo) {
    const Timer = setInterval(() => {
        seg--
        tiempo.textContent = seg

        if (seg < 10)
            seg = "0" + seg
        if (seg == 0) {
            clearInterval(Timer)
        }
    }, 1000)
    return seg;
}
