import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    public headers:Headers;

    constructor(private http: Http) {
        this.headers = new Headers(); 
        this.headers.append('Content-Type', 'application/json');

        var token = JSON.parse(localStorage.getItem('token'));
        if(token){
            this.token = token.token;
            console.log('token true');
        }
        else{
            console.log('token false');
        }
        
    }

    login(UserName: string, StoredPassword: string): Observable<boolean> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost/lora/backend/public/api/v1/auth/login', {UserName:UserName,StoredPassword:StoredPassword},headers)
            .map((response: Response) => {
                let token = response.json() && response.json().token;
                console.log("Token = ", token);
                if (token) {
                    this.token = token;
                    localStorage.setItem('token', JSON.stringify({token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('token');
    }
}