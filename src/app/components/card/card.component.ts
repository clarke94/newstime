import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article/article';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() news: Article;

    constructor() { }

    ngOnInit() {
    }
}
