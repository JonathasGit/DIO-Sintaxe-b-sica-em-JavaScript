//Tipos Primitivos

//boleanos
var vOuF = false;
console.log(vOuF);
//descobrindo o tipo  primitivo da variavel 
console.log(typeof(vOuF));

// number

var numeroQUalquer = 1;
console.log(numeroQUalquer);
console.log(typeof(numeroQUalquer));

//String

var nome = 'Jonathas';
console.log(nome);
console.log(typeof(nome));


// Como declara as variáveis. 

var variavel = 'Valor1';
variavel = 'Alterando o valor da variável'; 
console.log(variavel); // VAi apresentar valor undefined (Nulo), porque não declarou nada. 

let var2 = 'valorQualquer';
var2 = 'A var let, também permite alterar o seu valor. Depois de sua criação';
console.log(var2);

const constante = 'Valor da Constante'; // Esse tipo de variável precisa de valor a ser declarado, se não da erro.
console.log(constante)