import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/RX';
import { Radiomoduletype } from '../_models/radiomoduletype';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-radioduletype',
  templateUrl: './radioduletype.component.html',
  styleUrls: ['./radioduletype.component.css']
})
export class RadioduletypeComponent implements OnInit {

  temp = [];
  table: any;
  rows = [];
  selected = [];
  columns = [
    { prop: 'USKT_ID', name: 'ID'},
    { prop: 'USKT_NAME', name: "Название типа контроллера/радиомодуля" },
    { prop: 'USKT_SNAME', name: 'Короткое название контроллера/радиомодуля' },
    { prop: 'USKT_IMAGE', name: 'Изображение'}
  ];

  radiomodulestype: Radiomoduletype[] = [];
  title = "Типы радиомодулей";
  ngOnInit() {
  }
  constructor(private http: Http) {
    this.http.get('http://localhost/lora/backend/public/api/v1/radiomodules/type/all')
      .subscribe((resp: Response) => {
        let radiomodulesList = resp.json();
        for (let index in radiomodulesList) {
          let radiomoduletype = radiomodulesList[index];
          this.radiomodulestype.push({ 
            USKT_ID: radiomoduletype.USKT_ID,
            USKT_NAME: radiomoduletype.USKT_NAME,
            USKT_SNAME: radiomoduletype.USKT_SNAME,
            USKT_IMAGE: null });
        }
        this.rows = this.radiomodulestype;
        this.temp = this.rows;
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.USKT_NAME.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

}
