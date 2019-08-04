import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsService } from './news.service';

describe('NewsService', () => {
    let service: NewsService;
    let httpMock: HttpTestingController;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [NewsService]
    }));

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        service = TestBed.get(NewsService);
        httpMock = TestBed.get(HttpTestingController);
        expect(service).toBeTruthy();
    });
});
