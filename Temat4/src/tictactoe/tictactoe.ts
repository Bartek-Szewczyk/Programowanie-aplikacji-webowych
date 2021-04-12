import { Game } from "../game.model";
import { Board } from "./Board";
export class TicTacToe implements Game {
    name: string;
    iconSrc: string;

    constructor() {
        this.name = "Kółko i krzyżyk";
        this.iconSrc="../Media/tictactoe.png "
        
    }
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
      const table = <HTMLTableElement>document.createElement('table');
        table.id="tictactoe";
        
       const rozmPlanszy = <HTMLElement>document.createElement('label');
       rozmPlanszy.innerHTML="Rozmiar Planszy: "
      let input = document.createElement('input');
      input.type="number";
      input.value="3";
      input.min="3";
      input.max="20";
      input.id="num";
      const btn = document.createElement('button');
      btn.innerHTML="Graj"

      let current = document.createElement('h2');
      current.id="current";

      let win = <HTMLElement>document.createElement("h2");
      win.id="win";
      win.innerHTML="winner";
      let winDiv = <HTMLElement>document.createElement("div");
      winDiv.id="winner";
      winDiv.classList.add('nonevisible');
      const restart = document.createElement('button');
      restart.innerHTML="Koniec Gry";
      restart.addEventListener("click",()=>{
        window.location.reload();
      })


      winDiv.appendChild(win);
      winDiv.appendChild(restart);
      div.appendChild(winDiv);
      div.appendChild(current);
      div.appendChild(rozmPlanszy);
      div.appendChild(input);
      div.appendChild(btn);
      div.appendChild(table);
      
      
      let num ;

      btn?.addEventListener("click",()=>{
        table.innerHTML=" ";
        num=parseInt(input.value) ;console.log(num);
        this.play(num, table)
      })
      
      return div;
       
    }
    play(num:number, table: HTMLTableElement){
      console.log("play");
      new Board(num, table);
    }
    
}