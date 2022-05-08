import { CardImages } from "./card-images";
import { CardPrice } from "./card-price";
import { CardSet } from "./card-set";

export interface ApiCard{
    id : number;
    name : string;
    type : string;
    desc : string;
    atk : number;
    def : number;
    level : number;
    race : string;
    attribute : string;
    sets : CardSet[];
    cardImages : CardImages[];
    cardPrices : CardPrice[];
}