// Exercício 5 ----------------------------------------------------------------------------------
const numero1 = parseFloat(prompt("Digite o número 1"));
const numero2 = parseFloat(prompt("Digite o número 2"));
const numero3 = parseFloat(prompt("Digite o número 3"));
const numero4 = parseFloat(prompt("Digite o número 4"));

// Executa apenas quando os dados digitados forem números.
if ( !(isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) ) {
    const soma = (numero1 + numero2 + numero3 + numero4).toFixed(2);
    const media = (soma/4).toFixed(2);

    document.write(`<p>"A soma das variáveis é: ${soma}"</p>`)
    document.write(`<p>"A média das variáveis é: ${media}"</p>`)
} else {
    document.write(`<p>"algum dado digitado não é do tipo numérico, por favor refaça o processo!"</p>`);
}
// Fim exercício 5 -------------------------------------------------------------------------------