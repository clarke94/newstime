import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NewsService } from 'src/app/services/news/news.service';
import { Article } from 'src/app/models/article/article';

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

    latestPage = 1;
    businessPage = 1;
    entertainmentPage = 1;
    healthPage = 1;
    sciencePage = 1;
    sportsPage = 1;
    technologyPage = 1;

    data = {};

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
        this.newsByCategoryService = this.newsService.getNews(params).subscribe(data => this.data[category] = data.articles);
    }

    getTopHeadlines() {
        this.topHeadlinesService = this.dataService.getTopHeadlines().subscribe(data => this.data['featured'] = data);
    }
}
