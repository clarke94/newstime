import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
    private topHeadlinesService;
    topHeadlines;
    latestPage: number = 1;
    business;
    businessPage: number = 1;
    entertainment;
    entertainmentPage: number = 1;
    health;
    healthPage: number = 1;
    science;
    sciencePage: number = 1;
    sports;
    sportsPage: number = 1;
    technology;
    technologyPage: number = 1;

    constructor(
        private dataService: DataService,
        private newsService: NewsService
    ) { }

    ngOnInit() {
        this.getTopHeadlines();
    }

    ngOnDestroy() {
        this.topHeadlinesService.unsubscribe();
    }

    getTopHeadlines() {
        this.topHeadlinesService = this.dataService.getTopHeadlines().subscribe(
            data => {
                this.topHeadlines = data;
            }
        )
    }

    getNewsByCategory(event) {
        const params = `&category=${event.tab.textLabel.toLowerCase()}`;
        switch (event.tab.textLabel.toLowerCase()) {
            case 'business':
                if (!this.business) {
                    this.getBusinessNews(params);
                }
                break;
            case 'entertainment':
                if (!this.entertainment) {
                    this.getEntertainmentNews(params);
                }
                break;
            case 'health':
                if (!this.health) {
                    this.getHealthNews(params);
                }
                break;
            case 'science':
                if (!this.science) {
                    this.getScienceNews(params);
                }
                break;
            case 'sports':
                if (!this.sports) {
                    this.getSportsNews(params);
                }
                break;
            case 'technology':
                if (!this.technology) {
                    this.getTechnologyNews(params);
                }
                break;
            default:
                this.getTopHeadlines();
        }

    }

    getBusinessNews(params) {
        this.newsService.getNews(params).subscribe(data => this.business = data.articles);
    }

    getEntertainmentNews(params) {
        this.newsService.getNews(params).subscribe(data => this.entertainment = data.articles);
    }

    getHealthNews(params) {
        this.newsService.getNews(params).subscribe(data => this.health = data.articles);
    }

    getScienceNews(params) {
        this.newsService.getNews(params).subscribe(data => this.science = data.articles);
    }

    getSportsNews(params) {
        this.newsService.getNews(params).subscribe(data => this.sports = data.articles);
    }

    getTechnologyNews(params) {
        this.newsService.getNews(params).subscribe(data => this.technology = data.articles);
    }
}
