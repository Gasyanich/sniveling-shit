import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export abstract class BaseCrudService<T> {

    private _http: HttpClient;
    private _baseUrl: string;

    protected abstract getControllerName(): string;
    private apiUrl: string = 'api/';

    public constructor(http: HttpClient) {
        this._http = http;
        this._baseUrl = "https://sniveling-shit-api.herokuapp.com/"
    }

    protected getItems(): Observable<T[]> {
        return this._http.get<T[]>(this._baseUrl + this.apiUrl + this.getControllerName());
    }

    protected getItem(itemId: any): Observable<T> {
        return this._http.get<T>(this._baseUrl + this.apiUrl + this.getControllerName() + `/${itemId}`);
    }

    protected addItem(item: T): Observable<T> {
        return this._http.post<T>(this._baseUrl + this.apiUrl + this.getControllerName(), item);
    }

    protected deleteItem(itemId: any): Observable<T> {
        return this._http.delete<T>(this._baseUrl + this.apiUrl + this.getControllerName() + `/${itemId}`);
    }

    protected updateItem(item: T, itemId: any): Observable<T> {
        return this._http.put<T>(this._baseUrl + this.apiUrl + this.getControllerName() + `/${itemId}`, item);
    }

}
