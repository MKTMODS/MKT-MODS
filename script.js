// Función para mostrar la ventana emergente
function showModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Función para cerrar la ventana emergente
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Mostrar la ventana emergente después de un tiempo (por ejemplo, 5 segundos)
setTimeout(showModal, 5000); // Cambia el valor 5000 a la cantidad de tiempo en milisegundos que desees