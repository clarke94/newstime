import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    getNews() {
        console.log('Data from: ', this.apiUrl);
        return this.http.get(this.apiUrl);
    }
}
