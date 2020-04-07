import { Injectable } from '@angular/core';
import { BaseCrudService } from './base-crud.service';
import { Film } from "../data/films/film";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class FilmService extends BaseCrudService<Film> {

    protected getControllerName(): string {
        return "films";
    }

    constructor(http: HttpClient) {
        super(http);
    }

    public getFilms(): Observable<Film[]> {
        return this.getItems().pipe(map(films => {
            let preparedFilms: Film[] = [];

            films.forEach(film => {
                preparedFilms.push(this.prepareAfterGet(film));
            });

            return preparedFilms;
        }));
    }

    public getFilm(filmId: number): Observable<Film> {
        return this.getItem(filmId).pipe(map(film => {
            return this.prepareAfterGet(film);
        }));
    }
    public addFilm(newFilm: Film): Observable<Film> {
        let preparedFilm = this.prepareBeforeSendFilm(newFilm);
        return this.addItem(preparedFilm);
    }

    public deleteFilm(filmId: number): Observable<Film> {
        return this.deleteItem(filmId);
    }

    public updateFilm(film: Film, filmId: number): Observable<Film> {
        let preparedFilm = this.prepareBeforeSendFilm(film);
        return this.updateItem(preparedFilm, filmId);
    }

    private prepareBeforeSendFilm(film: Film): Film {
        if (film.isViewed)
            film.status = Film.viewed;
        else
            film.status = Film.notViewed;

        return film;
    }

    private prepareAfterGet(film: Film): Film {
        film.isViewed = film.status === Film.viewed

        return film;
    }
}
