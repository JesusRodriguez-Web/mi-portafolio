// 1. Mensaje de bienvenida al cargar la página
window.onload = function() {
    console.log("Portafolio cargado correctamente. ¡Bienvenido!");
    alert("¡Hola! Bienvenido a mi portafolio");
};


function mejorarPresentacion() {
    const saludo = document.getElementById("saludo-js");
    saludo.innerText = "¡Gracias por visitar! Estoy listo para nuevos retos en desarrollo.";
    saludo.style.color = "darkblue";
    saludo.style.fontWeight = "bold";
}

// 3. Efecto dinámico: Mostrar/Ocultar detalles de proyectos
function toggleDetalles() {
    const extra = document.getElementById("info-extra");
    if (extra.style.display === "none") {
        extra.style.display = "block";
    } else {
        extra.style.display = "none";
    }
}

// B. Cambiar el texto de un párrafo al hacer clic
function cambiarMensaje() {
    const parrafo = document.getElementById("mensaje-intro");
    parrafo.innerText = "¡Texto actualizado! Gracias por interactuar con mi código.";
    parrafo.style.color = "var(--color-principal)";
}

// C. Mostrar/Ocultar contenido (Efecto dinámico)
function toggleInfo() {
    const contenido = document.getElementById("info-adicional");
    if (contenido.style.display === "none") {
        contenido.style.display = "block";
    } else {
        contenido.style.display = "none";
    }
}