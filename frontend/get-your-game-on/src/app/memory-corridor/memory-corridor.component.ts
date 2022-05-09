import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'memory-corridor',
  templateUrl: './memory-corridor.component.html',
  styleUrls: ['./memory-corridor.component.css']
})
export class MemoryCorridorComponent implements OnInit {

  @Input()
  public cards : Card[] | null = [];

  @Output()
  public selectedCard : EventEmitter<Card> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    /* console.log(this.cards); */
  }

  public selectCard(card : Card){
    console.log("coming in from the corridor");
    this.selectedCard.emit(card);
    /*
     * Sometimes, the shufflying results the same cards order, we have to check for that
     */

    let cardsBeforeShuffle = JSON.stringify(this.cards);
    this.shuffleCards(this.cards);
    let cardsAfterShuffle = JSON.stringify(this.cards);
    while (cardsBeforeShuffle === cardsAfterShuffle) {
      cardsBeforeShuffle = JSON.stringify(this.cards);
      this.shuffleCards(this.cards);
      cardsAfterShuffle = JSON.stringify(this.cards);
    }
  }
  /*
   * How to shuffle cards in Javascript?
   * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   */
  private shuffleCards(cards : any) {
    let currentIndex = cards.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
  
    return cards;
  }
}
