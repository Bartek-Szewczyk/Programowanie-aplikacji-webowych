
export class Win{
    wygrany: string;

    constructor(value : number){
        if (value==1) {
            this.wygrany="Krzyżyk";
        }else{
            this.wygrany="Kółko"
        }

    console.log(`Wygrał: ${this.wygrany}`);
    }
}