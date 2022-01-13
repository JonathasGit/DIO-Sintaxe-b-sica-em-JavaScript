// Funções Declarativas 
// Tem que ser declarada com "function", seguido do nome da função "()" e "{}".

function funcao () {
    console.log('tudo certo jovem e nos - Sou uma mensagem de uma função declarativa ');
}
funcao();


// Expressão de função
// com nomeação
var funcao = function funcao() {
    console.log('Sou uma mensagem teste');
}

funcao();

//Função sem nomeação
var funcao1 = function() {
    console.log('Função de expressão sem a nomeação')
}
funcao1();

//Arrow function 
var funcao2 = () => {
    console.log('Arrow function!')
}
funcao2();