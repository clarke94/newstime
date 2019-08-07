import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private countryCode = new Subject<string>();

    constructor() { }

    getcountryCode() {
        return this.countryCode.asObservable();
    }

    updatecountryCode(data: string) {
        this.countryCode.next(data);
    }
}
