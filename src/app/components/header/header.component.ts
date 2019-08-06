import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    countryCode: string;

    constructor(
        private locationService: LocationService
    ) { }

    ngOnInit() {
        this.locationService.getLocation();
    }
}
