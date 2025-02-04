document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;
    
    // Si está en el index en español y el idioma del navegador es inglés, redirige
    if (currentPage.endsWith("index.html") && navigator.language.startsWith("en")) {
      window.location.href = "index-en.html";
    }
  });