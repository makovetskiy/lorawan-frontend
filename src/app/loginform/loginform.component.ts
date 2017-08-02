import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.UserName, this.model.StoredPassword)
            .subscribe(result => {
                console.log(result);
                if (result === true) {
                    this.router.navigate(['/dash']);
                } else {
                    this.error = 'Неверный логин или пароль!';
                    this.loading = false;
                }
            });
    }
}
