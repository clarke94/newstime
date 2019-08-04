import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeaturedComponent } from './hero-featured.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeroFeaturedComponent', () => {
    let component: HeroFeaturedComponent;
    let fixture: ComponentFixture<HeroFeaturedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, RouterTestingModule],
            declarations: [HeroFeaturedComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroFeaturedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
