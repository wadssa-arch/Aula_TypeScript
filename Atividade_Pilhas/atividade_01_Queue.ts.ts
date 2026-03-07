import { question } from "readline-sync";
import {Queue} from "./Queue";

const fila = new Queue<string>();
let QueueData: string [] =[]
let clientes;
let continuar =  true;
let opcao;
let nome;

 
   while(continuar){
    console.log("=-=-=-BEM VINDO  AO BANCO WADSSA-=-=-=\n");
    console.log("1 - Adicionar um novo Cliente na fila");
    console.log("2 - Listar todos os clientes na fila");
    console.log("3 - Remover  um cliente");
    console.log("0 - Sair\n"); 
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="); 
    opcao = parseInt(question("Escola uma opcao:> "));
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-="); 
  
   
    switch(opcao){
    
        case 1:
            nome = question("1 - Digite o nome do cliente: ");
            fila.enqueue(nome);
                 console.log(`\n Cliente ${nome} adicionado com sucesso!`)
                     break;
  
        case 2:
                if(fila.isEmpty())
                    console.log(`fila vazia!`);

                else
                    console.log(`Lista de clientes:`);
                    fila.printQueue();
                        break;
                

        case 3:
                if(fila.isEmpty()){
                     console.log(`fila vazia!`)

                }else{
                    fila.dequeue()
                    console.log(`Cliente ${nome} chamado!`)
                    break;

                }  

case 0:
    continuar = false
        console.log(`Programa finalizado! ^-^`);
         break;

 }
   
    }
        