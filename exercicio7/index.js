// Exercício 7 ----------------------------------------------------------------------------------

const sigla = prompt("Digita a sigla do estado a pesquisar.").toUpperCase();

const estados = {
'AC': 'Acre',
'AL': 'Alagoas',
'AP': 'Amapá',
'AM': 'Amazonas',
'BA': 'Bahia',
'CE': 'Ceará',
'DF': 'Distrito Federal',
'ES': 'Espírito Santo',
'GO': 'Goías',
'MA': 'Maranhão',
'MT': 'Mato Grosso',
'MS': 'Mato Grosso do Sul',
'MG': 'Minas Gerais',
'PA': 'Pará',
'PB': 'Paraíba',
'PR': 'Paraná',
'PE': 'Pernambuco',
'PI': 'Piauí',
'RJ': 'Rio de Janeiro',
'RN': 'Rio Grande do Norte',
'RS': 'Rio Grande do Sul',
'RO': 'Rondônia',
'RR': 'Roraíma',
'SC': 'Santa Catarina',
'SP': 'São Paulo',
'SE': 'Sergipe',
'TO': 'Tocantins'
};

// Executa apenas quando os dados digitados forem números.
if ( sigla in estados ) {
    //document.write(`<p>O nome do Estado é: ${Object.getOwnPropertyDescriptor(estados, sigla).value}</p>`);
    document.write(`<p>O nome do Estado é: ${estados[sigla]}</p>`);
} else {
    document.write(`<p>A sigla digitada não existe!</p>`);
}
// Fim exercício 7 -------------------------------------------------------------------------------