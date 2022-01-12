var jogador1 = 0;
var jogador2 = 0;
var placar; 

//Alinhamento de if e colocar um if dentro do outro : 
if (jogador1 != -1) { // Sinal de diferente
    // Usando IF
if (jogador1 > 0 && jogador2 == 0 ) { //caso jogador marcar ponto
console.log('Jogador 1 marcou ponto!');
placar = jogador1 > jogador2;
} 
// Usando  Else if
else if (jogador2 > 0 && jogador1 == 0) { 
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1; 

}

//Usando else
else {
    console.log('Ninguém marcou ponto');
}
}

//if iternário  
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');



// Como usar o Switch case 
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 Ganhou!!!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 Ganhou!!!');
        break;
        default:
        console.log('Ninguém ganhou');
}