// Funciones para el conversor de bases
function convertir() {
    const numero = document.getElementById('numero').value;
    const base = parseInt(document.getElementById('base').value);
    let resultado;

    if (base === 2) {
        resultado = parseInt(numero, 10).toString(2);
    } else if (base === 8) {
        resultado = parseInt(numero, 10).toString(8);
    } else if (base === 16) {
        resultado = parseInt(numero, 10).toString(16).toUpperCase();
    } else {
        resultado = numero; // Decimal
    }

    function mostrarConversor() {
        document.getElementById('calculadora').classList.remove('visible');
        document.getElementById('conversor').classList.add('visible');
    }

    document.getElementById('resultado-conversor').textContent = resultado;
}