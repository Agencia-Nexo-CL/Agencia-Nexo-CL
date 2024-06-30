// Función para abrir y cerrar ventana principal Nexo

$(document).ready(function(){
    $("#info").click(function(){
      $("#trabajos").removeClass("hidden").addClass("block transition-all duration-500");
    });
  });

$(document).ready(function(){
    $("#cerrar-1").click(function(){
      $("#trabajos").removeClass("block").addClass("hidden");
    });
  });

// Fin de la función para abrir y cerrar ventana principal Nexo

// Función para abrir y cerrar ventana de Diseño, Redes Sociales, Páginas Web, Rodaje y Gestión de Medios (según corresponda)

document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).classList.remove('hidden');
  });
});

document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('hidden');
  });
});

document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.bg-[#242424]'); // Asegúrate de seleccionar el contenedor correcto del modal

    // Aplicar la animación de salida
    modalContent.classList.add('animate-modalClose');

    // Esperar a que la animación termine para ocultar el modal
    modalContent.addEventListener('animationend', () => {
      modal.classList.add('hidden');
      modalContent.classList.remove('animate-modalClose'); // Opcional: remover la clase para resetear el estado si el modal se abre de nuevo
    }, { once: true });
  });
});