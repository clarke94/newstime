import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponent } from './tabs.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Component, Input } from '@angular/core';
import { Article } from 'src/app/models/article/article';
import { MatTabsModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TabsComponent', () => {
    let component: TabsComponent;
    let fixture: ComponentFixture<TabsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxPaginationModule, MatTabsModule, HttpClientModule, BrowserAnimationsModule],
            declarations: [TabsComponent, CardStubComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

@Component({ selector: 'app-card', template: '' })
class CardStubComponent {
    @Input() news: Article;
}