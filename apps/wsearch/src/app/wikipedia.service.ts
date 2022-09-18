import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  pages = [];

  constructor(private http: HttpClient) { }

  search<T>(term: string) {
    return this.http.get<T>('https://en.wikipedia.org/w/api.php', {
     params: {
        action: 'query',
        format: 'json',
        list: 'search',
        origin: '*',
        srsearch: term,
        utf8: '*',
      } 
    })
  }
}
