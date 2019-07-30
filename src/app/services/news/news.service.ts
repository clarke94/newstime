import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TopHeadlineParams } from 'src/app/models/top-headline-params/top-headline-params';
import { TopHeadlines } from 'src/app/models/top-headlines/top-headlines';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;
    private country = 'country=gb';


    constructor(
        private http: HttpClient
    ) { }

    getNews(parameters = {}) {
        const paramArray = Object.values(parameters);
        if (this.country)
            paramArray.push(this.country);
        if (this.apiKey) {
            paramArray.push(this.apiKey);
        }
        const params = paramArray.join('&');
        console.log(params);

        console.log(`Data from: ${this.apiUrl}`, `Params: ${params}`);
        return this.http.get<TopHeadlines>(`${this.apiUrl}?${params}`);
    }
}
