import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    getData(){
        return this.http.get('appl.json').map((response: Response) => response.json());         
    }
}