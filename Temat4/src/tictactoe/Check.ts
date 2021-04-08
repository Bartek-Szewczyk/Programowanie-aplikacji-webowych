import { Cell } from "./Cell";
import { Win } from "./Win";

export class Check{
    constructor(cells: Array<Cell>){
        let newCell= new Array()
        for (let i = 0; i < Math.sqrt(cells.length); i++) {
            newCell[i]=[];
        }
        let c=0;
        for (let i = 0; i < Math.sqrt(cells.length); i++) {
            for (let j = 0; j < Math.sqrt(cells.length); j++) {
                const el = cells[c];
               newCell[j][i]=el;
               c++
            }
        }
        let pl=0;

        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];
            if (element.cellValue== 1 || element.cellValue == -1) {
                pl++
                
            }
            if (pl==cells.length) {
                new Win(0);
                
            }
        }
        
        for (let i = 0; i < newCell.length; i++) {
             let sX=0, sO=0;
            for (let j = 0; j < newCell.length; j++) {
                 const el = newCell[i][j];
            
                if (el.cellValue == -1) {
                    sO++;
                }else if (el.cellValue == 1){
                    sX++;
                }
                if (sX==newCell.length) {
                    new Win(1)
                }else if(sO==newCell.length){
                    new Win(-1)
                }
            }
        }

        for (let i = 0; i < newCell.length; i++) {
             let sX=0, sO=0;
            for (let j = 0; j < newCell.length; j++) {
                 const el = newCell[j][i];
            
                if (el.cellValue == -1) {
                    sO++;
                }else if (el.cellValue == 1){
                    sX++;
                }
                if (sX==newCell.length) {
                    new Win(1)
                }else if(sO==newCell.length){
                    new Win(-1)
                }
            }
        }
        let sX=0, sO=0;
        for (let i = 0; i < newCell.length; i++) {
             
                 const el = newCell[i][i];
           
                if (el.cellValue == -1) {
                    sO++;
                }else if (el.cellValue == 1){
                    sX++;
                }
                if (sX==newCell.length) {
                    new Win(1)
                }else if(sO==newCell.length){
                    new Win(-1)
                }
        }
            let spX=0, spO=0;
            let lp = newCell.length-1;
         for (let i = 0; i < newCell.length ; i++) {
             
           
                 const el = newCell[i][lp];
                
                if (el.cellValue == -1) {
                    spO++;
                }else if (el.cellValue == 1){
                    spX++;
                }
                if (spX==newCell.length) {
                    new Win(1)
                }else if(spO==newCell.length){
                    new Win(-1)
                }
                lp--;
          
            continue;
        }
        





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