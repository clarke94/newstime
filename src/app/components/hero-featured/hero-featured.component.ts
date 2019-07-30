import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-hero-featured',
    templateUrl: './hero-featured.component.html',
    styleUrls: ['./hero-featured.component.scss']
})
export class HeroFeaturedComponent implements OnInit {
    isSubmitted = false;
    searchForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            search: ['']
        });
    }
}
