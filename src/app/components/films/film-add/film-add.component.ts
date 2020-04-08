import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/film.service';
import { Router } from '@angular/router';
import { Film } from '../../../data/films/film';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {

  public newFilm: Film;

  constructor(private _filmService: FilmService, private _router: Router) {
    this.newFilm = new Film();
  }

  ngOnInit() {
  }

  public async addFilm() {
    await this._filmService.addFilm(this.newFilm).toPromise();

    this._router.navigate(['/films']);
  }

  public cancel() {
    this._router.navigate(['/films']);
  }



}
