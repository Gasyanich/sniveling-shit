import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class BaseCrudService<T> {

    private _baseUrl: string;
    private _apiUrl: string = 'api/';

    protected abstract getControllerName(): string;

    protected http: HttpClient;

    protected getFullApiUrl(): string {
        return this._baseUrl.concat(this._apiUrl);
    }

    public constructor(http: HttpClient) {
        this.http = http;
        this._baseUrl = "https://sniveling-shit-api.herokuapp.com/";
    }

    protected getItems(): Observable<T[]> {
        return this.http.get<T[]>(this._baseUrl + this._apiUrl + this.getControllerName());
    }

    protected getItem(itemId: any): Observable<T> {
        return this.http.get<T>(this._baseUrl + this._apiUrl + this.getControllerName() + `/${itemId}`);
    }

    protected addItem(item: T): Observable<T> {
        return this.http.post<T>(this._baseUrl + this._apiUrl + this.getControllerName(), item);
    }

    protected deleteItem(itemId: any): Observable<T> {
        return this.http.delete<T>(this._baseUrl + this._apiUrl + this.getControllerName() + `/${itemId}`);
    }

    protected updateItem(item: T, itemId: any): Observable<T> {
        return this.http.put<T>(this._baseUrl + this._apiUrl + this.getControllerName() + `/${itemId}`, item);
    }

}
