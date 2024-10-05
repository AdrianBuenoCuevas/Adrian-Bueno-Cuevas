// Seleccionamos el formulario y los elementos necesarios
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const loginCard = document.getElementById('loginCard');
const mainContent = document.getElementById('mainContent');

// Definimos las credenciales
const validUsername = "adrian";
const validPassword = "dejame";

// Mostramos el formulario
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const usernameValue = document.getElementById('username').value;
    const passwordValue = document.getElementById('password').value;


    // Comprobamos las credenciales
    if (usernameValue === validUsername && passwordValue === validPassword) {
        // Credenciales correctas
        loginMessage.innerText = "Bienvenido, " + usernameValue + "!";
        setTimeout(() => {
            loginCard.style.display = "none"; // Ocultamos el formulario
            mainContent.style.display = "block"; // Mostramos el contenido principal
        }, 2000);
    } else {
        // Credenciales incorrectas
        alert("Credenciales incorrectas. Intenta de nuevo.");
    }

});

    // Cancelar formulario
cancelButton.addEventListener("click", function () {
    document.getElementById('username').value = ''; // Limpiamos el campo de usuario
    document.getElementById('password').value = ''; // Limpiamos el campo de contraseña
    loginMessage.innerText = '';
});
