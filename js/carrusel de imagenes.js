let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = Home.getElementsByClassName("carousel-images")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Cambiar cada 2 segundos. Puedes ajustar este valor según tus necesidades.
}

Home.getElementById("prevBtn").addEventListener("click", function () {
  slideIndex -= 2;
  showSlides();
});

Home.getElementById("nextBtn").addEventListener("click", function () {
  showSlides();
});




