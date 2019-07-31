import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SlugPipe } from 'src/app/pipes/slug/slug.pipe';

@Component({
    selector: 'app-hero-featured',
    templateUrl: './hero-featured.component.html',
    styleUrls: ['./hero-featured.component.scss']
})
export class HeroFeaturedComponent implements OnInit {
    @Input() search;
    isSubmitted = false;
    searchForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private slugPipe: SlugPipe
    ) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            search: ['', Validators.required]
        });
        this.setSearch();
    }

    get formControls() {
        return this.searchForm.controls;
    }

    submitSearch() {
        this.isSubmitted = true;
        if (this.searchForm.invalid) {
            this.validateAllControls(this.searchForm);
            return;
        }

        let search = `${this.formControls.search.value}`;
        let query = this.slugPipe.transform(search);
        this.router.navigate(['search'], { queryParams: { search: search } });
    }

    setSearch() {
        if (!this.search) {
            return
        }
        this.formControls.search.setValue(this.search);
    }

    checkValue() {
        return this.formControls.search.value.length > 0 ? true : false;
    }

    validateAllControls(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllControls(control);
            }
        });
    }
}
