import { Cell } from "./Cell";

export class SessionStorage{
    setLastMove(cells: Array<Cell>): void{
        sessionStorage.setItem('lastMove',JSON.stringify(cells))
    }
   
}