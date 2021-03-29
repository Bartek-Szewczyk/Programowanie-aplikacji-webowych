
export class Win{
    wygrany: string;

    constructor(value : number){
       
        let win = <HTMLTableElement>document.getElementById("win");
        let winDiv = <HTMLTableElement>document.getElementById("winner");
        winDiv.classList.add('visible')
        const ximg = new Image();
        const oimg = document.createElement("img");
        ximg.src="../Media/x.png";
        oimg.src="../Media/O.png";
        ximg.classList.add("img");
        oimg.classList.add("img");

        win.innerHTML="Wygrył: ";

         if (value==1) {
            this.wygrany="Krzyżyk";
            win.appendChild(ximg)

        }else{
            this.wygrany="Kółko";
            win.appendChild(oimg)
        }

    console.log(`Wygrał: ${this.wygrany}`);
    }
}