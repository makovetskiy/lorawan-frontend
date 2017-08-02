import { Component, OnInit } from '@angular/core';
import { Http, Response,Headers, URLSearchParams } from '@angular/http';
import { Subject } from 'rxjs/RX';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css'],
})
export class ApplicationsComponent implements OnInit {

  public title = 'Список приложений';
  public temp = [];
  public table: any;
  public rows = [];
  public  app = new App();
  constructor(private http: Http) {
    this.http.get('http://localhost/lora/backend/public/api/v1/application/all')
      .subscribe((resp: Response) => {
        let applications = resp.json();
        for (let index in applications) {
          let app = applications[index];
          this.rows.push({ 
            AppEUI: app.AppEUI, 
            Name: app.Name, 
            Code: app.Code
          });
        }
        this.temp = this.rows;
      });
  }

  ngOnInit() {

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.Name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  submit(app){
    console.log("sub",app.Name)
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log("sub2",app.Name)
        return this.http.post('http://localhost/lora/backend/public/api/v1/application/create',JSON.stringify({Name:app.Name}))
            .map((response: Response) => {
              console.log("test",app.Name)
                let res = response.json() 
                console.log("Res = ", res);
                if (res) {
                    return true;
                } else {
                    return false;
                }
            });
  }

}

export class App{
    AppEUI: string; 
    Name: string; 
    Code: string;
}