import { Game } from "../game.model";

export class BattleShips implements Game {
    name: string;
    iconSrc: string;
    constructor() {
        this.name = "Statki"
        this.iconSrc="../Media/tictactoe.png"
    }
    
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }

}