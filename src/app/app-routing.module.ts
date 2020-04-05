import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { VkStatComponent } from './components/vk-stat/vk-stat.component';


const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'vkstat', component: VkStatComponent },
  { path: 'films', component: FilmListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
