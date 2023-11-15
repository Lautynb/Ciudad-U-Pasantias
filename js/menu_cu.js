function mostrarLista() {
    var lista = document.getElementById("miLista");
    lista.classList.toggle("mostrar");
    var header = document.querySelector("header");
    header.classList.toggle("cerrar");
}