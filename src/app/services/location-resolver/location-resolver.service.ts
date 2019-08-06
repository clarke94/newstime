import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationService } from '../location/location.service';

@Injectable({
    providedIn: 'root'
})
export class LocationResolverService implements Resolve<any> {

    constructor(
        private locationService: LocationService
    ) { }

    resolve(): Observable<any> | Observable<never> {
        return this.locationService.requestLocation();
    }
}
