import { disable, log } from "../decorator";
import { Game } from "../game.model";
import { Board } from "./Board";
import { Cell } from "./Cell";


@disable
export class TicTacToe implements Game {
    name: string;
    iconSrc: string;
    disable:boolean;
    
    constructor() {
      
      this.name = "Kółko i krzyżyk";
      this.iconSrc="../Media/tictactoe.png "
      this.disable=false;
    }
    
    @log
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.classList.add('screen');
      const table = <HTMLTableElement>document.createElement('table');
        table.id="tictactoe";
        console.log(this.disable);
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
      const lastGame = <HTMLElement>document.createElement('label');
       lastGame.innerHTML="ostatnia gra ";


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
        div.innerHTML='';
        this.getGameElement;
      })


      winDiv.appendChild(win);
      winDiv.appendChild(restart);
      div.appendChild(winDiv);
      div.appendChild(current);
      div.appendChild(rozmPlanszy);
      div.appendChild(input);
      div.appendChild(btn);
      div.appendChild(lastGame);
      div.appendChild(table);
      
      
      let num ;

      btn?.addEventListener("click",()=>{
        table.innerHTML=" ";
        num=parseInt(input.value)
        this.play(num, table)
      })
      lastGame.addEventListener("click", ()=>{
        console.log(localStorage.getItem('lastGame'));
        let bb=new Board(3, table);
        let game = <string> localStorage.getItem('lastGame')
        let lastGame: Array<Cell> = JSON.parse(game) 
        bb.cells = lastGame;
        for (let i = 0; i < lastGame.length; i++) {
          const el = lastGame[i];
          el.setCellValue(1)
        }
      })
      return div;
       
    }
    play(num:number, table: HTMLTableElement){
      console.log("play");
      new Board(num, table);
      
    }
    
}