import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
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
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    animations: [
        trigger('listStagger', [
            transition('* => loaded', [
                query(
                    ':enter',
                    [
                        style({ opacity: 0, transform: 'translateY(-50px)' }),
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
export class TabsComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() maxSize: number;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    newsByCategoryService;
    isLoaded: string;

    page = {
        general: 1,
        business: 1,
        entertainment: 1,
        health: 1,
        science: 1,
        sports: 1,
        technology: 1
    };

    data = {
        general: undefined,
        business: undefined,
        entertainment: undefined,
        health: undefined,
        science: undefined,
        sports: undefined,
        technology: undefined
    };

    constructor(
        private newsService: NewsService
    ) { }

    ngOnInit() {
        const event = {
            tab: {
                textLabel: 'general'
            }
        };
        this.getNewsByCategory(event);
    }

    ngOnDestroy() {
        this.newsByCategoryService.unsubscribe();
    }

    getNewsByCategory(event) {
        this.isLoaded = 'loading';
        const category = event.tab.textLabel.toLowerCase();
        const endpoint = 'top-headlines';
        const pageSizeRequest = !this.data[category] ? 18 : 9;
        const params = {
            country: 'country=gb',
            category: `category=${category}`,
            pageSize: `pageSize=${pageSizeRequest}`,
            page: `page=${this.page[category]}`
        };
        this.newsByCategoryService = this.newsService.getNews(endpoint, params).subscribe(data => {
            if (!this.data[category]) {
                this.data[category] = data.articles;
            } else {
                Array.prototype.push.apply(this.data[category], data.articles);
            }
            this.isLoaded = 'loaded';
        });

    }

    getNewsByPagination(event) {
        const paginateEvent = {
            tab: {
                textLabel: event.id.substring(3).toLowerCase()
            }
        };
        this.getNewsByCategory(paginateEvent);
    }
}
