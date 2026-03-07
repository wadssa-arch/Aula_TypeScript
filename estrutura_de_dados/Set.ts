import readlinesync = require("readline-sync");
 
const alunos = new Set<string>();
let continuar: boolean = false;
let opcao: number = 0;
 
do{
    console.log("1 - Adicionar aluno");
    console.log("2 - Lista alunos");
    console.log("3 - Remover alunos");
    console.log("4 - Limpar lista de alunos");
 
    opcao = readlinesync.questionInt("Escolha uma opcao: ")
 
    switch(opcao){
        case 1:
            alunos.add(readlinesync.question("Digite o nome do aluno: ")) //add adiciona um elemento no set
            break;
 
        case 2:
            console.table(alunos);
            break;
 
        case 3:
            let nomeAluno = readlinesync.question("Digite o nome do aluno: ");
            for (let nome of alunos){
                if(nome == nomeAluno){
                    alunos.delete(nome);
                    console.log(`O aluno ${nome} foi removido da lista`);
                } else{
                    console.log("Aluno não encontrado");
                }
            }
 
 
            //alunos.delete(readlinesync.question("Digite o nome do aluno: ").toLocaleLowerCase()); //delete remove um elemento no set //toLocaleLowerCase ignora se foi escrito em maiusculo ou minusculo
 
        case 4:
            alunos.clear(); // clear limpa toda a lista
            break;
 
        default:
            console.log("Opção invalida!")
            break;
    }
 
    continuar = readlinesync.keyInYNStrict("Deseja continuar? ") //keyInYNStrict deixa restrito para teclas Y (YES) ou N (NO)
 
}while(continuar); //Se for verdadeiro continua no looping