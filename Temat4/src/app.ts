import { Games } from "./games.enum";
import { GamesFactory } from "./gameFactory"

import './styles/styles.scss';

class App {
    gamesFactory: GamesFactory;
    
    constructor(gamesFactory: GamesFactory) {
        this.gamesFactory = gameFactory;
        this.initMenu();
    }

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        
        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer. Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a
        
        for (const gameKind of Object.keys(Games)) {
            if(isNaN(Number(gameKind))){
                continue;
            }
            const game= gameFactory.getGame(Number(gameKind));
            const item = document.createElement('li');
            const img = document.createElement('img');
            img.src = game.iconSrc;
            img.classList.add('gameIcon');
            item.appendChild(img);
            item.appendChild(document.createTextNode(game.name));
            item.addEventListener('click',()=>{
                gameContainer.innerHTML="";
                gameContainer.appendChild(game.getGameElement())
            })
            list.appendChild(item);

        }


        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}

let gameFactory = new GamesFactory();

let app = new App(gameFactory);