function calcular() {
    event.preventDefault();
    const valor1 = document.querySelector('input#number1');
    const v1 = Number(valor1.value); 
    var exp = document.getElementById('opcoes').value;
    const valor2 = document.querySelector('input#number2');
    const v2 = Number(valor2.value); 
    if (exp === 'opcao1') {
        const result = v1 + v2; 
        document.getElementById('button').textContent = `${v1} + ${v2} = ${result}`;
    } else if (exp === 'opcao2') {
        const result = v1 - v2;
        document.getElementById('button').textContent = `${v1} - ${v2} = ${result}`;
    } else if (exp === 'opcao3') {
        const result = v1 * v2;
        document.getElementById('button').textContent = `${v1} x ${v2} = ${result}`;
    } else if (exp === 'opcao4') {
        const result = v1 / v2;
        document.getElementById('button').textContent = `${v1} ÷ ${v2} = ${result}`;
    } else {
        document.getElementById('button').textContent = 'Não foi possível calcular!';
    } 
}
