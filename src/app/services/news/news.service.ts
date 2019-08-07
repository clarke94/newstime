import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TopHeadlines } from 'src/app/models/top-headlines/top-headlines';
import { LocationService } from '../location/location.service';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    apiUrl = environment.apiUrl;
    private apiKey = environment.apiKey;


    constructor(
        private http: HttpClient,
        private locationService: LocationService
    ) { }

    getNews(endpoint: string, parameters = {}) {
        const paramArray = Object.values(parameters);
        if ('everything' === endpoint) {
            paramArray.push('language=en');
        } else {
            paramArray.push(`country=${this.locationService.getLocation().toLowerCase()}`);
        }
        if (this.apiKey) {
            paramArray.push(this.apiKey);
        }
        const params = paramArray.join('&');
        return this.http.get<TopHeadlines>(`${this.apiUrl}${endpoint}?${params}`);
    }
}
