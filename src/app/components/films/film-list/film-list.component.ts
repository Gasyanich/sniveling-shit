import { Film } from '../../../data/films/film';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  public films: Film[];
  public isEditInputVisible: boolean;

  public selectedFilm: Film;

  public selectedFilms: Film[];

  constructor(private _filmService: FilmService) {
    this.isEditInputVisible = false;
    this.selectedFilm = new Film();
    this.selectedFilms = [];
  }

  ngOnInit() {
    this.readFilms();
  }

  setEditFormVisible(): void {
    this.isEditInputVisible = !this.isEditInputVisible;
  }

  public addFilm(): void {
    this._filmService.addFilm(this.selectedFilm).subscribe(newFilm => {
      this.films.push(newFilm);
      this.selectedFilm = new Film();
    });
  }

  public deleteFilms(): void {
    this.selectedFilms.forEach(film => {
      this._filmService.deleteFilm(film.id).subscribe();
    });
    this.readFilms();
  }

  onSelection(e, selectedOptions) {
    this.selectedFilms = [];
    for (let selectedOption of selectedOptions) {
      console.log(selectedOption.value);
      this.selectedFilms.push(selectedOption.value);
    }
  }

  public cancelAddingFilm(): void {
    this.selectedFilm.name = "";
    this.selectedFilm.isViewed = false;
    this.selectedFilm.genre = "";
    this.selectedFilm.status = "";

    this.isEditInputVisible = false;
  }

  private readFilms(): void {
    this._filmService.getFilms().subscribe(films => this.films = films);
  }

  public getFilmStatus(film: Film): string {
    return film.isViewed
      ? `(${film.status})`
      : "";
  }



}
