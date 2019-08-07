import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { DataService } from '../data/data.service';

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    private ipKey = environment.ipKey;
    private ipUrl = environment.ipUrl;
    private location: string;

    constructor(
        private http: HttpClient,
        private dataService: DataService
    ) { }

    requestLocation() {
        const endpoint = 'ipgeo';
        const supportedCountries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"];
        return this.http.get(`${this.ipUrl}/${endpoint}?${this.ipKey}`).pipe(
            map(({ country_code2 }: any) => country_code2),
            map((code) => {
                this.location = supportedCountries.map(x => x.toUpperCase()).includes(code) ? code : 'gb';
                this.dataService.updatecountryCode(this.location);
                return this.location;
            })
        );
    }

    getLocation() {
        return this.location;
    }
}
