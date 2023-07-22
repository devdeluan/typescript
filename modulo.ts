import promptSync from "prompt-sync"
let prompt = promptSync()

export function exercicio1() {

  console.log("Exercício 1");
  
  for(let contador: number = 1; contador <= 10; contador++) 
      console.log(contador)
  }

export function exercicio2() {

  console.log("Exercício 2");

  
  for(let contador: number = 0; contador <= 10; contador+=2) {
      console.log(contador)
  }
}
export function exercicio3(){

  console.log("Exercício 3");
  
  
  for(let contador: number = 1; contador <= 50; contador+=2) {
      console.log(contador)
  }
  }

  export function exercicio4() {

    console.log("Exercício 4");
    
    let contador: number = 0
    
    while (contador <= 20) {
      console.log (contador);
      contador += 2;
    } 
    }

export function exercicio5() {

      console.log("Exercício 5");
    
    let contador: number = 0;
    let soma: number = 0;
    
    while (contador <= 100) {
    
        soma = soma + contador;
        // soma += contador
    
        console.log (soma)
    
        contador++
    }
    }

export function exercicio6() {

console.log("Exercício 10");

let contador: number = parseInt(prompt("Digite um número: "))


while (contador != 0)  {
 contador = parseInt(prompt("Digite um número: "))
}
console.log ("Ok!!")
}