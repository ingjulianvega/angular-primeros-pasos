import {Injectable} from '@angular/core';
import {Character} from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters:Character[] =[
    {
      id: uuid(),
      name: 'Krillin',
      power:500
    },
    {
      id: uuid(),
      name: 'Goku',
      power:10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power:9500
    },{
      id: uuid(),
      name: 'LyudmilaSow',
      power:500
    },
    {
      id: uuid(),
      name: 'AhmadZaman',
      power:10000
    },
    {
      id: uuid(),
      name: 'MariyaSaha',
      power:9500
    },{
      id: uuid(),
      name: 'JoelMartins',
      power:500
    },
    {
      id: uuid(),
      name: 'JulioPan',
      power:10000
    },
    {
      id: uuid(),
      name: 'AdrianAhmad',
      power:9500
    }
  ]

  addCharacter(character: Character):void{
    console.log('Recibido en main page' + character);
    const newCharacter: Character = { ...character , id: uuid() }

    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number):void {
    console.log('REcibido en main page onDelete()' + index)
    this.characters.splice(index,1);
  }

  OnDeleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !== id);
  }
}
