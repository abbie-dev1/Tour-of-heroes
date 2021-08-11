import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit 
{  
    hero: Hero = 
    {
      id: 1,
      name: 'Windstorm'
    };

    selectedHero?: Hero;
    onSelect(hero: Hero): void 
    {
      this.selectedHero = hero;
    }

    heroes: Hero[] = [];
    constructor(private heroService: HeroService) 
    {
      
    }
    getHeroes(): void 
    {
      this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    }

    ngOnInit(): void 
    {
      this.getHeroes();
    }
}