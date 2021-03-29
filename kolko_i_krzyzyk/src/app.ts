import { Board } from "./Board";

let inputNumber = document.getElementById("number") ;



inputNumber?.addEventListener('change',()=>{
    let num =inputNumber?.getAttribute('value')
    console.log(num)} )
console.log(inputNumber);

let board = new Board(3);