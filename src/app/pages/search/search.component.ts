import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';
import {
    trigger,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [
        trigger('listStagger', [
            transition('* => loaded', [
                query(
                    ':enter',
                    [
                        style({ opacity: 0, transform: 'translateY(50px)' }),
                        stagger(
                            '75ms',
                            animate(
                                '300ms ease-out',
                                style({ opacity: 1, transform: 'translateY(0px)' })
                            )
                        )
                    ],
                    { optional: true }
                )
            ])
        ])
    ]
})
export class SearchComponent implements OnInit {
    @Input() id: string;
    @Input() maxSize: number;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    search = {
        query: undefined,
        results: undefined,
        page: 1
    };
    isLoaded: string;
    newsBySearch;

    constructor(
        private route: ActivatedRoute,
        private newsService: NewsService
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.search.query = params.q;
            this.getNewsBySearch(params.q);
        });
    }

    getNewsBySearch(paramQuery = this.search.query) {
        this.isLoaded = 'loading';
        const endpoint = 'everything';
        const pageSizeRequest = this.search.page === 1 ? 20 : 10;
        const params = {
            pageSize: `pageSize=${pageSizeRequest}`,
            query: `q=${paramQuery}`,
            language: 'language=en',
            page: `page=${this.search.page}`
        };
        this.newsBySearch = this.newsService.getNews(endpoint, params).subscribe(data => {
            if (!this.search.results) {
                this.search.results = data.articles;
            } else {
                Array.prototype.push.apply(this.search.results, data.articles);
            }
            this.isLoaded = 'loaded';
        });
    }
}