import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [   // This is the list of the URLs (routes).
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },   // This redicts the empty URL to the dashboard ie the default startup page.
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({ // Initializes the router and listens for changes.
  imports: [ RouterModule.forRoot(routes) ],    // forRoot because we are configuring the routes from the app root level. 
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

