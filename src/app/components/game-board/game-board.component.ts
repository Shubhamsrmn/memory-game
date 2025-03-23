import { Component, inject } from '@angular/core';
import { GameBoardCardComponent } from '../game-board-card/game-board-card.component';
import { GameBoardService } from './game-board.service';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [GameBoardCardComponent],
  templateUrl: './game-board.component.html',
})
export class GameBoardComponent {
  private boardService = inject(GameBoardService);
  board = this.boardService.board;
  onClickFlipping = this.boardService.cardFlippingFun;
}
