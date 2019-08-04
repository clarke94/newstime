import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { Component } from '@angular/core';

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PageNotFoundComponent,
                HeroFeaturedStubComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-hero-featured', template: '' })
class HeroFeaturedStubComponent { }
