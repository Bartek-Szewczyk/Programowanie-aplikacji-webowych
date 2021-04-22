export interface Game {
    name: string;
    iconSrc: string;
    getGameElement(): HTMLElement;
}