import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news/news.service';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-hero-featured',
    templateUrl: './hero-featured.component.html',
    styleUrls: ['./hero-featured.component.scss']
})
export class HeroFeaturedComponent implements OnInit {
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
