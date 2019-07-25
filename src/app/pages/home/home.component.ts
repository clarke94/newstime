import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    latestNews;

    constructor(
        private newsService: NewsService
    ) { }

    ngOnInit() {
        this.getLatestNews();
    }

    getLatestNews() {
        this.newsService.getNews().subscribe(
            (data: any) => {
                this.latestNews = data.articles[0];
                console.log(this.latestNews);
            }
        )
    }

}
