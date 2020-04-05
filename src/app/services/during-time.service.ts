import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DuringTimeInfo } from '../data/DuringTimeInfo';
import { Observable } from 'rxjs';

@Injectable()
export class DuringTimeService {
    
    private _apiUrl = "https://sniveling-shit-api.herokuapp.com/api/date";

    constructor(private http: HttpClient) { }

     getDuringTimeInfo(): Observable<DuringTimeInfo> {
        return this.http.get<DuringTimeInfo>(this._apiUrl);
    }

}
