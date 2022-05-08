import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.css']
})
export class MemoryCardComponent implements OnInit {

  @Input()
  public card! : Card;
  @Output()
  public cardClick : EventEmitter<Card> = new EventEmitter<Card>(); 

  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
  }

  public cardClicked(){
    console.log(`You clicked the card! ${this.card.id}`);
    this.cardClick.emit(this.card);
  }

}
