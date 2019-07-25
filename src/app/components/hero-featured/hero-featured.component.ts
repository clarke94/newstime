import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-hero-featured',
    templateUrl: './hero-featured.component.html',
    styleUrls: ['./hero-featured.component.scss']
})
export class HeroFeaturedComponent implements OnInit {
    @Input() latestNews;

    constructor() { }

    ngOnInit() {
    }
}
