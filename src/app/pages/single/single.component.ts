import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit, OnDestroy {
    selectedArticleService;
    selectedArticle;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.getSelectedArticle();
    }

    ngOnDestroy() {
        this.selectedArticleService.unsubscribe();
    }

    getSelectedArticle() {
        this.selectedArticleService = this.dataService.getSelectedArticle().subscribe(
            data => {
                console.log('data', data);
                this.selectedArticle = data;
            }
        );
    }

}
