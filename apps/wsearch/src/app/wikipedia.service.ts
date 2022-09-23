import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WikipediaResponse, WikipediaPage } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  pages = [];

  constructor(private http: HttpClient) { }

  search(term: string): Observable<WikipediaPage[]> {
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
     params: {
        action: 'query',
        format: 'json',
        list: 'search',
        origin: '*',
        srsearch: term,
        utf8: '*',
      } 
    }).pipe(map((data ) => data.query.search));
  }
}
