import readlinesync = require("readline-sync");

const notas: Array<number> = [9,8,7,4,5,6,4,]

for(let nota of notas){ // percorre o array conform o tamanho da lista
    console.log(nota)
}

notas.push(10); //colocar no final da lista
notas.pop(); //remover
notas.sort(); //ordenar