// Fazer um menu de exercícios utilizando exemplos dados em aula
// (6 exercicios dentro de funçoes, e incluir nom ou algo de sua preferencia)

import promptSync from "prompt-sync"

// import { exercicio1 } from "./moduloExercicio1.js";
// import { exercicio2 } from "./moduloExercicio2.js";
// import { exercicio3 } from "./moduloExercicio3.js";
// import { exercicio4 } from "./moduloExercicio4.js";
// import { exercicio5 } from "./moduloExercicio5.js";
// import { exercicio6 } from "./moduloExercicio6.js";
import {
  exercicio1,
  exercicio2,
  exercicio3,
  exercicio4,
  exercicio5,
  exercicio6

} from "./modulo"

let prompt = promptSync()

let resposta: string;

do {
  console.log ("Bem vindo ao menu de exercicios!!")

  resposta =  prompt("Digite um numero de 1 a 6 para escolher um exercicios, ou 'sair' para interromper o programa: ")

  switch (resposta) {
    case "1":
      // chamar ex 1
      console.log("Você escolheu o exercicio 01")     
      exercicio1 ()

      break;

    case "2":
        // chamar ex 2
        console.log("Você escolheu o exercicio 02")
        exercicio2 ()
      break;
      
    case "3":
        // chamar ex 3
        console.log("Você escolheu o exercicio 03")
        exercicio3 ()
      break;

    case "4":
        // chamar ex 4
        console.log("Você escolheu o exercicio 04")
        exercicio4 ()   
      break;

    case "5":
        // chamar ex 5
        console.log("Você escolheu o exercicio 05")
        exercicio5 ()      
      break;

    case "6":
      // chamar ex 
      console.log("Você escolheu o exercicio 06")
      exercicio6 ()       
      break;
  
    default:
      ("Voce nao escolheu nenhum exercicio!")
      break;
  }
}
 while (resposta != "sair");