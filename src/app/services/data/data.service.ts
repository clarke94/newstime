import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private topHeadlines = new Subject<any[]>();
    private selectedArticle = new Subject<any[]>();

    constructor() { }

    getTopHeadlines() {
        return this.topHeadlines.asObservable();
    }

    updateTopHeadlines(data: any[]) {
        this.topHeadlines.next(data);
    }

    getSelectedArticle() {
        return this.selectedArticle.asObservable();
    }

    updateSelectedArticle(data) {
        this.selectedArticle.next(data);
    }
}
