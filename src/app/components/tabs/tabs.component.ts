import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
    private topHeadlinesService;
    topHeadlines;

    constructor(
        private dataService: DataService
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

}
