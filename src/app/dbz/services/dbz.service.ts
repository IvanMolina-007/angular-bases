import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public charactersMain: Character[] = [
    { id: uuid(), name: 'Krillin', power: 1000},
    { id: uuid(), name: 'Goku', power: 9500},
    { id: uuid(), name: 'Vegeta', power: 7500},
  ];

  receiveCharacter( character: Character ){
    const newCharacter: Character = {...character, id: uuid()};
    this.charactersMain.push( newCharacter )
  }

  deleteCharacter( id: string ){
    this.charactersMain = this.charactersMain.filter( item => item.id !== id);
  }

}
