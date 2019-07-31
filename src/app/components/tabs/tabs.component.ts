import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
    @Input() id: string;
    @Input() maxSize: number;
    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    topHeadlinesService;
    newsByCategoryService;

    page = {
        latest: 1,
        business: 1,
        entertainment: 1,
        health: 1,
        science: 1,
        sports: 1,
        technology: 1
    };

    data = {
        latest: undefined,
        business: undefined,
        entertainment: undefined,
        health: undefined,
        science: undefined,
        sports: undefined,
        technology: undefined
    };

    constructor(
        private dataService: DataService,
        private newsService: NewsService
    ) { }

    ngOnInit() {
        this.getTopHeadlines();
    }

    ngOnDestroy() {
        this.topHeadlinesService.unsubscribe();
        this.newsByCategoryService.unsubscribe();
    }

    getNewsByCategory(event) {
        const category = event.tab.textLabel.toLowerCase();
        const params = {
            category: `category=${category}`
        };
        if (!this.data[category] && category !== 'latest') {
            this.newsByCategoryService = this.newsService.getNews(params).subscribe(data => this.data[category] = data.articles);
        }
    }

    getTopHeadlines() {
        this.topHeadlinesService = this.dataService.getTopHeadlines().subscribe(data => this.data.latest = data);
    }
}
