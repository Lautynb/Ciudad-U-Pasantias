const textElement = document.getElementById('changingText');
const languages = ['Languages_', 'Le lingue_', 'Línguas_', 'Idiomas_', 'Langues_', 'Языки_'];

let lenguajeactual = 0;

function cambiarlenguaje() {
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.textContent = languages[lenguajeactual];
    lenguajeactual = (lenguajeactual + 1) % languages.length;
    textElement.style.opacity = 1;
  }, 500);
}

setInterval(cambiarlenguaje, 2000);