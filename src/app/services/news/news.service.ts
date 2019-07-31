import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TopHeadlines } from 'src/app/models/top-headlines/top-headlines';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;


    constructor(
        private http: HttpClient
    ) { }

    getNews(endpoint: string, parameters = {}) {
        const paramArray = Object.values(parameters);
        if (this.apiKey) {
            paramArray.push(this.apiKey);
        }
        const params = paramArray.join('&');
        console.log(`Data from:${this.apiUrl}`, ` Endpoint:${endpoint}`, ` Params:${params}`);
        return this.http.get<TopHeadlines>(`${this.apiUrl}${endpoint}?${params}`);
    }
}
