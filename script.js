// var str = 'Italo Duarte';
// var num = 34;
// var bol = true;
// var nul = null;
// var undef;

// console.log(str, num, bol, nul, undef);


// Comparar dois números e mostrar o maior deles (sem usar else if):
/*
var n1 = Number(prompt('Digite o primeiro número:'));
var n2 = Number(prompt("Digite o segundo número:"));

if (n1 == n2) {
    alert('Os números são iguais!');
} else {
    if (n1 > n2) {
        alert(n1);
    } else {
        alert(n2);
    }
};
*/

// Analisar se um número é positivo, negativo ou igual a zero:
/*
var n = Number(prompt('Digite um número:'));

if (n == 0) {
    console.log('Zero.');
} else if (n > 0) {
    console.log('Positivo.');
} else {
    console.log('Negativo.');
};
*/

//Analisar a letra inserida, sendo "F" para feminino e "M" para masculino. O caracter pode ser maiúsculo ou minúsculo.

// var sexo = prompt('Digite F para feminino ou M para masculino');

// if (sexo == 'F' || sexo == 'f') {
//     alert ('Feminino.');
// } else if (sexo == 'M' || sexo == 'm') {
//     alert ('Masculino.');
// } else {
//     alert ('Inválido.');
// };

// function verificarLogin(usuario, senha) {
//     return usuario === "admin" && senha === "1234" 
// ? "Acesso permitido" 
// : "Acesso negado";
// }

// function ultimoElemento(arr) {
//     return this[this.length - 1] ?? -1;
// }

let promessa = new Promise((resolve, reject) => {
    let deuCerto = false;

    if (deuCerto) {
        resolve("Funcionou!"); // chama o "lado do sucesso"
    } else {
        reject("Deu ruim!");   // chama o "lado do erro"
    }
});

promessa
    .then(res => console.log(res))   // se usou resolve()
    .catch(err => console.log(err)); // se usou reject()