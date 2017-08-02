import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/RX';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-abonent',
  templateUrl: './abonent.component.html',
  styleUrls: ['./abonent.component.css']
})
export class AbonentComponent implements OnInit {

  public title = 'Список абоненов';
  public temp = [];
  public table: any;
  public rows = [];

  constructor(private http: Http) {
    this.http.get('http://localhost/lora/backend/public/api/v1/abonent/all')
      .subscribe((resp: Response) => {
        let abonents = resp.json();
        for (let index in abonents) {
          let ab = abonents[index];
          this.rows.push({ 
            AB_NAME: ab.AB_NAME, 
            AB_ID: ab.AB_ID, 
            AB_TYPE: ab.AB_TYPE, 
            AB_ADR_ID: ab.AB_ADR_ID, 
            AB_NAME1: ab.AB_NAME1,
            AB_NAME2: ab.AB_NAME2,
            AB_REM: ab.AB_REM
          });
        }
        this.temp = this.rows;
      });
   }

  ngOnInit() {
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.AB_NAME.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }
}
