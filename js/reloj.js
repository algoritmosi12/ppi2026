let seg = 30

export function reloj() {
    const Timer = setInterval(() => {
        seg--
        reloj.textContent = seg

        if (seg < 10)
            seg = "0" + seg
        if (seg == 0) {
            clearInterval(Timer)
        }
    }, 1000)
    return seg;
}
