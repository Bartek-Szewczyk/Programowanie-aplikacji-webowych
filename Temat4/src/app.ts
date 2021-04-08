import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";
import { BattleShips } from "./battleships/battleships";
import './styles/styles.scss';

class App {

    constructor() {
        this.init();        
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer. Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a

        


        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}

new App();