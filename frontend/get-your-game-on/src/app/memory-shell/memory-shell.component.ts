import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Card } from '../models/card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'memory-shell',
  templateUrl: './memory-shell.component.html',
  styleUrls: ['./memory-shell.component.css'],
})
export class MemoryShellComponent implements OnInit {
  public cardsForRound$: Observable<Card[]> | null;
  public cardsRemaining!: Card[];


  public currentScore : number = 0;
  public bestScore : number = 0;
  private readonly INITIAL_ROUND_CARD_NUMBER: number = 4;
  public level : number = 1;
  public isGameRunning : boolean = true;

  constructor(private cardsService: CardsService) {
    this.cardsForRound$ = this.cardsService.getNumberOfCards(
      this.INITIAL_ROUND_CARD_NUMBER * this.level
    ).pipe(
      tap((cards) => {
        console.log("Hi there");
        console.log(JSON.stringify(cards));
        console.log("Bye");
        this.cardsRemaining = cards;
      })
    );

  }

  
  ngOnInit(): void {
    
  }
  
  public selectCard(selectedCard : Card){
    console.log("Ad Victoria");
    console.log(selectedCard);
    if(this.cardsRemaining.includes(selectedCard)){
      console.log(`Found the card! Time to remove the card from the deck`);
      /*
       * Not working with slice, used filter instead
       */
      /* let indexOfSelectedCard = this.cardsRemaining.indexOf(selectedCard);
      console.log(`Found the index! ${indexOfSelectedCard}`) */;
      this.cardsRemaining = this.cardsRemaining.filter((card) => card.id !== selectedCard.id);
      /*
       * Removed the card, increase the score of the round
       */
      console.log(this.cardsRemaining);
      this.currentScore++;
    }else{
      /*
       * Functionality of reseting the game and starting it all over again
       */
      console.log("Game over!");
      this.currentScore > this.bestScore ? this.bestScore = this.currentScore : null;
      
      this.isGameRunning = false;
    }
    /*
     * Is the array empty? If it is, the next level 
     */
    if(this.cardsRemaining.length === 0){
      console.log("Next level!");
      this.incrementLevel();
      
    }
  }

  public startANewGame(){
    /*
       * Reset the current score
       */
    this.currentScore = 0;
    /*
     * Reset the level
     */
    this.level = 1;
    /*
     * Reset the number of cards
     */
    this.cardsForRound$ = this.cardsService.getNumberOfCards(
      this.INITIAL_ROUND_CARD_NUMBER * this.level
    ).pipe(
      tap((cards) => {
        console.log("Hi there");
        console.log(JSON.stringify(cards));
        console.log("Bye");
        this.cardsRemaining = cards;
      })
    );  
    this.isGameRunning = true;
  }

  public incrementLevel(){
    this.level++;
    this.cardsForRound$ = this.cardsService.getNumberOfCards(
      this.INITIAL_ROUND_CARD_NUMBER * this.level
    ).pipe(
      tap((cards) => {
        console.log("Hi there");
        console.log(JSON.stringify(cards));
        console.log("Bye");
        this.cardsRemaining = cards;
      })
    );
  }

}
