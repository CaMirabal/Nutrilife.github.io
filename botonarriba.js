
// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}
// Función para regresar al inicio de la página
function scrollToTop() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}