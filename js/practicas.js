const boton = document.getElementById("btn");
 //sconsole.log(boton.value)
boton.addEventListener("click", () => {
    console.log(boton.value)
    window.location.href =boton.value;
});
