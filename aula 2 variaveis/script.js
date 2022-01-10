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

var
