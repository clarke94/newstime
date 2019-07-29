import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    latestNews;

    constructor(
        private newsService: NewsService,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getLatestNews();
    }

    getLatestNews() {
        this.newsService.getNews().pipe(
        ).subscribe(
            (data: any) => {
                this.dataService.updateTopHeadlines(data.articles);
                this.latestNews = data.articles[0];
            }
        );
    }

}
