const frutas = ["laranja", "limão", "uva"];

// # Exercício 1

// Faça com que os itens do array do arquivo script.js sejam adicionados à página HTML,
//dentro dos itens `li` que estão na página. Repare que um dos itens "li" ficará vago.
// Vamos preenchê-lo no exercício 3.

let recebeFrutas1 = document.getElementById("fruta-1")
let recebeFrutas2 = document.getElementById("fruta-2")
let recebeFrutas3 = document.getElementById("fruta-3")
let recebeFrutas4 = document.getElementById("fruta-4")

recebeFrutas1.innerHTML = frutas[0]
recebeFrutas2.innerHTML = frutas[1]
recebeFrutas3.innerHTML = frutas[2]
recebeFrutas4.innerHTML = frutas[3]

// # Exercício 2

// Crie um campo label e um campo input na página HTML, e preencha o campo com 
// o nome de mais uma fruta.
// Depois disso, escreva **No DevTools** o código necessário para que seja possível 
// imprimir o valor do input escrito no console.
// Cole o comando aqui:

// ```jsx
//     cole o código JS nesta área.
// ```




// # Exercício 3

// Crie uma função que faça com que o valor do input seja adicionado à lista de frutas 
// do exercício 1. Crie um botão, e utilize um evento de `onclick` no botão criado,
//  para que ao clicar no botão, o valor do input do exercício 2 seja adicionado à lista.

const novaFruta = document.getElementById("nome")

function recebeFruta(){
    recebeFrutas4.innerHTML = novaFruta.value
    console.log(novaFruta.value)
}