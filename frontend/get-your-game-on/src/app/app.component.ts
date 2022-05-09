import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './models/card';
import { CardsService } from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'get-your-game-on';

  private cardO!: Observable<Card>;
  public cards!: Card[];

  constructor(private cardService: CardsService) {}
  ngOnInit(): void {
    
  }

}
