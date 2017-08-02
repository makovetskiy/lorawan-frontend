import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        return true;
        /*
        if (localStorage.getItem('token')) {
            console.log('token true!');
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
        */
    }
}