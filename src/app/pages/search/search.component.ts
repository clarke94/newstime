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
import { SlugPipe } from 'src/app/pipes/slug/slug.pipe';

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
        oldQuery: undefined,
        results: undefined,
        page: 1,
        totalPages: undefined
    };
    isLoaded: string;
    newsBySearch;

    constructor(
        private route: ActivatedRoute,
        private newsService: NewsService,
        private slugPipe: SlugPipe
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.search.oldQuery = this.search.query;
            this.search.query = params.q;
            this.getNewsBySearch(params.q);
        });
    }

    getSuheading() {
        return `Page ${this.search.page} of ${this.search.totalPages}`;
    }

    getHeading() {
        return `You searched for ${this.search.query}`;
    }

    getNewsBySearch(paramQuery = this.search.query) {
        this.isLoaded = 'loading';
        const endpoint = 'everything';
        const pageSizeRequest = this.search.page === 1 ? 20 : 10;
        this.search.page = this.search.oldQuery !== this.search.query ? 1 : this.search.page;
        const pageNumber = !this.search.results ? this.search.page : this.search.page + 1;
        const params = {
            pageSize: `pageSize=${pageSizeRequest}`,
            query: `q="${this.slugPipe.transform(paramQuery)}"`,
            language: 'language=en',
            page: `page=${pageNumber}`
        };
        if (!this.search.results || this.search.oldQuery !== this.search.query || this.search.page === this.search.results.length / 10) {
            this.newsBySearch = this.newsService.getNews(endpoint, params).subscribe(data => {
                this.search.totalPages = Math.round((data.totalResults / 10));
                if (!this.search.results || this.search.oldQuery !== this.search.query) {
                    this.search.results = data.articles;
                    this.search.oldQuery = this.search.query;
                } else {
                    Array.prototype.push.apply(this.search.results, data.articles);
                }
                this.isLoaded = 'loaded';
            });
        }
    }
}
