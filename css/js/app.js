const botonMenu = document.getElementById("boton-menu");
const listaMenu = document.getElementById("lista-menu");

botonMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("mostrar");
});

const miniaturas = document.querySelectorAll(".miniaturas img");
const imagenPrincipal = document.getElementById("imagen-principal");

miniaturas.forEach(function (miniatura) {
    miniatura.addEventListener("click", function () {
        imagenPrincipal.src = miniatura.src;
    });
});