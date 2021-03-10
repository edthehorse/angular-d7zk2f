import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = []; // Make an empty array of heroes

  constructor(private heroService: HeroService) { }  // Inject heroService ...

  ngOnInit() {  this.getHeroes();  } // ie call the getHeroes below - on startup.

  getHeroes(): void {
    
     this.heroService.getHeroes() // (... heroService is now available here.)
    //  ie calls it in the hero.sevice.ts - ie the HeroService class as follows: 
    /* getHeroes(): Observable<Hero[]> {
       this.messageService.add('HeroService: fetched heroes');
       return of(HEROES);
      }  */

      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}

