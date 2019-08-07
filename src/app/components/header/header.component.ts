import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { DataService } from 'src/app/services/data/data.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(isSubmitted && control && control.invalid && (control.dirty || control.touched));
    }
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    countryCode: string;
    isSubmitted = false;
    searchForm: FormGroup;
    matcher = new MyErrorStateMatcher();

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private dataService: DataService,
    ) { }

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            search: ['', Validators.required]
        });
        this.setCountryCode();
    }

    setCountryCode() {
        this.dataService.getcountryCode().subscribe(data => this.countryCode = data);
    }

    get formControls() {
        return this.searchForm.controls;
    }

    submitSearch() {
        this.isSubmitted = true;
        if (this.searchForm.invalid) {
            return;
        }

        const q = `${this.formControls.search.value}`;
        this.router.navigate(['search'], { queryParams: { q } });
    }
}
