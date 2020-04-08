import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Film } from '../../../data/films/film';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

  public film: Film;

  constructor(private _activatedRoute: ActivatedRoute,
    private _filmService: FilmService,
    private _router: Router) {

  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((map: ParamMap) => {
      const filmId = +(map.get('filmId'));
      this._filmService.getFilm(filmId).subscribe(film => this.film = film);
    });
  }

  public async updateFilm() {
    await this._filmService.updateFilm(this.film, this.film.id).toPromise();

    this._router.navigate(['/films']);
  }

  public cancel() {
    this._router.navigate(['/films']);
  }

}
