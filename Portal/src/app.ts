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
        const mainContainer = <HTMLDivElement>(document.createElement('div'));
        mainContainer.classList.add('main');
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        menuContainer.classList.add('menu');
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        gameContainer.classList.add('game');
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
        mainContainer.appendChild(menuContainer);
        mainContainer.appendChild(gameContainer);
        document.body.appendChild(mainContainer);

        const switcher = <HTMLElement>(document.createElement('label'));
        switcher.classList.add('switch');
        const input = <HTMLInputElement>(document.createElement('input'));
        input.type="checkbox";
        const span = <HTMLElement>(document.createElement('span'));
        span.classList.add('slider');
        span.classList.add('round');

        if(input.checked==true){
            if(document.body.hasAttribute('data-theme')){
                
                document.body.removeAttribute('data-theme');
            }else{
                document.body.setAttribute('data-theme', 'dark')
            }
        }

        switcher.appendChild(input);
        switcher.appendChild(span);

        input.addEventListener('click', () =>{
            if(document.body.hasAttribute('data-theme')){
                document.body.removeAttribute('data-theme');
            }else{
                document.body.setAttribute('data-theme', 'dark')
            }
            
        })

        

        menuContainer.appendChild(switcher);

    }
}

let gameFactory = new GamesFactory();

let app = new App(gameFactory);