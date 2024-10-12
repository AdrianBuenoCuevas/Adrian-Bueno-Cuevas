// Funciones de la calculadora
function calcular(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
            break;
    }

    function mostrarCalculadora() {
        document.getElementById('calculadora').classList.add('visible');
        document.getElementById('conversor').classList.remove('visible');
    }

    document.getElementById('resultado').textContent = resultado;

    mostrarCalculadora();
}