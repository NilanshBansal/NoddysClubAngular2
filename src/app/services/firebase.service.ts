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

  
  findItems(stringvar){
    /*this.items = this.db.list('items');
     console.log(this.items);
     this.items = this.db.list('items');
     console.log("oehoe");
     this.objects=this.db.object('/items');
     console.log(this.objects.$ref);*/
     
     this.objects=this.db.object("/" + stringvar);
     return this.objects;
    //  return this.objects;
  }

}
