import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  @Output()
  public startANewGame : EventEmitter<void> = new EventEmitter<void>(); 
  constructor() { }

  ngOnInit(): void {
  }

  newGame(){
    this.startANewGame.emit();
  }
}
