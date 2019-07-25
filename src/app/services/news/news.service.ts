import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    key: string = '05c8103f81cd4375b9dc15de711d280e';

    constructor(
        private http: HttpClient
    ) { }

    getNews() {
        console.log('service0');
        return this.http.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${this.key}`);
    }
}
