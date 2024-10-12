<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Proyecto JavaScript ES6</title>
</head>
<body>
    <h1>Proyecto: Ejemplos - FUNDAMENTOS DE JS (ES6)</h1>

    <p>Este proyecto es una plantilla simple para mostrar ejemplos de fundamentos de JavaScript (ES6) en un entorno web. Incluye una estructura HTML básica con un formulario de inicio de sesión, un sistema de tarjetas (cards) para mostrar ejercicios y un menú de navegación hacia recursos externos.</p>

    <h2>Estructura del Proyecto</h2>
    <ul>
        <li><strong>index.html</strong>: Contiene la estructura del documento HTML, que incluye el formulario de inicio de sesión, un conjunto de ejercicios organizados en tarjetas, un menú de navegación y un pie de página.</li>
        <li><strong>css/styles.css</strong>: Archivo de estilos CSS que define el diseño del sitio web, con estilos para el cuerpo, el encabezado, la barra de navegación, las tarjetas y el formulario.</li>
        <li><strong>js/login.js</strong>: Script en JavaScript que maneja la lógica del formulario de inicio de sesión, incluida la validación de credenciales y el manejo del botón "Cancelar".</li>
    </ul>

    <h2>Funcionalidades</h2>

    <h3>1. Formulario de Inicio de Sesión</h3>
    <ul>
        <li>Permite al usuario iniciar sesión con un nombre de usuario y contraseña.</li>
        <li><strong>Credenciales válidas:</strong></li>
        <ul>
            <li>Usuario: <code>adrian</code></li>
            <li>Contraseña: <code>dejame</code></li>
        </ul>
        <li>Al ingresar credenciales correctas, se oculta el formulario y se muestra el contenido principal.</li>
        <li>El botón de "Cancelar" limpia los campos de usuario y contraseña.</li>
    </ul>

    <h3>2. Menú de Navegación</h3>
    <ul>
        <li>Proporciona enlaces a recursos educativos sobre JavaScript como:</li>
        <ul>
            <li><a href="https://www.w3schools.com/js/default.asp">w3schools</a></li>
            <li><a href="https://es.javascript.info/js">javascript.info</a></li>
            <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript">MDN</a></li>
            <li><a href="https://github.com/AdrianBuenoCuevas/Adrian-Bueno-Cuevas">GitHub</a></li>
        </ul>
    </ul>

    <h3>3. Sistema de Tarjetas (Cards)</h3>
    <ul>
        <li>Cada tarjeta muestra un título y una breve descripción de un ejercicio.</li>
        <li>Las tarjetas tienen un diseño con sombra y bordes redondeados.</li>
        <li>Los botones en el pie de cada tarjeta permiten acceder a la solución de los ejercicios.</li>
    </ul>

    <h3>4. Estilos CSS</h3>
    <ul>
        <li>Se utiliza <strong>CSS Grid</strong> para el diseño del encabezado y <strong>Flexbox</strong> para el sistema de tarjetas.</li>
        <li>Estilos personalizados para botones en el formulario de inicio de sesión (verde para "Ingresar" y rojo para "Cancelar").</li>
        <li>Se aplican efectos de sombra en el texto y en varios elementos de la página.</li>
    </ul>

    <h2>Cómo Usar el Proyecto</h2>
    <ol>
        <li>Clona o descarga el repositorio.</li>
        <li>Abre el archivo <code>index.html</code> en tu navegador para visualizar la página.</li>
        <li>Puedes modificar los estilos en <code>css/styles.css</code> y el comportamiento en <code>js/login.js</code> para personalizarlo según tus necesidades.</li>
    </ol>

    <h2>Autor</h2>
    <p><strong>Adrián Bueno Cuevas</strong></p>
</body>
</html>
