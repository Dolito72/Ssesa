document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Formulario enviado con éxito!');
    this.reset();
  });
  