document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = 'none';
      });
  
      slides[index].style.display = 'block';
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Mostrar la primera imagen al cargar la página
    showSlide(currentIndex);
  
    // Controladores de eventos para los botones de siguiente y anterior
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
  });