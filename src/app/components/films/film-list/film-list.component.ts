import { Film } from '../../../data/films/film';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/film.service';

export class FeatureRoutingModule { }

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  public films: Film[];
  public selectedFilm: Film;
  public selectedFilms: Film[];

  constructor(private _filmService: FilmService) {
    this.selectedFilms = [];
  }

  ngOnInit() {
    this.readFilms();
  }

  public deleteFilms(): void {
    this.selectedFilms.forEach(film => {
      this._filmService.deleteFilm(film.id).subscribe(data => this.readFilms());
    });
  }

  private readFilms(): void {
    this._filmService.getFilms().subscribe(films => this.films = films);
  }

  public getFilmStatus(film: Film): string {
    return film.isViewed
      ? `(${film.status})`
      : "";
  }

  public onSelection(e, selectedOptions): void {
    this.selectedFilms = [];
    for (let selectedOption of selectedOptions) {
      console.log(selectedOption.value);
      this.selectedFilms.push(selectedOption.value);
    }

    this.selectedFilm = this.selectedFilms[0];
  }

  isAnySelection(): boolean {
    return this.selectedFilms.length > 0;
  }
}
