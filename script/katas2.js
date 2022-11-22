
// Primeira Tarefa



function add(number1, number2) {
    let resultado = 0;
    resultado += number2 + number1
    return resultado;
}
console.log(add(2, 4));

// Segunda Tarefa

function multiply(number3, number4) {
    let result = 0;
    for (let i = 0; i < number3; i++) {
        result = add(result, number4);
    }
    return result;
}
console.log(multiply(6, 8));

// 
