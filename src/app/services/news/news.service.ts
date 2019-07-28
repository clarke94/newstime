import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;

    constructor(
        private http: HttpClient
    ) { }

    getNews(params = '') {
        console.log('Data from: ', this.apiUrl);
        console.log('Params: ', params);
        return this.http.get<any>(`${this.apiUrl}?country=gb${params}&${this.apiKey}`);
    }
}
