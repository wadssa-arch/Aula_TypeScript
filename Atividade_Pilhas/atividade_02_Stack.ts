import { question } from "readline-sync";
import { Stack } from "./Stack";

const pilha= new Stack<string>();
let QueueData: string [] =[]
let continuar =  true;
let opcao;
let livro;
let removido;

 
   while(continuar){
    console.log("=-=-=-BIBLIOTECA VIRTUAL-=-=-=\n");
    console.log("1 - Adicionar um novo Livro ");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar um livro ");
    console.log("0 - Sair\n"); 
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="); 
    opcao = parseInt(question("Escola uma opcao:> "));
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="); 
  
   
    switch(opcao){
    
        case 1:
            livro = question("1 - Digite o nome do livro: ");
            pilha.push(livro);
                 console.log(`\n Livro ${livro} adicionado com sucesso!\n`)
                     break;
  
        case 2:
                if(pilha.isEmpty()){
                    console.log(`Biblioteca vazia!`);
                    break; 
                }
                else{ 
                    console.log(`\nLista Livros:\n`);
                    pilha.printStack();
                        break;
                }
        case 3:
                if(pilha.isEmpty()){
                     console.log(`Biblioteca vazia!`)
                     break;

                }else{
                    removido = pilha.pop()
                    console.log(`Livro ${removido} removido!\n`)
                        break;

                }  

case 0:
continuar = false
   console.log(`Ate a Proxima! ^-^`);
    break;

 }
   
    }
        