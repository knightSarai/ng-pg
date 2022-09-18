import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface WikipediaResponse {
  query: {
    search: WikipediaPage[];
  }
}

export interface WikipediaPage {
  title: string;
  pageid: number;
  snippet: string;
  size: number;
  wordCount: number;
  timestamp: string;
}

@Component({
  selector: 'ng-pg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pages: WikipediaPage[] = [];
  title = 'wsearch';
  loading = false;

  constructor(private service: WikipediaService){}

  onTermSubmitted(term: string) {
    this.loading = true;
    this.service.search<WikipediaResponse>(term)
      .subscribe(response => {
        this.pages = response.query.search;
        this.loading = false;
      })
  }
}
