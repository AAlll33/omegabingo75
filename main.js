// Función para abrir el pop-up de inicio de sesión
function openLoginPopUp() {
    $('#logInPopUp').fadeIn(200);
}

// Función para cerrar el pop-up de inicio de sesión
function closeLoginPopUp() {
    $('#logInPopUp').fadeOut(200);
}

// Lógica para cerrar el pop-up al hacer clic en el botón de cerrar (X)
$(document).ready(function() {
    $('#popUpCloseButton').on('click', function() {
        closeLoginPopUp();
    });

    // Ejemplo: Manejar el envío del formulario (para evitar recarga de página)
    $('#login_form_submit').on('submit', function(e) {
        e.preventDefault();
        alert('Formulario de login enviado. Implementa la lógica de Firebase aquí.');
        // Aquí llamarías a tu función de inicio de sesión de Firebase
    });
});
