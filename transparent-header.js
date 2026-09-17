/* ============================================================
   Agrega la clase "is-scrolled" al header cuando el usuario
   baja de la pantalla (así el header pasa de transparente a
   fondo sólido). Va de la mano con transparent-header.css

   Dónde pegarlo en Tiendanube:
   Panel → Configuración → Código de seguimiento → "Head" o
   "Antes de cerrar el body" → pegalo dentro de un <script>...</script>
   (esa sección puede no estar disponible en todos los planes;
   si no la ves, avisame y lo resolvemos solo con CSS, sin scroll
   dinámico).
   ============================================================ */
(function () {
  var header = document.querySelector("#header, .header-container");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
