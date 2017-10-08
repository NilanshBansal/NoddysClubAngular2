import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseService } from "../../services/firebase.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private http: Http,
              private fs:FirebaseService
             ) { }
  allData;
  allEvents;
  
  locations;
  ages;
  categories;
  ngOnInit() {
    this.http.get('https://developer.eventshigh.com/events/delhi?key=ev3nt5h1ghte5tK3y').subscribe((data) => {
      this.allData=data.json();
      console.log(this.allData);
      this.allEvents=this.allData.events;
      
    });
    

    this.fs.findItems("locations").subscribe(data=>{
      console.log(data);
      this.locations=data;
    });


    this.fs.findItems("ages").subscribe(data=>{
      console.log(data);
      this.ages=data;
    });

    this.fs.findItems("categories").subscribe(data=>{
      console.log(data);
      this.categories=data;
    });

    
  }

  ngAfterViewInit(){
    console.log("after init");
    
  }
 
  myOnChange(event){
    console.log(event);
    console.log(event.from);
  }

}
  