import {Factory} from "./factory.model";
import {TicTacToe} from "./tictactoe/tictactoe";
import {Game} from "./game.model";
import { BattleShips } from "./battleships/battleships";
import {Games} from "./games.enum"
  
export class GamesFactory implements Factory {
    getGame(game:Games): Game {
        switch(game) {
            case Games.TicTacToe:
                return new TicTacToe();
            case Games.BattleShips:
                return new BattleShips();
            default:
                throw new Error("Invalid Game")
        }
    }
}