// Establece los límites mínimos de ancho y alto
const minWidth = 500;
const minHeight = 300;

// Función para verificar y ajustar el tamaño de la ventana
function verificarTamaño() {
    if (window.innerWidth < minWidth) {
        window.resizeTo(minWidth, window.innerHeight);
    }
    if (window.innerHeight < minHeight) {
        window.resizeTo(window.innerWidth, minHeight);
    }
}

// Agrega un evento de escucha para el redimensionamiento de la ventana
window.addEventListener('resize', verificarTamaño);

// Verifica el tamaño inicial de la ventana
verificarTamaño();
