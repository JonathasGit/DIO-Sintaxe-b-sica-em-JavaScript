// Estrutura de Repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

var a = 0; //

// FOR - Executa uma instrução até que ela seja falsa 

//Enquanto array não atinge o valor total de 5, indice receb mais 1 
for (let indice = 0 ; indice < array.length; indice++){
    console.log(indice);

}
// For/in - executa repetição a partir de uma propriedade
//com array
for (let i in array){
    console.log(i);
}

//com objetct
for (i in object) {
    console.log(i)
}

//for/of - Funciona como uma repetição a partir de um valor:
// Pegando da var Array
for (i of array) {
    console.log(i); // cada valor de cada indice do array

}
// Pegando da variavel object
for (i of object.propriedade1){
    console.log(i); // Não da para usar for of com objetos
}


// While
while (a < 100) {
    a++;
     console.log(a);
}
