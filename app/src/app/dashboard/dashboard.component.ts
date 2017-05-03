/**
 * Component encapsulating dashboard functionality
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RemoteDataService } from '../remote-data.service';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { File } from '../file';
import { Type } from '../type';
import { User } from '../user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [RemoteDataService]
})

export class DashboardComponent implements OnInit {
    
    @Input()  config:any;
    @Output() pageLoaded:EventEmitter<boolean> = new EventEmitter();
    @Output() pageError:EventEmitter<number>   = new EventEmitter();

    public users: User[] = [];
    public types: Type[] = [];
    public files: File[] = [];

    private attempts:number = 0;

    constructor(private remoteDataService: RemoteDataService) { }

    ngOnInit() {
        
        let datasource:RemoteDataService = this.remoteDataService,
            endpoints:any                = this.config.datasource.endpoints;

        // send a set of parallel requests for the data we need ..
        let jobs:Observable<any>[] = [
            datasource.getData(endpoints.users),
            datasource.getData(endpoints.types),
            datasource.getData(endpoints.files)
        ];

        this.attempts++;

        // when they've all come back ..
        Observable.forkJoin(jobs).subscribe(
            
            // if successful ..
            results => {

                let names = {};
                let users = results[0];
                let types = results[1];
                let files = results[2];

                // load users into an array + also create a list mapping user ids 
                // to names in the process
                for (let fields of users) {
                    names[fields.id] = `${fields.givenName} ${fields.familyName}`;
                    this.users.push(new User(fields));
                }

                // load types into an array
                for (let fields of types)
                    this.types.push(new Type(fields));

                // load files into an array, also use the name mapping list we created
                // to populate the modifiedByName field
                for (let fields of files) {
                    
                    let author = fields.modifiedBy in names ? names[fields.modifiedBy] : 'Unknown';
                    let file   = new File(fields);
                    
                    file.modifiedByName = author;
                    this.files.push(file);

                }

                // emit a pageLoaded event, to signal to the application
                // we're ready to display some content
                this.pageLoaded.emit(true);

            },
            
            // if there was an error ..
            error => {

                // try again if configured to retry if a 500 error received
                if ('retryOnError' in this.config && this.config.retryOnError) {
                    
                    let maxAttempts = 'maxAttempts' in this.config ? this.config.maxAttempts : 3;

                    if (this.attempts < maxAttempts)
                        this.ngOnInit();
                    else
                        // finally display an error page if we've exceeded the maximum 
                        // number of attempts allowed
                        this.pageError.emit(error.status);

                // otherwise emit a pageError event, to signal to the application
                // to display an error page
                } else {
                    this.pageError.emit(error.status);
                }
            }

        );

    }

}
