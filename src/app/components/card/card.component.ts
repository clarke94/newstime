import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { Router } from '@angular/router';
import { SlugPipe } from 'src/app/pipes/slug/slug.pipe';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() news;

    constructor(
        private dataService: DataService,
        private router: Router,
        private slugPipe: SlugPipe
    ) { }

    ngOnInit() {
    }

    selectedArticle(news) {
        this.dataService.updateSelectedArticle(news);
        this.router.navigate(['article/', this.slugPipe.transform(news.title)]);
    }
}
