import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject } from './interfaces/searchResults';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    private url = 'https://api.npms.io/v2/search?q=scope:angular';
    constructor(private readonly httpClient: HttpClient) { }

    getSearchResults(): Observable<RootObject> {
        return this.httpClient.get<RootObject>(this.url).pipe(delay(2000));
    }
}
