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
    private activeSection:string = 'my-content';

    // a list of files after filtering
    private results: File[];

    constructor() { }

    /**
     * Method to filter the list of files
     * @param {object} params  an object containing key / value pairs to filter on
     * (when more than one, the filters will be ANDed together)
     */
    filterResults(params:any) {

        this.results = this.files.filter(file => {
            for (let key in params)
                if (key in file && file[key] !== params[key])
                    return false;
            return true;
        });

    }

    ngOnInit() {

        // list is unfiltered to begin with
        this.results = this.files;
    
    }

    /**
     * Set the specified tab to be active
     * @param {string} section  the tab to activate
     */
    setActive(section:string) {
        this.activeSection = section;
        this.expanded = false;
    }

}
