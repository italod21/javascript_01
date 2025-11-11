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

// let promessa = new Promise((resolve, reject) => {
//     let deuCerto = false;

//     if (deuCerto) {
//         resolve("Funcionou!"); // chama o "lado do sucesso"
//     } else {
//         reject("Deu ruim!");   // chama o "lado do erro"
//     }
// });

// promessa
//     .then(res => console.log(res))   // se usou resolve()
//     .catch(err => console.log(err)); // se usou reject()

// let salario = Number(prompt('Digite o seu salário:'));
// let inss;
// let imp;

// inss = salario * 0.1;
// imp = salario * 0.05;

// console.log(
// `Salário bruto: ${salario}, 
// Inss: ${inss}, 
// Impostos: ${imp}, 
// Salário líquido: ${salario - inss - imp}`);

// let nomes = ['Alex', 'Alexandre', 'Prisioneiro', 'Thalysson', 'Calou', 'Ramon'];

// for (let i = 0; i < nome.length; i++) {
//     if (nomes[i] == 'Prisioneiro') {
//         console.log(`Achei o prisioneiro! Ele está na posição ${i}`);
//         break;
//     } else {
//         console.log(`Prisioneiro não encontrado!`);
//     }
// }

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 == 0 && numeros[i] % 5 == 0) {
//         console.log(`${numeros[i]} marminino`);
//     } else if (numeros[i] % 2 == 0) {
//         console.log(`${numeros[i]} mar`);
//     } else if (numeros[i] % 5 == 0) {
//         console.log(`${numeros[i]} minino`);
//     } else {
//         console.log(`${numeros[i]}`);
//     }
// }

// function subtrair(num1, num2) {
//     return num1 - num2;
// }

// function multiplicar(num1, num2) {
//     return num1 * num2;
// }

// function dividir(num1, num2) {
//     return num1 / num2;
// }

// let nome = prompt('Digite seu nome:');
// let periodo = prompt('Digite o período do dia:');

// function saudar(nome, periodo) {
//     if (periodo == 'manhã') {console.log(`Bom dia, ${nome}!`)}
//     else if (periodo == 'tarde') {console.log(`Boa tarde, ${nome}`)}
//     else if (periodo == 'noite') {console.log(`Boa noite, ${nome}`)}
//     else {console.log(`${nome}, período inválido!`)}
// }

// saudar(nome, periodo);


// let notas = []
// for (let i = 0; i < 3; i++) {
// n = Number(prompt(`Digite a nota ${i+1}:`));
// notas.push(n);  
// }    

// function calcular(notas) {
//     let soma = 0;
//     for (let k = 0; k < notas.length; k++) {
//         soma += notas[k];
//     }
//     let media = soma/notas.length

//     if (media >= 7) {
//         console.log(`Média: ${media} - Situação: Aprovado`);
//     } else {
//         console.log(`Média: ${media} - Situação: Reprovado`);
//     }
// }

// calcular(notas);

// let qtd = Number(prompt('Digite a quantidade de produtos que deseja cadastrar:'));

// function cadastrar(q) {
//     let produtos = [];
//     for(; q > 0; q--) {
//         let obj = {}
//         let nome = prompt('Digite o nome do produto:');
//         obj.nome = nome;
//         console.log(obj);
//         let preco = Number(prompt('Digite o preço unitário do produto:'));
//         obj.preco = preco;
//         let quantidade = Number(prompt('Digite a quantidade em estoque:'));
//         obj.quantidade = quantidade;
//         produtos.push(obj);
//     } 
//     console.log(produtos);
// }

// cadastrar(qtd);

// const v = [{nome:"Leite", categoria:"perecivel", preco:5, quantidade:120},
//  {nome:"Arroz", categoria:"seco", preco:22, quantidade:40}, { nome: "Banana", categoria: "perecivel", preco: 3, quantidade: 90 }];

// Array.prototype.reduce_it = function() {
//     let soma = 0;
//     for (let i = 0; i < this.length; i++) {
//         if (this[i].categoria === "perecivel" && this[i].quantidade > 100) {
//             soma += this[i].preco * this[i].quantidade * 0.95;
//         } else {
//             soma += this[i].preco * this[i].quantidade;
//         } 
//     }
//     return Number(soma.toFixed(2));
// }

// console.log(v.reduce_it());
// console.log(v);

// const clientes = [
//   { nome: "Ana", email: "ANA@EMPRESA.COM", compras: 4200 },
//   { nome: "Bruno", email: "bruno@empresa.com", compras: 7200 },
//   { nome: "Carlos", email: "CARLOS@EMPRESA.COM", compras: 5100 },
//   { nome: "Diana", email: "diana@empresa.com", compras: 3200 }, 
//   { nome: "Barbara", email: "barbara@empresa.com", compras: 6000 }, 
//   { nome: "Luna", email: "Luna@empResa.com", compras: 9900 }, 
//   { nome: "Xico", email: "xico@empresa.com", compras: 1700 }, 
  
// ];

// function listaVipOrdenada(vetor) {
// const vip = vetor.filter((v) => v.compras > 5000);
// const vip_ordenado = vip.sort((a, b) => b.compras - a.compras);
// const emails = vip_ordenado.map(c => c.email.toLowerCase()).join('; ');
// return { vetor, vip_ordenado, emails };
// }

// console.log(listaVipOrdenada(clientes));


// const funcionarios = [
//   { nome: "Ana", cargo: "Assistente", salario: 2800 },
//   { nome: "Bruno", cargo: "Analista", salario: 4500 },
//   { nome: "Carlos", cargo: "Coordenador", salario: 6100 },
//   { nome: "Diana", cargo: "Gerente", salario: 8800 }
// ];

// function reajuste(func) {
//     const funcCopiaReajustado = func.map(v => {
//         let novoSalario = v.salario;
//         if (v.salario < 3000) {novoSalario *= 1.1}
//         else if (v.salario >= 3000 && v.salario < 6000) {novoSalario *= 1.07}
//         else if (v.salario >= 6000 && v.salario * 1.04 < 9000) {novoSalario *= 1.04}
//         else {novoSalario = 9000};
//         return { ...v, salario: Number(novoSalario.toFixed(2)) };
//     });
//     return funcCopiaReajustado;
// }

// console.log(reajuste(funcionarios));

// // função pura: dado um salário atual, retorna o novo com teto
// function calcularSalarioReajustado(salarioAtual) {
//   const s = Number(salarioAtual) || 0;
//   let novo = s;

//   if (s < 3000) {
//     novo = s * 1.10;
//   } else if (s < 6000) {
//     novo = s * 1.07;
//   } else {
//     novo = s * 1.04;
//   }

//   // aplica teto depois do cálculo
//   novo = Math.min(novo, 9000);

//   // arredonda para 2 casas e garante number
//   return Number(novo.toFixed(2));
// }

// function reajuste(funcionarios) {
//   return funcionarios.map(func => ({
//     ...func,
//     salarioNovo: calcularSalarioReajustado(func.salario),
//   }));
// }

// // uso:
// // console.table(reajuste(funcionarios));

// const produtos = [
//   { nome: "Mouse Gamer", preco: 120, estoque: 50, vendidos: 5 },
//   { nome: "Teclado Mecânico", preco: 350, estoque: 30, vendidos: 0 },
//   { nome: "Monitor 27''", preco: 1300, estoque: 20, vendidos: 8 },
//   { nome: "Headset", preco: 200, estoque: 25, vendidos: 0 },
//   { nome: "Webcam HD", preco: 160, estoque: 40, vendidos: 3 },
// ];

// function desconto(p, v) {
//   if (v == 0) {
//     p *= 0.8;
//   } else if (v < 3) {
//     p *= 0.9
//   } 
//   return Number(p.toFixed(2)) 
// }

// function atualizaEstoque(prod) {
//   return prod.map(p => ({
//     nome: p.nome,
//     precoAntigo: p.preco,
//     precoNovo: desconto(p.preco, p.vendidos),
//     estoqueAtual: p.estoque - p.vendidos
//   }));
// }

// console.log(atualizaEstoque(produtos));

// let n1 = Number(prompt('Digite o primeiro número: '));
// let n2 = Number(prompt('Digite o segundo número: '));
// let op = Number(prompt(
//   `Digite a operação desejada, sendo:
//   1. soma
//   2. subtração
//   3. multiplicação
//   4. divisão`));

// function calcular(n1, n2, op) {
//   if (isNaN(n1) || isNaN(n2) || isNaN(op)) return "Um dos dados inseridos não é número"
//   if (n2 == 0 && op == 4) return "Não existe divisão por zero."
//   switch (op) {
//     case 1:
//       return n1 + n2;
//     case 2:
//       return n1 - n2;
//     case 3:
//       return n1 * n2;
//     case 4:
//       if (n2 == 0 && op == 4) return "Não existe divisão por zero."
//       else return n1 / n2;
//     default:
//       return "Escolha uma opção válida."
//   }
// }

// console.log(calcular(n1, n2, op));

// const num = Math.floor(Math.random() * 100) + 1;
// console.log(n);

// function adivinhar(n) {
//     let palpite = Number(prompt("Digite seu palpite:"));
//     if (palpite < 1 || palpite > 100 || isNaN(palpite) ) {
//       alert("Seu palpite deve ser um NÚMERO entre 1 e 100.");
//       return adivinhar(n);
//     } else if (palpite == n) {
//       alert(`Você acertou, o número é ${n}.`);
//       return;
//     }
//     else if (palpite > n) {
//       alert("O número secreto é menor que seu palpite.");
//       return adivinhar(n);
//     } else if (palpite < n) {
//       alert("O número secreto é maior que seu palpite.");
//       return adivinhar(n);
//     }}

// adivinhar(num);

// const n = Math.floor(Math.random() * 100) + 1;
// console.log(n);

// function adivinhar(n) {

//   let tent = 0;
//   let chutes = [];

//   while (true) {

//     let palpite = Number(prompt("Digite um palpite:"));

//     if (isNaN(palpite)) {
//       alert("Seu palpite não é um número.");
//       continue;
//     }

//     if (palpite < 1 || palpite > 100) {
//       alert("Seu palpite deve estar entre 1 e 100.");
//       continue;
//     }

//     tent++;
//     chutes.push(palpite);

//     if (palpite == n) {
//       alert(`Você acertou na sua tentativa ${tent}, o número secreto é ${n}. As suas tentativas foram: ${chutes.join(", ")}.`);
//       break;
//     } else if (palpite < n) {
//       alert(`O número secreto é maior que ${palpite}.`);
//     } else {
//       alert(`O número secreto é menor que ${palpite}.`)
//     }

//   }
// }

// adivinhar(n);

const boletos = [
  { id: 101, cliente: "ACME", valor: 1200.00, status: "pago",   diasAtraso: 5 },
  { id: 102, cliente: "Beta", valor:  800.00, status: "aberto", diasAtraso: 0 },
  { id: 103, cliente: "Zeta", valor:  950.00, status: "aberto", diasAtraso: 20 },
  { id: 104, cliente: "Gama", valor: 1500.00, status: "pago",   diasAtraso: 0 },
  { id: 105, cliente: "Yupi", valor:  600.00, status: "pago",   diasAtraso: 7 }
];

function resumo(info) {

  const taxa = 0.00033;

  const totais = info.reduce((acum, item) => {
    if (item.status === "pago") 
      acum["totalRecebido"] = (acum["totalRecebido"] || 0) + item.valor; 
    if (item.status === "aberto") 
      acum["totalPendente"] = (acum["totalPendente"] || 0) + item.valor; 
    if (item.diasAtraso > 0) 
      acum["totalJuros"] = (acum["totalJuros"] || 0) + Number((item.valor * item.diasAtraso * taxa).toFixed(2)); 
    return acum;
  }, { totalRecebido: 0, totalPendente: 0, totalJuros: 0 });

  const detalhes = info
  .filter(vetor => vetor.diasAtraso > 0)
  .map(v => ({
    id: v.id,
    cliente: v.cliente,
    valor: Number(v.valor),
    diasAtraso: v.diasAtraso,
    juros: Number((v.valor * v.diasAtraso * taxa).toFixed(2))
  }))
  .sort((a, b) => b.diasAtraso - a.diasAtraso);

  return { totais, detalhes };
}

console.log(resumo(boletos));