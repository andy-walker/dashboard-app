/**
 * Component encapsulating functionality for dashboard files list view
 */
import { Component, OnInit, Input } from '@angular/core';
import { File } from '../file';
import { User } from '../user';

@Component({
    selector: 'app-dashboard-files-list',
    templateUrl: './dashboard-files-list.component.html',
    styleUrls: ['./dashboard-files-list.component.css']
})
export class DashboardFilesListComponent implements OnInit {

    @Input() files: File[];
    @Input() users: User[];

    private expanded:boolean = false;

    constructor() { }

    ngOnInit() {

    }

}
