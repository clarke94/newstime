import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { LocationService } from '../location/location.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LocationResolverService implements Resolve<any> {

    constructor(
        private locationService: LocationService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
        return this.locationService.requestLocation().pipe(
            mergeMap(countryCode => {
                if (countryCode) {
                    return of(countryCode);
                } else {
                    return EMPTY;
                }
            })
        );
    }
}
