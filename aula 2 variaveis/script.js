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

 var escopoGlobal = 'Global';
 console.log(escopoGlobal);

 function escopoLocal(){
     let escopoLocalInterno = 'local';
     console.log(escopoLocalInterno);
 }
 escopoLocal();
 //console.log(escopoLocalInterno); // Não vai ver a varivel, porque ela é local não global, para resolver isso só colocar o console dentro da funcion

//atribuição 
var nome1 = 'Jonathas';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);


//Operadores

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão Inteira ou resto da divisão
var divisaoInteira = 5 % 2;
console.log(divisaoInteira); 

//Potencia
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Operadorews Relacionais

//Maior que 
var maiorQue = 5 > 2;
console.log(maiorQue);

//Menor que
var menorQue = 5 < 2;
console.log(menorQue); 

//Maior ou igual a 
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//Menor ou igual a  
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);


//Operadores Lógicos : 3 tipos  && = "e" todos os valores ficam true
// || = "ou", considera que qualquer valor seja true
//! = "não", inverte o valor. true para false e vice-versa.

var e = true && false; // False, poruqe todos valores não são verdadeiros
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);




