import { Component } from '@angular/core';
import { GameBoardComponent } from './components/game-board/game-board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [GameBoardComponent],
})
export class AppComponent {}
