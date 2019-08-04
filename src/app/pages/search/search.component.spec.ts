import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { Component, Input } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Article } from 'src/app/models/article/article';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxPaginationModule,
                RouterTestingModule,
                HttpClientModule
            ],
            declarations: [
                SearchComponent,
                HeroFeaturedStubComponent,
                InfoboxStubComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-hero-featured', template: '' })
class HeroFeaturedStubComponent {
    @Input() search;
}

@Component({ selector: 'app-infobox', template: '' })
class InfoboxStubComponent {
    @Input() result: Article;
}