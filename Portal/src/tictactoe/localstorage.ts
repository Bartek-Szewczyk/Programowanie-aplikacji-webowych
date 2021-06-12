import { Cell } from "./Cell";

export class LocalStorage{
    setLastGame(cells: Array<Cell>): void{
        localStorage.setItem('lastGame',JSON.stringify(cells))
    }
   getLastGame(): Array<Cell>{
        let game = <string> localStorage.getItem('lastGame')
        let lastGame: Array<Cell> = JSON.parse(game) 
        return lastGame;
   }
}