// Exercício 8 ----------------------------------------------------------------------------------

const numero = parseInt(prompt("Digite um número entre 1 a 10.")) -1;
const premios = ['cavalo','coelho','gato','cachorro','rato','camelo','leão','dragão','tubarão','águia'];
let premioEscolhido;
const existePremio = premios.find( (valorAtual, i) => {
    if (numero === i) {
        premioEscolhido = valorAtual;
        return true;
    }
    return false;
});

// Executa apenas quando os dados digitados forem números.
if ( existePremio ) {
    //document.write(`<p>O nome do Estado é: ${Object.getOwnPropertyDescriptor(estados, sigla).value}</p>`);
    document.write(`<p>O prêmio escolhido é o: ${premioEscolhido}</p>`);
} else {
    document.write(`<p>Não existe prêmio para o valor digitado, por favor tente com um novo valor!</p>`);
}
// Fim exercício 8 -------------------------------------------------------------------------------