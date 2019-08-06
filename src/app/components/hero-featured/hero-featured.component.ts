import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero-featured',
    templateUrl: './hero-featured.component.html',
    styleUrls: ['./hero-featured.component.scss']
})
export class HeroFeaturedComponent {
    @Input() heading?: string;
    @Input() subHeading?: string;
}
