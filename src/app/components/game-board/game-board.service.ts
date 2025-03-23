import { Injectable } from '@angular/core';
import { type BoardCard } from './game-board.model';
@Injectable({ providedIn: 'root' })
export class GameBoardService {
  board: BoardCard[] = [
    {
      id: 1,
      cardId: 1,
      image: '../../../assets/j8es_nmjr_230517.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 2,
      cardId: 2,
      image: '../../../assets/ibae_o6ee_230517.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 3,
      cardId: 3,
      image: '../../../assets/c9vd_b8kw_230627.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 4,
      cardId: 4,
      image: '../../../assets/bzn1_njes_230517.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 5,
      cardId: 5,
      image: '../../../assets/a7dce6a2-bb86-420e-ab02-252af80a5252.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 6,
      cardId: 6,
      image: '../../../assets/25caca50-5501-46d9-880d-806ab8b2b278.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 7,
      cardId: 1,
      image: '../../../assets/j8es_nmjr_230517.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 8,
      cardId: 2,
      image: '../../../assets/ibae_o6ee_230517.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 9,
      cardId: 3,
      image: '../../../assets/c9vd_b8kw_230627.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 10,
      cardId: 4,
      image: '../../../assets/bzn1_njes_230517.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 11,
      cardId: 5,
      image: '../../../assets/a7dce6a2-bb86-420e-ab02-252af80a5252.jpg',
      isFlipped: false,
      isCompleted: false,
    },
    {
      id: 12,
      cardId: 6,
      image: '../../../assets/25caca50-5501-46d9-880d-806ab8b2b278.jpg',
      isFlipped: false,
      isCompleted: false,
    },
  ];
  getRandomBoardData = () => {
    return this.board.sort(() => Math.random() - 0.5);
  };
  cardFlippingFun = (id: number) => {
    const index = this.board.findIndex((el) => el.id === id);
    const currentEl = this.board[index];
    if (currentEl.isFlipped) {
      return;
    }
    currentEl.isFlipped = true;
    setTimeout(() => {
      currentEl.isFlipped = false;
    }, 3000);
  };
}
