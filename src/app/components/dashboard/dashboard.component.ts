import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:Http) { }
  
  ngOnInit() {
    alert("dashboard");
    this.http.get('https://developer.eventshigh.com/events/delhi?key=ev3nt5h1ghte5tK3y').subscribe((data)=>{
      console.log(data.json());
    });
  }

}
