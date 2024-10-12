// Seleccionamos el formulario y los elementos necesarios
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
const loginCard = document.getElementById('loginCard');
const mainContent = document.getElementById('mainContent');
const cancelButton = document.getElementById('cancelButton'); 
const logoutButton = document.getElementById('logoutButton'); 

// Definimos las credenciales
const validUsername = "adrian";
const validPassword = "dejame";

// Función para establecer una cookie
function setCookie(name, value, minutes) {
    let date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));  // 1 minuto = 60 * 1000 milisegundos
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// Función para obtener una cookie por su nombre
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
    return null;
}

// Función para borrar una cookie
function eraseCookie(name) {
    let theDate = new Date();
    theDate.setTime(theDate.getTime() - 1); // Establece la fecha de caducidad en el pasado
    document.cookie = encodeURIComponent(name) + "=;expires=" + theDate.toUTCString() + ";path=/;SameSite=Strict;Secure";
}

// Verificamos si el usuario ya está logueado mediante cookies
window.onload = function () {
    const loggedIn = getCookie("loggedIn");
    const username = getCookie("username");

    // Obtenemos el nombre de la página actual
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene solo el nombre del archivo

    console.log("Página actual:", currentPage);
    console.log("Usuario logueado:", loggedIn);
    console.log("Nombre de usuario:", username);

    if (loggedIn === "true" && username) {
        // Si ya está logueado, y no estamos en main.html, redirigimos a main.html
        if (currentPage !== "main.html") {
            console.log("Redirigiendo a main.html");
            window.location.href = "main.html"; // Redirigimos a main.html
        } else {
            // Mostramos el botón de "Cerrar Sesión" en la página principal
            if (logoutButton) {
                logoutButton.style.display = "block"; // Mostramos el botón de cerrar sesión
            }
        }
    } else {
        // Si no está logueado, y no estamos en index.html, redirigimos a index.html
        if (currentPage !== "index.html") {
            console.log("Redirigiendo a index.html");
            window.location.href = "index.html"; // Redirigimos a index.html
        }
    }
};

// Mostramos el formulario y verificamos las credenciales
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const usernameValue = document.getElementById('username').value;
        const passwordValue = document.getElementById('password').value;

        // Comprobamos las credenciales
        if (usernameValue === validUsername && passwordValue === validPassword) {
            // Credenciales correctas, mostramos mensaje y guardamos cookies
            loginMessage.innerText = "Bienvenido, " + usernameValue + "!";
            
            // Guardamos las cookies por 1 minuto
            setCookie("loggedIn", "true", 1);  // La cookie expira en 1 minuto
            setCookie("username", usernameValue, 1); // Guardamos el nombre de usuario

            // Redirigimos a main.html
            setTimeout(() => {
                console.log("Redirigiendo a main.html tras login");
                window.location.href = "main.html"; // Redirigimos a main.html
            }, 2000);
        } else {
            // Credenciales incorrectas
            alert("Credenciales incorrectas. Intenta de nuevo.");
        }
    });
}

// Cancelar formulario
if (cancelButton) {
    cancelButton.addEventListener("click", function () {
        document.getElementById('username').value = ''; // Limpiamos el campo de usuario
        document.getElementById('password').value = ''; // Limpiamos el campo de contraseña
        loginMessage.innerText = '';
    });
}

// Cerrar sesión
if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        eraseCookie("loggedIn"); // Eliminamos la cookie de sesión
        eraseCookie("username"); // Eliminamos la cookie del nombre de usuario
        
        console.log("Cerrando sesión y redirigiendo a index.html");
        window.location.href = "index.html"; // Redirigimos a index.html
    });
}
