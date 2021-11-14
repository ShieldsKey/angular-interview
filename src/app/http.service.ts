import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootObject, Result } from './interfaces/searchResults';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    // private url = 'https://api.npms.io/v2/search?q=scope:angular';
    private url = 'https://api.npms.io/v2/search';

    constructor(private readonly httpClient: HttpClient) { }

    getSearchResults(): Observable<RootObject> {
        return this.httpClient.get<RootObject>(this.url,
            {
              params: new HttpParams()
              .set('q', 'scope:angular')
              .set('from', '0')
              .set('size', '3')
            }).pipe(delay(2000));
    }

    getSearchResultsFilter(pageNumber = 0, pageSize = 4): Observable<RootObject> {
      return this.httpClient.get<RootObject>(this.url,
          {
            params: new HttpParams()
            .set('q', 'scope:angular')
            .set('from', pageNumber.toString())
            .set('size', pageSize.toString())
          }).pipe(delay(2000));
  }
}
