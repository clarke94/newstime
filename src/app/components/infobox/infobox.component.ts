import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-infobox',
    templateUrl: './infobox.component.html',
    styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent implements OnInit {
    @Input() result;

    constructor() { }

    ngOnInit() {
    }

}
