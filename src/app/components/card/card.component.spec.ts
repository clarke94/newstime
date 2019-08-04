import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        component.news = ArticleStub;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

const ArticleStub = {
    source: { id: 'string', name: 12 },
    author: 'string',
    title: 'string',
    description: 'string',
    url: 'urlString',
    urlToImage: 'image string',
    publishedAt: '2019-07-19T00:19:50Z',
    content: 'string',
}
