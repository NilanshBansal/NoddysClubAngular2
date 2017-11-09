import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FirebaseService } from "../../services/firebase.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(private http: Http,
              private fs:FirebaseService,
              public fb:FormBuilder
             ) { }
             
  locationsForm: FormGroup;
  agesForm: FormGroup;
  categoriesForm: FormGroup;
  count =0;
  allData;
  objectKeys = Object.keys;
  allEvents={};
  td=new Date();
  months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  todaysDate= this.td.getDate() +  this.months[this.td.getMonth()]  + this.td.getFullYear() ; 
  city="delhi";
  locations;
  eventsArray=[];
  ages;
  categories;
  ngOnInit() {
    this.http.get('https://developer.eventshigh.com/events/' + this.city + '?key=ev3nt5h1ghte5tK3y&cf=kids').subscribe((data) => {
      this.allData=data.json();
      console.log(this.allData);
      this.fs.addData("events",this.allData.events);
      
    });
    
    this.fs.findItems("events").subscribe(data=>{
        console.log(data);
      this.allEvents=data;

      for (var key in this.allEvents) {
        if (this.allEvents.hasOwnProperty(key)) {
            console.log(key , " -> " , this.allEvents[key]);
        }
    }
    


      });

    this.fs.findItems("locations").subscribe(data=>{
      console.log(data);
      this.locations=data;
      // this.locationsForm=this.fb.group({

      // });
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

  openViewEvent(){
    
  }

}
  