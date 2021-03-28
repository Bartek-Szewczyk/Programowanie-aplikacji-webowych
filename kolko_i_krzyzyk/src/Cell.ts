export class Cell {
    cellValue: number;
    htmlElement: HTMLElement;

    constructor(cell: HTMLElement) {
    this.htmlElement = cell;
    this.cellValue=0;
    }

    setCellValue(value:number){
        // TODO: napisz samemu metodę, która ustawia w tabeli kółko i krzyżyk. Możesz przyjąć, że kółko to wartość -1, krzyżyk to wartość 1, a 0 (zero) oznacza pole nieustawione.
        if (value == 1 && this.cellValue == 0) {
            this.cellValue = 1;
            this.htmlElement.innerHTML = "X"
        }else if (value == -1 && this.cellValue ==0){
            this.cellValue = -1;
            this.htmlElement.innerHTML = "O"
        }

    }
}