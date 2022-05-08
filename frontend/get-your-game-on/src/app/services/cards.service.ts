import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { catchError, forkJoin, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CardsService {
  private api: string = 'https://db.ygoprodeck.com/api/v7/randomcard.php';

  constructor(private httpClient: HttpClient) {}

  /*
   * The forkJoin operator allows us of collect the 
   */

  /* https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness */
  /* https://stackoverflow.com/questions/62184418/angular-multiple-calls-to-same-api-in-a-loop */
  /* https://www.esveo.com/en/blog/nY/ */
  public getNumberOfCards(numOfCardsPerRound: number): Observable<Card[]> {
    return forkJoin(
      new Array(numOfCardsPerRound).fill(undefined).map(() =>
        this.httpClient.get(this.api).pipe(
          map((apiCard: any) => {
            return {
              id: apiCard.id,
              name: apiCard.name,
              type: apiCard.type,
              desc: apiCard.desc,
              atk: apiCard.atk,
              def: apiCard.def,
              level: apiCard.level,
              race: apiCard.race,
              attribute: apiCard.attribute,
              sets: apiCard.card_sets,
              imgUrl: apiCard.card_images[0].image_url,
            };
          })
        )
      )
    );
  }
}
