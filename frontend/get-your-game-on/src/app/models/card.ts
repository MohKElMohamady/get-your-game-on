import { CardSet } from "./card-set";

export interface Card{
    id : number;
    name : string;
    type : string;
    desc : string;
    atk : number;
    def : number;
    level : number;
    race : string;
    attribute : string;
    sets : CardSet[]
    imgUrl : string;
}