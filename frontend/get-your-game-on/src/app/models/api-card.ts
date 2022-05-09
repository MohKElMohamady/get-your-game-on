import { CardImage } from "./card-images";
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
    card_sets : CardSet[];
    card_images : CardImage[];
    card_prices : CardPrice[];
}