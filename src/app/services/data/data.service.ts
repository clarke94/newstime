import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TopHeadlines } from 'src/app/models/top-headlines/top-headlines';
import { Article } from 'src/app/models/article/article';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private topHeadlines = new Subject<Article[]>();

    constructor() { }

    getTopHeadlines() {
        return this.topHeadlines.asObservable();
    }

    updateTopHeadlines(data: Article[]) {
        this.topHeadlines.next(data);
    }
}
