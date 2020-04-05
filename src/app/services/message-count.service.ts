import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageCountInfo } from "../data/MessageCountInfo";
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class MessageCountService {

    private _apiUrl = "https://sniveling-shit-api.herokuapp.com/api/messagecount/";

    constructor(private http: HttpClient, private router: Router) { }

    getDefaultMessageCountInfos(): Observable<MessageCountInfo[]> {
        return this.http.get<MessageCountInfo[]>(this._apiUrl + "defaultMessages").pipe(
            retry(15)
        );
    }


}
