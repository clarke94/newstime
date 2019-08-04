import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoboxComponent } from './infobox.component';

describe('InfoboxComponent', () => {
    let component: InfoboxComponent;
    let fixture: ComponentFixture<InfoboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InfoboxComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoboxComponent);
        component = fixture.componentInstance;
        component.result = ArticleStub;
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