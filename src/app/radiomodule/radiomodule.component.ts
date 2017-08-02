import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/RX';
import { Radiomodule } from '../_models/radiomodule';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-radiomodule',
  templateUrl: './radiomodule.component.html',
  styleUrls: ['./radiomodule.component.css']
})
export class RadiomoduleComponent implements OnInit {
  temp = [];
  table: any;
  rows = [];
  selected = [];
  columns = [
    { prop: 'USK_ID', name: 'ID'},
    { prop: 'USK_NAME', name: "Название" },
    { prop: 'USK_AB_ID' },
    { prop: 'USK_TYPE' },
    { prop: 'USK_ADR_ID' },
    { name: "edit"}
  ];

  radiomodules: Radiomodule[] = [];
  title = "Список радиомодулей";
  ngOnInit() {
  }
  constructor(private http: Http) {
    this.http.get('http://localhost/lora/backend/public/api/v1/radiomodules/all')
      .subscribe((resp: Response) => {
        let radiomodulesList = resp.json();
        for (let index in radiomodulesList) {
          let radiomodule = radiomodulesList[index];
          this.radiomodules.push({ USK_NAME: radiomodule.USK_NAME, USK_ID: radiomodule.USK_ID, USK_AB_ID: radiomodule.USK_AB_ID, USK_TYPE: radiomodule.USK_TYPE, USK_ADR_ID: radiomodule.USK_ADR_ID });
        }
        this.rows = this.radiomodules;
        this.temp = this.rows;
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.USK_NAME.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }



}
