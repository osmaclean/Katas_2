
// Primeira Tarefa - Criar função e somar



function add(number1, number2) {
    let resultado = 0;
    resultado += number2 + number1
    return resultado;
}
console.log(add(2, 4));

// Segunda Tarefa - Criar/Chamar Função e Multiplicar

function multiply(number3, number4) {
    let result = 0;
    for (let i = 0; i < number3; i++) {
        result = add(result, number4);
    }
    return result;
}
console.log(multiply(6, 8));

// Terceira Tarefa - Criar/Chamar Função e Elevar à potência

function power(x, n) {
    let resultado = 1;
    for (let i = 0; i < n; i++) {
        resultado = multiply(resultado, x);
    }
    return resultado;
}
console.log(power(2, 8));

/* 

2º Versão da Terceira Tarefa

function power(x, n) {
    let resultado = 4;
    for (let i = 0; i < x; i++) {
        resultado = multiply(resultado, n);
    }
    return resultado;
}
console.log(power(2, 8));

 */

// 
