import {Game} from "./game.model"
import { Games } from "./games.enum"
export interface Factory {
  getGame(game: Games): Game;
}