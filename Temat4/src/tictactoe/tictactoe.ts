import { Game } from "../game.model";
import { Board } from "./Board";
export class TicTacToe implements Game {
    name: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
    }
    getGameElement(): HTMLElement {
      const table = document.createElement('table');
        table.id="tictactoe"
        
      //  let inputNumber =<HTMLInputElement>document.getElementById("num") ;
       // let tab= <HTMLTableElement>document.getElementById('tictactoe')
       // const play = document.getElementById('play');

        let board;
        let num;
console.log(table.id);
        
            board = new Board(3);
       return table;
        
    }
}