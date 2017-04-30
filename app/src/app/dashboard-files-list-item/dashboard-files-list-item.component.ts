import { Component, OnInit, Input } from '@angular/core';
import { File } from '../file';
import * as moment from 'moment';

@Component({
    selector: 'app-dashboard-files-list-item',
    templateUrl: './dashboard-files-list-item.component.html',
    styleUrls: ['./dashboard-files-list-item.component.css']
})
export class DashboardFilesListItemComponent implements OnInit {

    @Input() file:File;

    private moment;

    constructor() { 
        this.moment = moment;
    }

    ngOnInit() {}

}
