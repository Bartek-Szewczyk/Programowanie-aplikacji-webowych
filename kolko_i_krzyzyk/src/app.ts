import { Board } from "./Board";

let inputNumber =<HTMLInputElement>document.getElementById("num") ;
let tab= <HTMLTableElement>document.getElementById('tictactoe')
const play = document.getElementById('play');

let board;
let num;

play?.addEventListener('click', ()=>{
    tab.innerHTML=" "
    num =  parseInt(inputNumber.value);
    board = new Board(num);
})


