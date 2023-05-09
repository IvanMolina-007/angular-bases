import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  public heroNames: string[] = ['spiderman', 'ironman', 'hulk', 'thor', 'she hulk'];
  public deletedHero?:string;

  removeLastHero(){
    this.deletedHero = this.heroNames.pop();

  }
}
