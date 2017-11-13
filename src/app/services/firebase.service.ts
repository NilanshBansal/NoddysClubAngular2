import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  items: FirebaseListObservable<any[]>;
  objects: FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase,
    private router: Router,
    public afAuth: AngularFireAuth) {

    /*this.items = db.list('/items');
    console.log(this.items);
    console.log("oehoe");
    this.objects=db.object('/items');
    console.log(this.objects.$ref);
    
   this.objects.subscribe(data=>{
     console.log(data);
   });*/


  }


  findItems(stringvar) {
    /*this.items = this.db.list('items');
     console.log(this.items);
     this.items = this.db.list('items');
     console.log("oehoe");
     this.objects=this.db.object('/items');
     console.log(this.objects.$ref);*/
     return this.db.list('/' + stringvar);
    

    /* this.objects = this.db.object("/" + stringvar);
    return this.objects; */


  }
  getEvents(stringvar){
    return this.db.list('/' + stringvar , {
      query: {
        orderByKey:true,
        limitToFirst:5
      }
    });
  }

  getEventsWithStartAt(stringvar,startAt){

    return this.db.list('/' + stringvar , {
      query: {
        orderByKey:true,
         startAt: startAt,
         limitToFirst:6
      }
    });
  }

  getEventsWithEndAt(stringvar,endAt){
    console.log(endAt);
    return this.db.list('/' + stringvar , {
      query: {
        orderByKey:true,
         endAt: endAt,
         limitToLast:5
      }
    });
  }

  addData(stringvar, arrEvents) {
    var obj = {};
    const itemRef = this.db.object("/" + stringvar, { preserveSnapshot: true });


    itemRef.subscribe(snapshot => {
      arrEvents.forEach(element => {
        element["title"] = element["title"].replace(/[\.,#,$,/,\[,\]]/g, '');

        if (snapshot.val() == null || (snapshot.val() != null && snapshot.val()[element["title"]] == undefined)) {
          element["adminApproved"] = false;
          obj[element["title"]] = element;

          console.log(element["title"]);
        }
      });
       console.log(obj);
       console.log(Object.keys(obj).length);
      itemRef.update(obj);
    });



  }

}
