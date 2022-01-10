// O que são Vetores ou Arrays

// Como declarar um array
let array = ['string', 1, true];
console.log(array); 

//pode guardar qualquer tipo de dados.
let array2 = ['string', 1, true, ['arrayTeste1'], ['arrayTeste2'], ['arrayTeste3'], ['arrayTeste4'] ]
console.log(array2);
console.log(array2[4]); // Pegar um determinado array ali de cima,

//Manipulando os Arrays;
//for each forEach() – itera um array;
array.forEach(function(item,index){console.log(item, index)});

//push() – add item no final do array;
array.push('Novo item');
console.log(array);

//pop() – remove item no final do array;
array2.pop();
console.log(array2); // tem que remover o ultimo array arrayTeste4

//shift() – remove item no início do array;
array2.shift();
console.log(array2); // tem que remover o primeiro array Sting

//unshift() – add item no início do array;
array2.unshift('Novo item no inicio');
console.log(array2);

//indexOf() – retorna o índice de um valor;
console.log(array2.indexOf(true));

//splice() – remove ou substitui um item pelo índice;
array2.splice(0,3);
console.log(array2);

//slice() – retorna uma parte de um array existente;
let arrayNovo = array.splice(0,3);
console.log(arrayNovo);




//Objetos 
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectIterno: 'objeto Interno' }};
console.log(object);
console.log(object.boolean); // Acesando só um objeto
console.log(object.objectInterno);


//Desestruturação do objeto
var string = object.string;
console.log(string);

var arrayNovoTeste = object.array; // Vai criar uma nova variavel(arrayNovoTeste) e vai passar o valor do array da variável(object0 para nova variável
console.log(arrayNovoTeste); 

//Outra forma de fazer desestruturação
var {string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno);

