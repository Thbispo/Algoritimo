// Exercicio  1

//Escreva um programa que verifique se o número fornecido pelo usuário é positivo, negativo ou zero.
 
 numero = 29;
 
if (numero > 0) {
    console.log ("O numero é POSITIVO");
}
 
else if (numero === 0) {
    console.log ("O numero é ZERO");
}
 
else {
    console.log ("O numero é NEGATIVO");
}

// EXERCICIO 2

//Crie um programa que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.
numero = 16;
 
if (numero > 16) {
    console.log ("Maior de idade");
}
 
else if (numero < 18) {
    console.log ("Menor de idade");
}
 


// EXERCICIO 3

//Escreva um programa que verifique se um número fornecido pelo usuário é par ou ímpar

function verificarParOuImpar(numero) {
    if (69 % 2 === 0) {
        console.log(numero + " é um número par.");
    } else {
        console.log(numero + " é um número ímpar.");
    }
}
// Verifica se o numero 5 é par ou impar
var numero = 69;
verificarParOuImpar(numero)

// EXERCICIO 4

//Crie um programa que leia três números e determine qual é o maior.

numero1 = 30
numero2 = 2
numero3 = 25

if (numero1 > numero2) {
    console.log('O numero1 é maior que o numero2');
    
}
 if (numero1 > numero3) {
    console.log('O numero1 é maior que o numero3');
    console.log('O MAIOR numero é o numero1');
 }
 
 //EXERCICIO 5
  
//Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.
 
letrausuario = 'a'

if (letrausuario.toLowerCase() =='a') {
    console.log('VOGAL');

} else if (letrausuario.toLowerCase() == 'e') {
    console.log('VOGAL');

} else if (letrausuario.toLowerCase() == 'i') {
    console.log('VOGAL');

} else if (letrausuario.toLowerCase() == 'o') {
    console.log('VOGAL');

} else if (letrausuario.toLowerCase() == 'u') {
    console.log('VOGAL');

} else { console.log('CONSOANTE');
    }
    console.log("-------------------")


//EXERCICIO 6

var aluno = 9

if (aluno >= 7 ) {
console.log ('Esta aprovado')

}
else if (aluno== 5 , 6 ,7 ) {
    console.log ('Esta em recuperacao')

} else {aluno <=4
    console.log('Esta reprovado')
    
}
    
console.log('-------------')

//EXERCICIO 7

//Escreva um programa que leia dois números e uma operação (adição, subtração, multiplicação, divisão) 
//e realize a operação entre os dois números.
    
var numero1,numero2
var numero1= 20
var numero2= 6

console.log("========")
 console.log("20+6=",numero1+numero2)
 console.log("20x6=",numero1*numero2)
 console.log("20/6=",numero1/numero2)
 console.log("20-6=",numero1-numero2)
 console.log("")
 console.log("")
 

 //EXERCICIO 8
 
 //Crie um programa que determine se um ano é bissexto.
  
ano = 2032
 
    if (ano % 4 == 0) {
        console.log ("Ano bissexto")
    }
    else {
        console.log ("Não bissexto")
    }
  

  //EXERCICIO 10

 //Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC, 
 //informando se está abaixo do peso, no peso normal, acima do peso ou obeso.

 var minhaaltura, meupeso, minhaaltura, meupeso
 minhaaltura = 1.75
 meupeso = 65
 minhaaltura = 'minhaaltura * minhaaltura'
 meupeso = 'meupeso / minhaaltura'
      
     if ( meupeso <= 17.5 ) {
         console.log ( " Abaixo do peso " )
        }
         else if ( meupeso >= 17.5 <= 24.9 ) {
         console.log ( " Peso ideal")
        }
         else ( meupeso >= 24.9 , " Acima do peso " )

//EXERCICIO 11

//Escreva um programa que leia um mês do ano e informe quantos dias ele tem.

function verificarTipoTriangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        return "Os lados do triângulo devem ter comprimentos positivos.";
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return "O triângulo é equilátero.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "O triângulo é isósceles.";
    } else {
        return "O triângulo é escaleno.";
    }
}

 //EXERCICIO 12

 // Função para gerar um número aleatório entre min (inclusive) e max (inclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function jogoDeAdivinhacao() {

    const numeroAleatorio = gerarNumeroAleatorio(1, 100);
    console.log("Número aleatório gerado:", numeroAleatorio);

    let tentativas = 0;
    let acertou = false;

    while (!acertou) {
  
        const palpite = prompt("Adivinhe o número (entre 1 e 100):");

        if (palpite === null) {
            console.log("Jogo cancelado.");
            return; // Encerra o jogo
        }

        const palpiteNumero = parseInt(palpite);

        if (isNaN(palpiteNumero) || palpiteNumero < 1 || palpiteNumero > 100) {
            alert("Por favor, insira um número válido entre 1 e 100.");
            continue; // Continua para o próximo loop
        }

        if (palpiteNumero === numeroAleatorio) {
            acertou = true;
            console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativa(s).`);
        } else if (palpiteNumero < numeroAleatorio) {
            alert("Tente um número maior.");
        } else {
            alert("Tente um número menor.");
        }
    }
}

//EXERCICIO 13

//Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente pelo programa, com dicas de "maior" ou "menor" após cada palpite.

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função principal que controla o jogo
function jogoAdivinhacao() {
    // Gerar o número secreto
    let numeroSecreto = gerarNumeroAleatorio();
    let tentativas = 2;
    let palpite;

    // Loop para permitir múltiplas tentativas
    while (true) {
        // Pedir ao jogador para fazer um palpite
        palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));

        // Verificar se o palpite é um número válido
        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            alert("Por favor, digite um número válido entre 1 e 100.");
            continue;
        }

        // Incrementar o número de tentativas
        tentativas++;

        // Comparar o palpite do jogador com o número secreto
        if (palpite < numeroSecreto) {
            alert("O número secreto é maior!");
        } else if (palpite > numeroSecreto) {
            alert("O número secreto é menor!");
        } else {
            // Se o palpite for igual ao número secreto, o jogador acertou
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
            break;
        }
    }
}


