var jogador1 = 0;
var jogador2 = 0;
var placar; 

//Alinhamento de if e colocar um if dentro do outro : 
if (jogador1 != -1) { // Sinal de diferente
if (jogador1 > 0){ //caso jogador marcar ponto
console.log('Jogador 1 marcou ponto!');
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto');
}

else {
    console.log('Ninguém marcou ponto');
}
}

//if iternário  
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores Inválidos');
