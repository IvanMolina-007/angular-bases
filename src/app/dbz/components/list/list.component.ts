import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()  public charactersList: Character[] = [];
  @Output() public emitter = new EventEmitter<string>();

  deleteCharacter( id?: string):void {
    if( !id ) return
    this.emitter.emit(id)
  }
}
