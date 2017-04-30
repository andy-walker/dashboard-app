import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../type';

@Component({
    selector: 'app-dashboard-types-list',
    templateUrl: './dashboard-types-list.component.html',
    styleUrls: ['./dashboard-types-list.component.css']
})
export class DashboardTypesListComponent implements OnInit {

    @Input() types: Type[];

    constructor() { }

    ngOnInit() {
    }

}
