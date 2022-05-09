import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input()
  public currentScore : number = 0;
  @Input()
  public bestScore : number = 0;
  @Input()
  public level : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
