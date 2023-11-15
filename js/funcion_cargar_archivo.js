function mostrarNombreArchivo(input) {
    const nombreArchivo = input.files[0].name;

    const inputText = document.getElementById("image");
    inputText.value = nombreArchivo;
}