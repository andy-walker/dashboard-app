import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RemoteDataService {

    constructor(private http: Http) { }

    public getData(url:string):Observable<any> {
    	return this.http.get(url)
            .map((res:Response) => res.json())
            /*
            .catch((error:any) => {
            	console.log('hello!');
            	return Observable.throw(error.json().error || 'Server error');

            });
            */
    }

}
