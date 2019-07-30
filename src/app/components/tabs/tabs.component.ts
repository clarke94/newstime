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
    latestPage = 1;

    businessService;
    business;
    businessPage = 1;

    entertainmentService;
    entertainment;
    entertainmentPage = 1;

    healthService;
    health;
    healthPage = 1;

    scienceService;
    science;
    sciencePage = 1;

    sportsService;
    sports;
    sportsPage = 1;

    technologyService;
    technology;
    technologyPage = 1;

    constructor(
        private dataService: DataService,
        private newsService: NewsService
    ) { }

    ngOnInit() {
        this.getTopHeadlines();
    }

    ngOnDestroy() {
        this.topHeadlinesService.unsubscribe();
        this.businessService.unsubscribe();
        this.entertainmentService.unsubscribe();
        this.healthService.unsubscribe();
        this.scienceService.unsubscribe();
        this.sportsService.unsubscribe();
        this.technologyService.unsubscribe();
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

    getTopHeadlines() {
        this.topHeadlinesService = this.dataService.getTopHeadlines().subscribe(data => this.topHeadlines = data);
    }

    getBusinessNews(params) {
        this.businessService = this.newsService.getNews(params).subscribe(data => this.business = data.articles);
    }

    getEntertainmentNews(params) {
        this.entertainmentService = this.newsService.getNews(params).subscribe(data => this.entertainment = data.articles);
    }

    getHealthNews(params) {
        this.healthService = this.newsService.getNews(params).subscribe(data => this.health = data.articles);
    }

    getScienceNews(params) {
        this.scienceService = this.newsService.getNews(params).subscribe(data => this.science = data.articles);
    }

    getSportsNews(params) {
        this.sportsService = this.newsService.getNews(params).subscribe(data => this.sports = data.articles);
    }

    getTechnologyNews(params) {
        this.technologyService = this.newsService.getNews(params).subscribe(data => this.technology = data.articles);
    }
}
