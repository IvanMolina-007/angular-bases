import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  }
  @Output() emitter = new EventEmitter<Character>;

  emitCharacter(){
    if (this.character.name.length === 0) return;
    this.emitter.emit( {...this.character });
    this.character = { name: '', power: 0}
  }


}

