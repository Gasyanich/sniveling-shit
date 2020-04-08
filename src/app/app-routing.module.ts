import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { VkStatComponent } from './components/vk-stat/vk-stat.component';
import { FilmAddComponent } from './components/films/film-add/film-add.component';
import { FilmEditComponent } from "./components/films/film-edit/film-edit.component";

const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'vkstat', component: VkStatComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'addFilm', component: FilmAddComponent },
  { path: 'editFilm/:filmId', component: FilmEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
