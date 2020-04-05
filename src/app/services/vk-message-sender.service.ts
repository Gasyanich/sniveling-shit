import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VkMessageSenderService {

    private _apiUrl = "https://sniveling-shit-api.herokuapp.com/api/vkmessagesend/";

    constructor(private http: HttpClient) { }

    sendMessage(): void {
        this.http.get(this._apiUrl).subscribe();
    }
}
