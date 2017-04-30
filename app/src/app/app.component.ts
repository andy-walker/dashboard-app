/**
 * Main application container class
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    public config:any;

    protected isLoading: boolean = true;
    protected isError:   boolean = false;

    /**
     * Constructor - initialise the application
     */
    constructor() {
        this.config = require('../config.json');
    }

    /**
     * Event handler to catch 'pageLoaded' events, which should 
     * be emitted by the section loader once successfully loaded
     * @param {boolean} success  whether the section was successfully loaded
     */
    onPageLoaded(success:boolean) {
        this.isLoading = !success;
    }

    /**
     * Event handler to catch 'pageError' events, which will 
     * be emitted by the section loader in the case the loader encountered
     * an error during the ajax loading process
     * @param {number} errorCode  the status of the error, eg: 500
     */
    onPageError(errorCode:number) {
        // this will always be a 500 error for now, but could be extended
        // in future to handle other types of error
        this.isLoading = false;
        this.isError   = true;
    
    }

}
