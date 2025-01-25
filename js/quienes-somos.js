// Función para verificar si el elemento está en la vista
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  }
  
  // Seleccionamos todos los elementos que tienen la clase 'scroll-animation'
  const elements = document.querySelectorAll('.scroll-animation');
  
  // Función para agregar la clase 'visible' cuando el elemento está en la vista
  function checkScroll() {
    elements.forEach(element => {
      if (isInView(element)) {
        element.classList.add('visible');
      } else {
        // También eliminamos la clase 'visible' cuando el elemento sale de la vista
        element.classList.remove('visible');
      }
    });
  }
  
  // Ejecutamos la función cuando se hace scroll o cuando se carga la página
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('load', checkScroll);
  
  // Ejecutamos inmediatamente para detectar los elementos al cargar
  checkScroll();
  