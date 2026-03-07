import readlinesync = require("readline-sync");

//const alunos: string[] =[];  // < arrau de string lista vazia

const alunos: Array<number>=[12,14];

const notas = new Array<number>(5);//Array de numero inciado com 5 posicoes
 
for(let i = 0; i < notas.length; i++){
  notas[i] = readlinesync.questionFloat("Digite uma nota: ");
}
console.table(notas);
