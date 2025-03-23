import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type BoardCard } from '../game-board/game-board.model';

@Component({
  selector: 'app-game-board-card',
  standalone: true,
  imports: [],
  templateUrl: './game-board-card.component.html',
})
export class GameBoardCardComponent {
  @Input({ required: true }) boardEl!: BoardCard;
  @Output() onFlipping = new EventEmitter<number>();
  onCardClick = () => {
    this.onFlipping.emit(this.boardEl.id);
  };
}
