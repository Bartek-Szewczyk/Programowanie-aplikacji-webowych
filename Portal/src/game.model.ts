export interface Game {
    name: string;
    iconSrc: string;
    disable: boolean;
    getGameElement(): HTMLElement;
}