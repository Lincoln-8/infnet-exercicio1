// Exercício 6 ----------------------------------------------------------------------------------
const numero1 = parseFloat(prompt("Digite o valor em reais R$"));

// Executa apenas quando os dados digitados forem números.
if ( !(isNaN(numero1)) ) {
    const valorDolar = (numero1/5.50).toFixed(2);
    const valorEuro = (numero1/6.30).toFixed(2);

    document.write(`<p>"O valor digitado em reais equivale a: ${valorDolar} em dolar"</p>`)
    document.write(`<p>"O valor digitado em reais equivale a: ${valorEuro} em euro"</p>`)
} else {
    document.write(`<p>"O dado digitado não é numérico, por favor refaça o processo!"</p>`);
}
// Fim exercício 6 -------------------------------------------------------------------------------