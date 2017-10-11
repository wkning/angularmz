import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
	  constructor(private http: Http) { }
	    public getItems(dataURL:string){
	        return this.http.get(dataURL).map((res:Response) => res.json())
	        .catch((error:any) => Observable.throw(error || 'Server error'));
	   }
}
