import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

}
