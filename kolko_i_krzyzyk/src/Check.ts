import { Cell } from "./Cell";
import { Win } from "./Win";

export class Check{
    constructor(cells: Array<Cell>){
        let newCell= new Array()
        for (let i = 0; i < Math.sqrt(cells.length); i++) {
            newCell[i]=[]
        }
        for (let i = 0; i < Math.sqrt(cells.length); i++) {
            const el = cells[i];
            for (let j = 0; j < Math.sqrt(cells.length); j++) {
                const e = cells[j];
               newCell[i][j]=`${i}+${j}`;
                
            }
        }

        

console.log(newCell);



        // if(cells[0].cellValue != 0 && cells[0].cellValue == cells[1].cellValue && cells[1].cellValue== cells[2].cellValue){
        //     console.log(`Wygrywa ${cells[0].cellValue}`);
        // }
        // else  if(cells[3].cellValue != 0 && cells[3].cellValue == cells[4].cellValue && cells[4].cellValue== cells[5].cellValue){
        //     console.log(`Wygrywa ${cells[3].cellValue}`);
        // }
        // else  if(cells[6].cellValue != 0 && cells[6].cellValue == cells[7].cellValue && cells[7].cellValue== cells[8].cellValue){
        //     console.log(`Wygrywa ${cells[6].cellValue}`);
        // }
        // else if(cells[0].cellValue != 0 && cells[0].cellValue == cells[3].cellValue && cells[3].cellValue== cells[6].cellValue){
        //     console.log(`Wygrywa ${cells[0].cellValue}`);
        // }
        // else if(cells[1].cellValue != 0 && cells[1].cellValue == cells[4].cellValue && cells[4].cellValue== cells[7].cellValue){
        //     console.log(`Wygrywa ${cells[1].cellValue}`);
        // }
        // else if(cells[2].cellValue != 0 && cells[2].cellValue == cells[5].cellValue && cells[5].cellValue== cells[8].cellValue){
        //     console.log(`Wygrywa ${cells[2].cellValue}`);
        // }
        // else if(cells[0].cellValue != 0 && cells[0].cellValue == cells[4].cellValue && cells[4].cellValue== cells[8].cellValue){
        //     console.log(`Wygrywa ${cells[0].cellValue}`);
        // }
        // else  if(cells[2].cellValue != 0 && cells[2].cellValue == cells[4].cellValue && cells[4].cellValue== cells[6].cellValue){
        //     console.log(`Wygrywa ${cells[2].cellValue}`);
        // }
    }
}