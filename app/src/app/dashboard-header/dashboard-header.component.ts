import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
    styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {

    @Input() users: User[];

    constructor() { }

    ngOnInit() {
    }

}
